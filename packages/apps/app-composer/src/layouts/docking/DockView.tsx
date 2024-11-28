import { TabNode } from 'flexlayout-react';
import { FC, lazy, Suspense, useEffect, useState } from 'react';

interface Props {
  loader: (name?: string) => Promise<{ default: FC }>;
  route: string;
  node: TabNode;
}

export const DockView: FC<Props> = ({ route, loader }) => {
  const LazyComp = lazy(loader);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
};
