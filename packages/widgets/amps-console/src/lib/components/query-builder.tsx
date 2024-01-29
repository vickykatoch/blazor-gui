import { FC } from 'react';

import { AMPS_QUERY_METHODS, AmpsQueryConfig } from '../common';
import {
  Button,
  FormField,
  FormFieldLabel,
  Input,
  RadioButton,
  RadioButtonGroup,
} from '@salt-ds/core';

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
  // const [viewState, setViewState] = useState(qureryConfig);
  // const [expanded, setExpanded] = useState(true);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-shrink-0 p-2 panel">
        <div className="flex-grow-1">Query Builder</div>
        <div className="flex-shrink-0">Toggle</div>
      </div>
      <div className="d-flex flex-shrink-0 flex-column m-2 p-2 bdr panel-2">
        <div className="d-flex flex-shrink-0 mb-2">
          <div className="d-flex flex-grow-1 align-items-center me-4">
            <FormField>
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
              <Input endAdornment={<Button>...</Button>} />
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

              <Input style={{ width: DEFAULT_LABEL_WIDTH }} />
            </FormField>
          </div>
        </div>
        <div className="d-flex flex-shrink-0 mb-2">
          <FormField>
            <FormFieldLabel
              className="form-field-label-horiz"
              style={{ width: DEFAULT_LABEL_WIDTH }}
            >
              Topic
            </FormFieldLabel>
            <select
              style={{ width: DEFAULT_LABEL_WIDTH, marginRight: 1 }}
            ></select>
            <Input />
          </FormField>
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
          <Input />
        </FormField>

        <div className="flex-shrink-0 d-flex justify-content-end mt-3 bdr-t pt-2">
          <div className="flex-grow-1">
            <FormField>
              <FormFieldLabel
                className="form-field-label-horiz"
                style={{ width: DEFAULT_LABEL_WIDTH }}
              >
                Name
              </FormFieldLabel>
              <Input
                style={{ width: 300 }}
                endAdornment={<Button>Save</Button>}
              />
            </FormField>
          </div>
          <Button onClick={onExec} className="mx-2">
            Execute
          </Button>
          <Button onClick={onReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};
