import { IReducerAction } from '@avam/core-types';
import { AmpsConsoleState, AmpsConsoleAction } from '../common';

export function reducer(
  state: AmpsConsoleState,
  action: IReducerAction<AmpsConsoleAction, Partial<AmpsConsoleState>>
): AmpsConsoleState {
  switch (action.type) {
    case 'update':
    default:
      return state;
  }
}
