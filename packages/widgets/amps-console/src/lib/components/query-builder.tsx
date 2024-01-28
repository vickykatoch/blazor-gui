import { FC, useState } from 'react';
import { AmpsQueryConfig } from '../common';

interface QueryBuilderProps {
  qureryConfig: AmpsQueryConfig;
  onExec: () => void;
  onReset: () => void;
}

export const QueryBuilder: FC<QueryBuilderProps> = ({
  qureryConfig,
  onExec,
  onReset,
}) => {
  // const [viewState, setViewState] = useState(qureryConfig);
  // const [expanded, setExpanded] = useState(true);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-shrink-0 flex-row">
        <div className="flex-grow-1">Title</div>
        <div className="flex-shrink-0">Toggle</div>
      </div>

      <div className="flex-shrink-0 d-flex justify-content-end">
        <button onClick={onExec}>OK</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};
