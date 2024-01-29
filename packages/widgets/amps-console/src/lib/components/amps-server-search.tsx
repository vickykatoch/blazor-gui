import { FC } from 'react';
import { AmpsConnectionInfo } from '@avam/amps-api';
import { Button, Input } from '@salt-ds/core';

interface Props {
  connectionInfo?: AmpsConnectionInfo;
}
export const AmpsServerSearch: FC<Props> = ({ connectionInfo }) => {
  return <Input endAdornment={<Button>...</Button>} />;
};
