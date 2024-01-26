import { AmpsConsoleState } from '../common';

export const getInitialConsoleState = (): AmpsConsoleState => ({
  busy: true,
  ampsConfigs: [],
});
