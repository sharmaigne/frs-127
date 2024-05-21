import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringToDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function stringToDay(date: string) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = new Date(date).getDay();
  return days[dayIndex];
}

export function stringToTime(date: string) {
  if (new Date(date).getMinutes() === 0) 
    return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric' })

  return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}