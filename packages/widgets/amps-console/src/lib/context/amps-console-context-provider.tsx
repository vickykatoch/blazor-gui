import {
  FC,
  createContext,
  useReducer,
  Dispatch,
  useContext,
  useEffect,
} from 'react';
import { HttpApi, IReducerAction } from '@avam/core-types';
import { AmpsConsoleAction, AmpsConsoleState } from '../common';
import { reducer } from './reducer';
import { getInitialConsoleState } from './context-state-helpers';
import { initApi } from '../api/init';
import { ServiceRespository } from '@avam/convenience';
import { AmpsConnectionInfo } from '@avam/amps-api';
import { AmpsConnectionInfoServiceName } from '../api/constants';

interface AmpsConsoleContextState extends AmpsConsoleState {
  dispatch: Dispatch<
    IReducerAction<AmpsConsoleAction, Partial<AmpsConsoleState>>
  >;
}
export const AmpsConsoleContext = createContext<AmpsConsoleContextState>(
  {} as AmpsConsoleContextState
);

export const useAmpsConsoleContext = () => useContext(AmpsConsoleContext);

interface Props {
  children: React.ReactNode;
}
export const AmpsConsoleContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialConsoleState());

  useEffect(() => {
    initApi();
    const api = ServiceRespository.get<HttpApi<AmpsConnectionInfo>>(
      AmpsConnectionInfoServiceName
    );
    api?.fetchAll().then(console.log);
  }, []);

  return (
    <AmpsConsoleContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AmpsConsoleContext.Provider>
  );
};
