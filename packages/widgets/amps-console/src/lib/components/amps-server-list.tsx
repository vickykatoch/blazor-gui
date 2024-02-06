import { AmpsConnectionInfo } from '@avam/amps-api';
import { FC } from 'react';

interface Props {
  servers: AmpsConnectionInfo[];
}
export const AmpsServerList: FC<Props> = ({ servers }) => {
  return <div className="d-flex flex-column flex-grow-1">Amps Server List</div>;
};
