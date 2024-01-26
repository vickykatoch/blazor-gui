// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import { ReactElement } from 'react';
import { router } from './router';

export function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
