import { IWidgetRoute } from '@avam/core-types';
import { TabNode } from 'flexlayout-react';
import { FC, lazy, Suspense } from 'react';

interface Props {
  route: IWidgetRoute;
  node: {
    id: string;
    name: string;
  };
}

export const DockView: FC<Props> = ({ route, node }) => {
  const LazyComp = lazy(route.factory);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp {...node} />
    </Suspense>
  );
};
