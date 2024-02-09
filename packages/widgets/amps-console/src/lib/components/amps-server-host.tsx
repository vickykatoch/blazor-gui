import { FC, useCallback, useState } from 'react';
import { AmpsServerList } from './amps-server-list';
import { EditNewAmpsServerInfo } from './en-amps-server-info';
import { Button } from '@salt-ds/core';
import { AddIcon } from '@salt-ds/icons';
import { AmpsConnectionInfo } from '@avam/amps-api';
import { ServiceRespository } from '@avam/convenience';

interface Props {
  onClose?: () => void;
}
export const AmpsServerHost: FC<Props> = ({ onClose }) => {
  const [isNew, setNew] = useState<boolean>(false);

  const onSaveConInfo = useCallback(
    (conInfo: AmpsConnectionInfo): Promise<Response> => {
      console.log(ServiceRespository.get<string>('TEMP'));
      return fetch('http://localhost:3000/api/amps/con-info', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'POST',
        body: JSON.stringify({ ...conInfo, url: [conInfo.url] }),
      });
    },
    []
  );

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
      {isNew && (
        <EditNewAmpsServerInfo
          onCancel={() => setNew(false)}
          onOk={onSaveConInfo}
        />
      )}
      {!isNew && <AmpsServerList servers={[]} />}

      {onClose && (
        <div className="d-flex flex-shrink-0 justify-content-end p-1">
          <Button onClick={onClose}>Close</Button>
        </div>
      )}
    </div>
  );
};
