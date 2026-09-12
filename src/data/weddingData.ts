import { WeddingInfo } from '../types';

export const WEDDING_DATA: WeddingInfo = {
  groomName: 'Paras',
  brideName: 'Meghna',
  coupleDisplay: 'Paras & Meghna',
  auspiciousHeader: 'SHUBH VIVAH',
  sanskritVerse: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
  weddingDateFormatted: '24 November 2026',
  weddingTimeFormatted: '11:00 AM',
  targetDateTimeISO: '2026-11-24T11:00:00+05:30',
  tagline: 'Two hearts, one beautiful beginning.',
  photoUrl: '/1777036404843.png',

  venue: {
    name: 'Dandeshwar Shankar Mandir',
    subLocation: 'Khar Danda, Khar Road',
    cityState: 'Mumbai, Maharashtra',
    fullAddress: 'Dandeshwar Shankar Mandir, Khar Danda, Khar Road, Mumbai, Maharashtra, India',
    googleMapsUrl: 'https://maps.app.goo.gl/bJxEDWNxDQtLD2CBA'
  },

  calendar: {
    title: 'Paras & Meghna — Wedding',
    description: 'Wedding celebration of Paras & Meghna.',
    location: 'Dandeshwar Shankar Mandir, Khar Danda, Khar Road, Mumbai, Maharashtra, India',
    startDateUTC: '20261124T053000Z', // 11:00 AM IST (UTC+5:30)
    endDateUTC: '20261124T093000Z'    // 03:00 PM IST
  },

  closing: {
    message: 'With love, we invite you to celebrate with us.',
    signOff: 'With love ❤️'
  },

  music: {
    title: 'Serene Acoustic Wedding Theme',
    audioSrc: '/music/wedding-theme.mp3',
    synthesizerFallback: true
  },

  family: {
    groom: {
      fullName: 'PARAS RAJESH PANCHAL',
      father: 'Rajesh Ratilal Panchal',
      mother: 'Rashmi Rajesh Panchal',
      hometown: 'Valsad, Gujarat'
    },
    bride: {
      fullName: 'MEGHNA UMESH SHARMA',
      father: 'Umesh Sharma',
      mother: 'Prema Umesh Sharma',
      from: 'Khar Danda, Mumbai'
    }
  }
};
