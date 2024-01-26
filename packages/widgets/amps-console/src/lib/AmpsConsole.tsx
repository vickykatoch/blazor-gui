import { FC, ReactElement } from 'react';
import styles from './AmpsConsole.module.scss';
import { withContextProvider } from './context';

/* eslint-disable-next-line */
export interface Props {}

const AmpsConsole: FC<Props | undefined> = withContextProvider(
  (props?: Props): ReactElement => {
    return (
      <div className={styles['container']}>
        <h1>Welcome to WidgetsAmpsConsole!</h1>
      </div>
    );
  }
);

export default AmpsConsole;
