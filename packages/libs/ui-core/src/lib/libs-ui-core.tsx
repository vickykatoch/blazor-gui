import styles from './libs-ui-core.module.scss';

/* eslint-disable-next-line */
export interface LibsUiCoreProps {}

export function LibsUiCore(props: LibsUiCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsUiCore!</h1>
    </div>
  );
}

export default LibsUiCore;
