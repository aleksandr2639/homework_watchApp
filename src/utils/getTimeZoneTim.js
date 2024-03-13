export const getTimeZoneTime = (timezone) => {
    const day = new Date();
    const hours = (day.getUTCHours() + +timezone);
    const minutes = day.getUTCMinutes();
    const seconds = day.getUTCSeconds();
    return { hours, minutes, seconds };
  }