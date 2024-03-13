export const getTimeZoneTime = (timezone) => {
    const day = new Date();
    const hours = (day.getUTCHours() + +timezone);
    const minutes = day.getUTCMinutes() < '10' ? '0' + day.getUTCMinutes() : day.getUTCMinutes()
    const seconds = day.getUTCSeconds() < '10' ? '0' + day.getUTCSeconds() : day.getUTCSeconds()
    return { hours, minutes, seconds };
  }