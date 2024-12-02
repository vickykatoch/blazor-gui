import { IRouteProvider } from '@avam/core-types';

export enum LayoutType {
  Docking = 'Docking',
  Tab = 'Tab',
  Spa = 'Spa',
}

export interface LayoutProps {
  routeProvider: IRouteProvider;
}
