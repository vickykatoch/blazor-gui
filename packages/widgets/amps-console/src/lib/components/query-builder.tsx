import { FC, useCallback, useState } from 'react';

import { AMPS_QUERY_METHODS, AmpsQueryConfig } from '../common';
import {
  Button,
  FlexLayout,
  FormField,
  FormFieldLabel,
  Input,
} from '@salt-ds/core';
import { AmpsServerSearch } from './amps-server-search';
import { DoubleChevronUpIcon } from '@salt-ds/icons';
import { AmpsTopicSearch } from './amps-topic-search';

const DEFAULT_LABEL_WIDTH = 60;
interface QueryBuilderProps {
  queryConfig: AmpsQueryConfig;
  onExec: () => void;
  onReset: () => void;
}

export const QueryBuilder: FC<QueryBuilderProps> = ({
  queryConfig,
  onExec,
  onReset,
}) => {
  const [viewState, setViewState] = useState(queryConfig);
  const updateState = useCallback(
    (state: Record<string, string | number>) => {
      setViewState((prevState) => ({ ...prevState, ...state }));
    },
    [setViewState]
  );
  // const [expanded, setExpanded] = useState(true);

  return (
    <FlexLayout direction="column" gap={1}>
      <div className="d-flex flex-shrink-0 p-2 panel">
        <div className="flex-grow-1">Query Builder</div>
        <DoubleChevronUpIcon className="flex-shrink-0" />
      </div>
      <div className="d-flex flex-shrink-0 flex-column bdr panel-2">
        <div className="d-flex flex-shrink-0 mb-2">
          <div className="d-flex flex-grow-1 align-items-center me-4">
            <FormField labelPlacement="left">
              <FormFieldLabel
                className="form-field-label-horiz"
                style={{ width: DEFAULT_LABEL_WIDTH }}
              >
                Amps
              </FormFieldLabel>
              <select style={{ width: 200 }}>
                {AMPS_QUERY_METHODS.map((method) => (
                  <option value={method.key} key={method.key}>
                    {method.value}
                  </option>
                ))}
              </select>
              <AmpsServerSearch connectionInfo={viewState.connection} />
            </FormField>
          </div>

          <div className="d-flex flex-shrink-0 align-items-center">
            <FormField>
              <FormFieldLabel
                className="form-field-label-horiz"
                style={{ width: 30 }}
              >
                Limit
              </FormFieldLabel>

              <Input
                style={{ width: DEFAULT_LABEL_WIDTH }}
                value={viewState.limit}
                onChange={({ target }) =>
                  updateState({ limit: (target as HTMLInputElement).value })
                }
              />
            </FormField>
          </div>
        </div>
        <div className="d-flex flex-shrink-0 mb-2">
          <AmpsTopicSearch
            labelWidth={DEFAULT_LABEL_WIDTH}
            topic={viewState.topic}
          />
        </div>

        <FormField>
          <FormFieldLabel
            className="form-field-label-horiz"
            style={{ width: DEFAULT_LABEL_WIDTH }}
          >
            Filter
          </FormFieldLabel>
          <Input />
        </FormField>
        <FormField>
          <FormFieldLabel
            className="form-field-label-horiz"
            style={{ width: DEFAULT_LABEL_WIDTH }}
          >
            Options
          </FormFieldLabel>
          <Input />
        </FormField>
        <FormField>
          <FormFieldLabel
            className="form-field-label-horiz"
            style={{ width: DEFAULT_LABEL_WIDTH }}
          >
            Order By
          </FormFieldLabel>
          <Input
            value={viewState.sort}
            onChange={({ target }) =>
              updateState({ sort: (target as HTMLInputElement).value })
            }
          />
        </FormField>

        <div className="flex-shrink-0 d-flex justify-content-end mt-3 bdr-t pt-2">
          <div className="flex-grow-1">
            <FormField>
              <FormFieldLabel
                className="form-field-label-horiz"
                style={{ width: DEFAULT_LABEL_WIDTH }}
              >
                Query Name
              </FormFieldLabel>
              <Input
                style={{ width: 300 }}
                endAdornment={<Button>Save</Button>}
                value={viewState.name}
                onChange={({ target }) =>
                  updateState({ sort: (target as HTMLInputElement).value })
                }
              />
            </FormField>
          </div>
          <Button onClick={onExec} className="mx-2">
            Execute
          </Button>
          <Button onClick={onReset}>Reset</Button>
        </div>
      </div>
    </FlexLayout>
  );
};
