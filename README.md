# Paras & Meghna — Luxury Digital Wedding Invitation

A premium, elegant, mobile-first digital Indian wedding invitation website crafted for **Paras & Meghna**, celebrating their wedding on **24 November 2026** at **Dandeshwar Shankar Mandir, Khar Danda, Mumbai**.

Designed specifically to be shared on WhatsApp as a single luxury digital invitation link.

---

## Key Features

- **Cinematic Opening Screen**: Sacred ॐ invocation, Shubh Vivah header, animated Indian mandala aura, and interactive "Open Invitation" seal.
- **Editorial Typography & Indian Aesthetics**: Warm ivory canvas (`#FAF7F2`), champagne gold accents (`#C5A059`), royal lotus flourishes, traditional jharokha arch portrait frame, and subtle Indian ornamental borders.
- **Accurate Live Countdown**: Dynamically counts down Days, Hours, Minutes, and Seconds to 24 November 2026, 11:00 AM IST with a graceful celebratory state on the wedding day.
- **Add to Google Calendar Integration**: Real Google Calendar event creation URL pre-populated with title, date, time (IST), full venue address, and description, plus downloadable `.ics` for Apple Calendar & Outlook.
- **Venue & Google Maps**: Clean venue card with full address, travel landmarks, copy address button, and direct link to Google Maps (`https://maps.app.goo.gl/bJxEDWNxDQtLD2CBA`).
- **Our Story & Blessings**: Tasteful, customizable editorial story and blessings from families.
- **Responsive Photo Gallery**: Mobile swipe carousel, desktop editorial grid, and full-screen lightbox modal.
- **Discreet Music Player**: Web Audio ambient Indian acoustic raga synthesizer drone that plays out-of-the-box on user tap, with a direct slot for custom MP3 wedding music.

---

## 1. How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` (or the port specified in terminal).

---

## 2. How to Replace Photographs

All photograph references and placeholders are organized centrally in `src/data/weddingData.ts`:

### A. Couple Hero Photograph
- Open `src/components/HeroSection.tsx` or place your image inside the `public/photos/` folder (e.g. `public/photos/couple.jpg`).
- In `HeroSection.tsx`, update the source to point to `/photos/couple.jpg`.
- You can also test and preview your photo instantly in the browser using the **"Preview Your Photo"** button directly on the couple portrait arch!

### B. Gallery Photographs
- In `src/data/weddingData.ts`, find the `gallery` array:
  ```typescript
  gallery: [
    {
      id: 'gallery-1',
      title: 'Sacred Rituals',
      subtitle: 'The sacred fire and holy blessings',
      src: '/photos/haldi.jpg', // or an external image link
      aspectRatio: 'portrait'
    },
    // ...
  ]
  ```
- Simply place your wedding or pre-wedding photos in `public/photos/` and update the `src` path.

---

## 3. How to Replace Music

1. Add your chosen wedding song or Shehnai music file as `wedding-music.mp3` inside the `public/audio/` directory:
   ```
   public/audio/wedding-music.mp3
   ```
2. In `src/data/weddingData.ts`, verify the `music.audioSrc` setting:
   ```typescript
   music: {
     title: 'Royal Shehnai & Sitar Melody',
     audioSrc: '/audio/wedding-music.mp3',
     synthesizerFallback: true
   }
   ```
3. If no MP3 is supplied, the site automatically falls back to an acoustic synthesized Indian Tanpura & Raag Bhupali drone so the music button always works beautifully without errors.

---

## 4. How to Change Wedding Information

All wedding information is stored in a single central file:
📁 **`src/data/weddingData.ts`**

You can easily change:
- **Couple Names**: `groomName`, `brideName`, `coupleDisplay`
- **Wedding Date & Time**: `weddingDateFormatted`, `weddingTimeFormatted`, `targetDateTimeISO`
- **Venue & Google Maps**: `venue.name`, `venue.fullAddress`, `venue.googleMapsUrl`
- **Our Story Narrative**: `story.quote`, `story.narrative`
- **Blessings Message**: `blessingsMessage.quote`, `blessingsMessage.familySalutation`
- **Closing Message**: `closing.message`, `closing.signOff`

---

## 5. How to Deploy to Vercel

1. Push this repository to your **GitHub** account.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"** and select your wedding repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. In under a minute, you'll have a live, shareable URL to send to family and guests on WhatsApp!
