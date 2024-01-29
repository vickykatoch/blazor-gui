import { FC } from 'react';

import { FormField, FormFieldLabel, Input } from '@salt-ds/core';
import { AMPS_TOPIC_TYPES, AmpsTopic } from '../common';

interface Props {
  labelWidth: number;
  topic: AmpsTopic;
}
export const AmpsTopicSearch: FC<Props> = ({ labelWidth, topic }) => {
  return (
    <FormField>
      <FormFieldLabel
        className="form-field-label-horiz"
        style={{ width: labelWidth }}
      >
        Topic
      </FormFieldLabel>
      <select style={{ width: 150 }}>
        {AMPS_TOPIC_TYPES.map((topicType) => (
          <option
            key={topicType}
            value={topicType}
            selected={topicType === topic.type}
          >
            {topicType}
          </option>
        ))}
      </select>
      <Input value={topic.name} />
    </FormField>
  );
};
