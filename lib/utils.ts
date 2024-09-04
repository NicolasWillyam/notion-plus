import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeSolved = (time: string): string => {
  // Convert creationTime from string to number (assuming it's in milliseconds)
  const creationTimeMs = parseFloat(time);

  // Get the current time in milliseconds
  const currentTime = Date.now();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - creationTimeMs;

  // Convert time difference to various units
  const timeDifferenceInMinutes = Math.floor(timeDifference / (60 * 1000));
  const timeDifferenceInHours = Math.floor(timeDifference / (60 * 60 * 1000));
  const timeDifferenceInDays = Math.floor(
    timeDifference / (24 * 60 * 60 * 1000)
  );
  const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);
  const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30);

  // Define the formats
  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes}m`;
  } else if (timeDifferenceInHours < 24) {
    return `${timeDifferenceInHours}h`;
  } else if (timeDifferenceInDays < 7) {
    return `${timeDifferenceInDays}d`;
  } else if (timeDifferenceInWeeks < 4) {
    return `${timeDifferenceInWeeks}w`;
  } else if (timeDifferenceInMonths < 12) {
    return `${timeDifferenceInMonths}mon`;
  } else {
    // Convert milliseconds to Date object for exact date formatting
    const creationDate = new Date(creationTimeMs);
    return creationDate.toLocaleDateString(); // Format the date as needed
  }
};
