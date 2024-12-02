import moment from 'moment';

export function formatTimestamp(timestamp: number): string {
  if (!timestamp) return '';
  const stringTs = timestamp.toString();
  if (stringTs.length <= 13) {
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  } else {
    const milliseconds = timestamp / 1_000_000;
    const fractionalMillis = timestamp % 1_000_000;
    return `${moment(milliseconds).format(
      'YYYY-MM-DD HH:mm:ss'
    )}.${fractionalMillis.toString().padStart(6, '0')}`;
  }
}
