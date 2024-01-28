import { FC, useState } from 'react';
import { AMPS_QUERY_METHODS, AmpsQueryConfig } from '../common';
import {
  Button,
  FormField,
  FormFieldLabel,
  Input,
  RadioButton,
  RadioButtonGroup,
} from '@salt-ds/core';

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
      <div className="d-flex flex-shrink-0 px-2 panel">
        <div className="flex-grow-1">Title</div>
        <div className="flex-shrink-0">Toggle</div>
      </div>
      <div className="d-flex flex-shrink-0">
        <div className="d-flex flex-grow-1 align-items-center">
          <FormField labelPlacement="left">
            <FormFieldLabel className="form-field-label-horiz">
              Method
            </FormFieldLabel>
            <RadioButtonGroup
              direction="horizontal"
              onChange={(e) => console.log(e.target.value)}
              value={queryConfig.method}
            >
              {AMPS_QUERY_METHODS.map((method) => (
                <RadioButton
                  value={method.key}
                  label={method.value}
                  key={method.key}
                />
              ))}
            </RadioButtonGroup>
          </FormField>
        </div>
        <div className="d-flex flex-grow-1 align-items-center">
          <FormField labelPlacement="left">
            <FormFieldLabel className="form-field-label-horiz">
              Limit
            </FormFieldLabel>
            <Input className="form-control" style={{ width: 100 }} />
          </FormField>
        </div>
      </div>
      <div className="d-flex flex-shrink-0 align-items-center">
        <FormField labelPlacement="left">
          <FormFieldLabel className="form-field-label-horiz">
            Topic
          </FormFieldLabel>
          <Input className="form-control" />
        </FormField>
      </div>
      <div className="flex-shrink-0 d-flex justify-content-end p-1">
        <Button onClick={onExec} className="mr-1">
          OK
        </Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
};
