export function ampsApi(): string {
  return 'amps-api';
}


function linkify(text) {
  // Regular expression to match URLs, including various special characters
  const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|^])/ig;
  return text.replace(urlPattern, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}
