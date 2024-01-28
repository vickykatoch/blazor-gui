import { FC, ReactElement } from 'react';
import styles from './AmpsConsole.module.scss';
import { withContextProvider } from './context';
import { QueryBuilder } from './components';
import { AmpsQueryConfig } from './common';

/* eslint-disable-next-line */
export interface Props {}

const queryConfig: AmpsQueryConfig = {
  name: 'test',
  connection: {
    name: 'test',
    url: 'ws://localhost:9007/amps/json',
  },
  method: 'sow_and_subscribe',
  topic: {
    type: 'json',
    name: '/test/unit-test',
  },
};

const AmpsConsole: FC<Props | undefined> = (props?: Props): ReactElement => {
  return (
    <div className="d-flex flex-grow-1 flex-column">
      <QueryBuilder
        onExec={() => {}}
        onReset={() => {}}
        queryConfig={queryConfig}
      />
      <div className="d-flex flex-grow-1 flex-column"></div>
    </div>
  );
};
export default withContextProvider(AmpsConsole);
