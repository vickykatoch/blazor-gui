import { AmpsConnectionInfo } from '@avam/amps-api';
import { FormField, FormFieldLabel, Input, Tooltip } from '@salt-ds/core';
import { FC } from 'react';

interface Props {
  connectionInfo?: AmpsConnectionInfo;
}
const DEFAULT_LABEL_WIDTH = 100;
export const EditNewAmpsServerInfo: FC<Props> = ({ connectionInfo }) => {
  return (
    <div className="d-flex flex-column flex-grow-1 panel-2">
      <FormField>
        <FormFieldLabel
          style={{ width: DEFAULT_LABEL_WIDTH }}
          className="form-field-label-horiz"
        >
          Name
        </FormFieldLabel>
        <Input />
      </FormField>
      <FormField>
        <FormFieldLabel
          style={{ width: DEFAULT_LABEL_WIDTH }}
          className="form-field-label-horiz"
        >
          Description
        </FormFieldLabel>
        <textarea
          rows={3}
          placeholder="Enter description about the connection for easier search"
        />
      </FormField>
      <FormField>
        <FormFieldLabel
          style={{ width: DEFAULT_LABEL_WIDTH }}
          className="form-field-label-horiz"
        >
          Url(s)
        </FormFieldLabel>
        <textarea rows={3} />
      </FormField>

      <FormField>
        <FormFieldLabel
          style={{ width: DEFAULT_LABEL_WIDTH }}
          className="form-field-label-horiz"
        >
          Connection Timeout
        </FormFieldLabel>
        <Tooltip content="Validation Failure" status="error">
          <Input validationStatus="error" title="Validate failure" />
        </Tooltip>
      </FormField>

      <FormField>
        <FormFieldLabel
          style={{ width: DEFAULT_LABEL_WIDTH }}
          className="form-field-label-horiz"
        >
          Reconnect Attempts
        </FormFieldLabel>
        <Input />
      </FormField>
    </div>
  );
};
