/**
 * Strictly Unique Singleton Audio Manager for Paras & Meghna's Wedding Website.
 *
 * Guarantees:
 * 1. Exactly ONE HTMLAudioElement for the entire browser session.
 * 2. Stored on a global window symbol and module-level ref to prevent duplicate initialization
 *    across component re-renders, fast-refreshes, or navigation.
 * 3. Idempotent play/pause operations.
 * 4. Named, deduped event listeners with complete cleanup capability.
 * 5. Clean native loop of the complete track with zero overlaps, synthetic hums, or chimes.
 */

const STORAGE_KEY = 'paras_meghna_music_muted';
const TARGET_VOLUME = 0.25;

declare global {
  interface Window {
    __PARAS_MEGHNA_AUDIO_SINGLETON__?: HTMLAudioElement;
  }
}

export class WeddingAudioManager {
  private static instance: WeddingAudioManager | null = null;
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private isMutedByUser = false;
  private listeners = new Set<(playing: boolean) => void>();
  private initialized = false;

  // Bound event handlers for strict listener deduplication & cleanup
  private readonly handlePlay = () => {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.notify();
    }
  };

  private readonly handlePause = () => {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.notify();
    }
  };

  private readonly handleEnded = () => {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.notify();
    }
  };

  private readonly handleError = () => {
    this.isPlaying = false;
    this.notify();
  };

  constructor() {
    this.readUserPreference();
  }

  public static getInstance(): WeddingAudioManager {
    if (!WeddingAudioManager.instance) {
      WeddingAudioManager.instance = new WeddingAudioManager();
    }
    return WeddingAudioManager.instance;
  }

  private readUserPreference(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === 'true') {
          this.isMutedByUser = true;
        }
      }
    } catch {
      // Non-blocking in sandboxed environments
    }
  }

  private saveUserPreference(muted: boolean): void {
    this.isMutedByUser = muted;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false');
      }
    } catch {
      // Non-blocking in sandboxed environments
    }
  }

  /**
   * Initializes or returns the singleton HTMLAudioElement strictly once.
   */
  public getOrCreateAudio(src: string): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;

    // 1. Check window-level singleton to guarantee stability across re-renders & HMR
    if (window.__PARAS_MEGHNA_AUDIO_SINGLETON__) {
      this.audio = window.__PARAS_MEGHNA_AUDIO_SINGLETON__;
      return this.audio;
    }

    if (!this.audio) {
      try {
        const audioElement = new Audio();
        audioElement.src = src;
        audioElement.loop = true;
        audioElement.preload = 'auto';
        audioElement.volume = TARGET_VOLUME;

        // Attach bound handlers strictly once
        audioElement.addEventListener('play', this.handlePlay);
        audioElement.addEventListener('pause', this.handlePause);
        audioElement.addEventListener('ended', this.handleEnded);
        audioElement.addEventListener('error', this.handleError);

        this.audio = audioElement;
        window.__PARAS_MEGHNA_AUDIO_SINGLETON__ = audioElement;
        this.initialized = true;
      } catch {
        return null;
      }
    }

    return this.audio;
  }

  /**
   * Subscribe a component's state updater to playback status changes.
   * Returns a cleanup function for React useEffect.
   */
  public subscribe(listener: (playing: boolean) => void): () => void {
    this.listeners.add(listener);
    // Immediately emit current state to subscriber
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlaying);
      } catch {
        // Guard against subscriber errors
      }
    });
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getAudioElement(): HTMLAudioElement | null {
    return this.audio;
  }

  /**
   * Starts playback on the user gesture when opening the invitation card.
   * If already playing or muted by user, does nothing.
   */
  public async startOnOpen(src: string = '/music/wedding-theme.mp3'): Promise<boolean> {
    if (this.isPlaying) return true;
    if (this.isMutedByUser) return false;

    const audio = this.getOrCreateAudio(src);
    if (!audio) return false;

    try {
      if (!audio.src || !audio.src.includes('wedding-theme')) {
        audio.src = src;
      }
      audio.volume = TARGET_VOLUME;
      audio.loop = true;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      this.isPlaying = true;
      this.notify();
      return true;
    } catch {
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  /**
   * Toggle play / pause state.
   */
  public async toggle(src: string = '/music/wedding-theme.mp3'): Promise<boolean> {
    const audio = this.getOrCreateAudio(src);
    if (!audio) return false;

    if (this.isPlaying) {
      try {
        audio.pause();
      } catch {
        // Safe catch
      }
      this.isPlaying = false;
      this.saveUserPreference(true);
      this.notify();
      return false;
    } else {
      this.saveUserPreference(false);
      try {
        audio.volume = TARGET_VOLUME;
        audio.loop = true;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
        this.isPlaying = true;
        this.notify();
        return true;
      } catch {
        this.isPlaying = false;
        this.notify();
        return false;
      }
    }
  }

  /**
   * Complete cleanup if needed on teardown.
   */
  public destroy(): void {
    if (this.audio) {
      this.audio.removeEventListener('play', this.handlePlay);
      this.audio.removeEventListener('pause', this.handlePause);
      this.audio.removeEventListener('ended', this.handleEnded);
      this.audio.removeEventListener('error', this.handleError);
      try {
        this.audio.pause();
        this.audio.src = '';
      } catch {
        // Safe catch
      }
      this.audio = null;
      if (typeof window !== 'undefined') {
        window.__PARAS_MEGHNA_AUDIO_SINGLETON__ = undefined;
      }
    }
    this.isPlaying = false;
    this.listeners.clear();
    this.initialized = false;
  }
}

export const weddingAudio = WeddingAudioManager.getInstance();
