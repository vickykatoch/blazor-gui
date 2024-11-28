import { FC, useRef } from 'react';
import { Action, Layout, Model, TabNode } from 'flexlayout-react';
import { HeaderPanel } from './HeaderPanel';
import { DefaultLayout } from './helpers';
import { ContentPanel } from './ContentPanel';
import 'flexlayout-react/style/dark.css';
import { DockingManager } from './DockingManager';
import { GridPanel } from './GridPanel';
import { EmptyViewPanel } from './EmptyView';
import { DockView } from './DockView';
import { routes } from '../../routes';

interface Props {
  children: React.ReactNode;
}
export const DockingLayout: FC<Props> = ({ children }) => {
  const dockingManager = useRef<DockingManager>(new DockingManager());

  const factory = (node: TabNode) => {
    const component = node.getComponent();
    if (component === 'panel') {
      return <ContentPanel name={node.getName()} />;
    } else if (component === 'grid') {
      return <GridPanel name={node.getName()} />;
    } else if (component === 'dockview') {
      return (
        <DockView
          route={'@avam/amps-console'}
          node={node}
          loader={routes[0].loader}
        />
      );
    }
    return <EmptyViewPanel name={'@avam/amps-console'} />;
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
