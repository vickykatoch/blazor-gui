export const AMPS_QUERY_METHODS: Array<{ key: string; value: string }> = [
  { key: 'sow', value: 'Query' },
  { key: 'subscribe', value: 'Subscribe' },
  { key: 'sow_and_subscribe', value: 'Sow and Subscribe' },
  { key: 'sow_and_delta_subscribe', value: 'Sow and Delta Subscribe' },
];

export const AMPS_TOPIC_TYPES: Array<string> = [
  'json',
  'nvfix',
  'xml',
  'fix',
  'bson',
  'msgpack',
];
