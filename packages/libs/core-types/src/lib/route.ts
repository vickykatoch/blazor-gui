import { FC } from 'react';

export interface IWidgetRoute {
  id: string;
  factory: (widget?: string) => Promise<{ default: FC }>;
}

export interface IRouteProvider {
  getWidgetRoute: (id: string) => IWidgetRoute | undefined;
}
