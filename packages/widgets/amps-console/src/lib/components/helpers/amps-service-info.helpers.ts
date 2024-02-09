import { AmpsConnectionInfo } from '@avam/amps-api';
import { IValidationState } from '@avam/core-types';
import { clone } from 'ramda';

export function validateAmpsServerInfo(
  connectionInfo: AmpsConnectionInfo
): IValidationState {
  return {
    valid: true,
  };
}

export function buildAmpsConInforViewState(
  connectionInfo?: AmpsConnectionInfo
): AmpsConnectionInfo {
  if (connectionInfo) return clone(connectionInfo);

  return {
    name: '',
    url: '',
    connectionTimeout: 5000,
    reconnectAttempts: 5,
  };
}
