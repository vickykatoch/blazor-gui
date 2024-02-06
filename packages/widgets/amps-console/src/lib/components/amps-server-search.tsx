import { FC, useState } from 'react';
import { AmpsConnectionInfo } from '@avam/amps-api';
import { Button, Input } from '@salt-ds/core';
import { Dialog } from '@avam/common-components';
import { AmpsServerHost } from './amps-server-host';

interface Props {
  connectionInfo?: AmpsConnectionInfo;
}
export const AmpsServerSearch: FC<Props> = ({ connectionInfo }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Input
        endAdornment={<Button onClick={() => setShow(true)}>...</Button>}
      />
      {show && (
        <Dialog
          title="Amps Servers"
          onCancel={() => setShow(false)}
          onOk={() => setShow(false)}
        >
          <AmpsServerHost />
        </Dialog>
      )}
    </>
  );
};
