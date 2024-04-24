export const getTimePassed = (date: Date | string) => {
  const currentDate = new Date();
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return 'Invalid date';

  const diffInMilliseconds = currentDate.getTime() - parsedDate.getTime();

  const seconds = Math.floor(diffInMilliseconds / 1000);

  if (seconds < 60)
    return seconds > 0 ? pluralize(seconds, 'second') : 'Just now';

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return pluralize(minutes, 'minute');

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return pluralize(hours, 'hour');

  const days = Math.floor(hours / 24);
  if (days < 7) return pluralize(days, 'day');

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return pluralize(weeks, 'week');

  const months = Math.floor(days / 30);
  if (months < 12) return pluralize(months, 'month');

  const years = Math.floor(days / 365);
  return pluralize(years, 'year');
};

const pluralize = (value: number, unit: string) =>
  `${value} ${unit}${value > 1 ? 's' : ''} ago`;
