import { FC, createContext, useReducer, Dispatch, useContext } from 'react';
import { IReducerAction } from '@avam/core-types';
import { AmpsConsoleAction, AmpsConsoleState } from '../common';
import { reducer } from './reducer';
import { getInitialConsoleState } from './context-state-helpers';

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
