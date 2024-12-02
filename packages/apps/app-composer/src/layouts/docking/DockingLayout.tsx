import { FC, useRef } from 'react';
import { Layout, TabNode } from 'flexlayout-react';
import { HeaderPanel } from './HeaderPanel';
import 'flexlayout-react/style/dark.css';
import { DockingManager } from './DockingManager';
import { EmptyViewPanel } from './EmptyView';
import { DockView } from './DockView';
import { LayoutProps } from '../types';

export const DockingLayout: FC<LayoutProps> = ({ routeProvider }) => {
  const dockingManager = useRef<DockingManager>(new DockingManager());

  const factory = (node: TabNode) => {
    const component = node.getComponent();
    const route = routeProvider.getWidgetRoute(component!);
    if (!route) {
      return <EmptyViewPanel name={component!} />;
    }
    const [id, name] = [node.getId(), node.getName()];
    return <DockView route={route} node={{ id, name }} />;
  };

  return (
    <div className="d-flex flex-grow-1 flex-column pos-rel">
      <HeaderPanel />
      <div className="d-flex flex-grow-1 flex-column pos-rel">
        <Layout
          model={dockingManager.current.model}
          factory={factory}
          onModelChange={dockingManager.current.onLayoutChanged}
        />
      </div>
    </div>
  );
};
