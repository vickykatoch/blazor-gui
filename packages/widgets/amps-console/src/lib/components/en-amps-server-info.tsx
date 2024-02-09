import { AmpsConnectionInfo } from '@avam/amps-api';
import { IValidationState } from '@avam/core-types';
import {
  Button,
  FormField,
  FormFieldLabel,
  Input,
  Switch,
  Tooltip,
} from '@salt-ds/core';
import { FC, useCallback, useState } from 'react';
import {
  buildAmpsConInforViewState,
  validateAmpsServerInfo,
} from './helpers/amps-service-info.helpers';

interface Props {
  connectionInfo?: AmpsConnectionInfo;
  onOk: (connectionInfo: AmpsConnectionInfo) => Promise<Response>;
  onCancel: () => void;
}
const DEFAULT_LABEL_WIDTH = 100;
export const EditNewAmpsServerInfo: FC<Props> = ({
  connectionInfo,
  onOk,
  onCancel,
}) => {
  const [validationState, setValidationState] = useState<IValidationState>({
    valid: false,
  });

  const [viewState, setViewState] = useState<AmpsConnectionInfo>(
    buildAmpsConInforViewState(connectionInfo)
  );
  const updateState = useCallback(
    (state: Partial<AmpsConnectionInfo>) => {
      setViewState((prevState) => {
        const newState = { ...prevState, ...state };
        setValidationState(validateAmpsServerInfo(newState));
        return newState;
      });
    },
    [setViewState, setValidationState]
  );

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="d-flex flex-column flex-grow-1 panel-2">
        <FormField labelPlacement="top">
          <FormFieldLabel
            style={{ width: DEFAULT_LABEL_WIDTH }}
            className="form-field-label-horiz"
          >
            Name
          </FormFieldLabel>
          <Tooltip
            content={validationState.fields?.['name'].message}
            status={validationState.fields?.['name'].status}
          >
            <Input
              value={viewState.name}
              onChange={({ target }) => updateState({ name: target.value })}
              validationStatus={validationState.fields?.['name'].status}
            />
          </Tooltip>
        </FormField>

        <FormField>
          <FormFieldLabel
            style={{ width: DEFAULT_LABEL_WIDTH }}
            className="form-field-label-horiz"
          >
            Url(s)
          </FormFieldLabel>
          <Tooltip
            content={validationState.fields?.['url'].message}
            status={validationState.fields?.['url'].status}
          >
            <Input
              value={viewState.url}
              onChange={({ target }) => updateState({ url: target.value })}
              validationStatus={validationState.fields?.['url'].status}
            />
          </Tooltip>
        </FormField>

        <FormField>
          <FormFieldLabel
            style={{ width: DEFAULT_LABEL_WIDTH }}
            className="form-field-label-horiz"
          >
            Connection Timeout
          </FormFieldLabel>
          <Tooltip
            content={validationState.fields?.['connectionTimeout'].message}
            status={validationState.fields?.['connectionTimeout'].status}
          >
            <Input
              value={viewState.connectionTimeout}
              onChange={({ target }) =>
                updateState({ connectionTimeout: target.value })
              }
              validationStatus={
                validationState.fields?.['connectionTimeout'].status
              }
            />
          </Tooltip>
        </FormField>

        <FormField>
          <FormFieldLabel
            style={{ width: DEFAULT_LABEL_WIDTH }}
            className="form-field-label-horiz"
          >
            Reconnect Attempts
          </FormFieldLabel>
          <Tooltip
            content={validationState.fields?.['reconnectAttempts'].message}
            status={validationState.fields?.['reconnectAttempts'].status}
          >
            <Input
              value={viewState.reconnectAttempts}
              onChange={({ target }) =>
                updateState({ reconnectAttempts: target.value })
              }
              validationStatus={
                validationState.fields?.['reconnectAttempts'].status
              }
            />
          </Tooltip>
        </FormField>
        <FormField>
          <FormFieldLabel
            style={{ width: DEFAULT_LABEL_WIDTH }}
            className="form-field-label-horiz"
          >
            Keep Alive
          </FormFieldLabel>
          <Switch
            checked={viewState.keepAlive || false}
            onChange={({ target }) =>
              updateState({ keepAlive: target.checked })
            }
          />
        </FormField>
      </div>
      <div className="d-flex flex-shrink-0 justify-content-end panel-2">
        <Button
          className="flex-shrink-0 me-1"
          onClick={() => onOk(viewState).catch(console.error)}
        >
          OK
        </Button>
        <Button className="flex-shrink-0" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
