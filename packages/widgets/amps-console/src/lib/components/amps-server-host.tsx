import { FC, useState } from 'react';
import { AmpsServerList } from './amps-server-list';
import { EditNewAmpsServerInfo } from './en-amps-server-info';
import { Button } from '@salt-ds/core';
import { AddIcon } from '@salt-ds/icons';

interface Props {
  onClose?: () => void;
}
export const AmpsServerHost: FC<Props> = ({ onClose }) => {
  const [isNew, setNew] = useState<boolean>(false);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="d-flex flex-shrink-0 panel-2 align-items-center">
        <strong className="flex-grow-1">
          {isNew ? 'New server info' : 'Server List'}
        </strong>
        <div className="justify-content-end">
          <Button onClick={() => setNew(true)}>
            <AddIcon size={1} />
          </Button>
        </div>
      </div>
      {isNew && <EditNewAmpsServerInfo />}
      {!isNew && <AmpsServerList servers={[]} />}

      {onClose && (
        <div className="d-flex flex-shrink-0 justify-content-end p-1">
          <Button onClick={onClose}>Close</Button>
        </div>
      )}
    </div>
  );
};
