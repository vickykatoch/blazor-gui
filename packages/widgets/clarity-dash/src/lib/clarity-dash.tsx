import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { DataClient, PerfData } from './data-client';
import { formatTimestamp } from './utils';

export interface ClarityDashProps {
  id: string;
  name: string;
}

const ClarityDash: FC<ClarityDashProps> = ({ id, name }: ClarityDashProps) => {
  const [colDefs] = useState<ColDef[]>([
    { field: '20', headerName: '20th %ile', type: 'numberColumn' },
    {
      field: '50',
      headerName: '50th %ile (Median)',
      type: 'numberColumn',
    },
    { field: '70', headerName: '70th %ile', type: 'numberColumn' },
    { field: '80', headerName: '80th %ile', type: 'numberColumn' },
    { field: '90', headerName: '90th %ile', type: 'numberColumn' },
    { field: '99', headerName: '99th %ile', type: 'numberColumn' },
    { field: '99.9', headerName: '99.9th %ile', type: 'numberColumn' },
    {
      field: 'instanceName',
      headerName: 'Instance Name',
      type: 'textColumn',
    },
    {
      field: 'publishTs',
      headerName: 'Published Timestamp',
      valueFormatter: (params) => formatTimestamp(params.value),
    },
    { field: 'max', headerName: 'Max Value', type: 'numberColumn' },
    { field: 'min', headerName: 'Min Value', type: 'numberColumn' },
    {
      field: 'startTime',
      headerName: 'Start Time',
      valueFormatter: (params) => formatTimestamp(params.value),
    },
    {
      field: 'endTime',
      headerName: 'End Time',
      valueFormatter: (params) => formatTimestamp(params.value),
    },
    { field: 'latencyUnit', headerName: 'Latency Unit', type: 'textColumn' },
    { field: 'TimeUnit', headerName: 'Time Unit', type: 'textColumn' },
  ]);

  const onGridReady = useCallback((params: GridReadyEvent<PerfData>) => {
    params.api.applyTransaction({ add: [] });
    const dataClient = new DataClient(params.api);
    dataClient.start();
  }, []);

  return (
    <div className="ag-theme-quartz-dark fill">
      <AgGridReact
        getRowId={({ data }) => data.instanceName}
        headerHeight={25}
        rowHeight={25}
        onGridReady={onGridReady}
        columnDefs={colDefs}
        cellFlashDuration={1000}
        onFirstDataRendered={(params) => params.api.autoSizeAllColumns()}
      />
    </div>
  );
};

export default ClarityDash;
