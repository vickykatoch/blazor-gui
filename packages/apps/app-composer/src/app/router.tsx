import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  // {
  //   path: '/bookmarks',
  //   async lazy() {
  //     const module = await import('@avam/bookmarks');
  //     return { Component: module.default };
  //   },
  // },
  {
    path: '/amps',
    async lazy() {
      const module = await import('@avam/amps-console');
      return { Component: module.default };
    },
  },
]);
