export const formattedDate = (date) => {
  const dateTime = new Date(date);
  return dateTime.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
  });
};