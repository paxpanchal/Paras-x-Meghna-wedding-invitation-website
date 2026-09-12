import { WeddingInfo } from '../types';

/**
 * Builds the direct Google Calendar creation link with pre-filled details.
 */
export function getGoogleCalendarUrl(wedding: WeddingInfo): string {
  const { title, description, location, startDateUTC, endDateUTC } = wedding.calendar;
  
  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startDateUTC}/${endDateUTC}`,
    details: description,
    location: location,
    ctz: 'Asia/Kolkata'
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generates and triggers download of a standardized .ics file for Apple/Outlook/Mobile calendar.
 */
export function downloadIcsFile(wedding: WeddingInfo): void {
  const { title, description, location, startDateUTC, endDateUTC } = wedding.calendar;
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Paras and Meghna//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${startDateUTC}@paras-meghna-wedding.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${startDateUTC}`,
    `DTEND:${endDateUTC}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location.replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Paras-and-Meghna-Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
