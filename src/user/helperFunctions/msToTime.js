export const msToTime = (ms) => {
  const days = Math.floor(ms / 86400000);
  if (days > 0) return `${days} day(s) ago`;  
  
  const minutes = Math.floor((ms / 60000) % 60);
  const hours = Math.floor((ms / 3600000) % 24);
  if (hours > 0)
    return `${hours} hour(s) ${minutes} minute(s) ago`;
  return `${minutes} minute(s) ago`;
};
