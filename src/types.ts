export interface WeddingInfo {
  groomName: string;
  brideName: string;
  coupleDisplay: string;
  auspiciousHeader: string;
  sanskritVerse?: string;
  weddingDateFormatted: string;
  weddingTimeFormatted: string;
  targetDateTimeISO: string; // "2026-11-24T11:00:00+05:30"
  tagline: string;
  photoUrl: string;
  
  venue: {
    name: string;
    subLocation: string;
    cityState: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  
  calendar: {
    title: string;
    description: string;
    location: string;
    startDateUTC: string;
    endDateUTC: string;
  };
  
  closing: {
    message: string;
    signOff: string;
  };
  
  music: {
    title: string;
    audioSrc: string;
    synthesizerFallback: boolean;
  };

  family: {
    groom: {
      fullName: string;
      father: string;
      mother: string;
      hometown: string;
    };
    bride: {
      fullName: string;
      father: string;
      mother: string;
      from: string;
    };
  };
}

export interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
