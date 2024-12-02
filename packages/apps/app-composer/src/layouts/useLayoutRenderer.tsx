import { TabLayout } from './TabbedLayout';
import { LayoutType } from './types';
import { DockingLayout } from './docking/DockingLayout';
import { SpaLayout } from './SpaLayout';

export function useLayoutRenderer<T>(layout: LayoutType) {
  switch (layout) {
    case LayoutType.Tab:
      return TabLayout;
    case LayoutType.Docking:
      return DockingLayout;
    case LayoutType.Spa:
      return SpaLayout;
    default:
      throw new Error(`Unknown layout: ${layout}`);
  }
}
