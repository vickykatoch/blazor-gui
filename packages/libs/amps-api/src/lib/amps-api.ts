export function ampsApi(): string {
  return 'amps-api';
}


export function replaceUrls(text: string): string {
  const urlPattern =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.replace(
    urlPattern,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}
