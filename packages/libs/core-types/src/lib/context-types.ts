export interface IReducerAction<ActionType, PayloadType> {
  type: ActionType;
  payload?: PayloadType;
}
