import { Button } from '@salt-ds/core';
import { FC, ReactNode } from 'react';
import styles from './dialog.module.scss';
import classNames from 'classnames';

export interface DialogProps {
  height?: number;
  width?: number;
  title: string;
  onCancel?: () => void;
  onOk?: () => void;
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ children, ...props }) => {
  return (
    <div className={styles['layer']}>
      <div
        className={classNames('d-flex flex-column', styles['dialog-host'])}
        style={{ height: props?.height || 400, width: props?.width || 500 }}
      >
        <div className="d-flex flex-shrink-0 align-items-center p-2 panel">
          <strong className="flex-grow-1">{props.title}</strong>
          {props.onCancel && (
            <div className="flex-shrink-0">
              <Button onClick={props.onCancel}>X</Button>
            </div>
          )}
        </div>
        <div className="d-flex flex-grow-1">{children}</div>

        {props.onOk && (
          <div className="d-flex flex-shrink-0 justify-content-end p-1 mt-1 panel">
            <Button onClick={props.onOk} className="me-1">
              Ok
            </Button>
            <Button onClick={props.onCancel}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
};
