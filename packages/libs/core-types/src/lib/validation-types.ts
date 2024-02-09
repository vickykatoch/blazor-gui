export interface IValidationState {
  valid: boolean;
  fields?: Record<string, IFeildValidationState>;
}

export interface IFeildValidationState {
  status: 'error' | 'warning' | 'success';
  message: string;
}
