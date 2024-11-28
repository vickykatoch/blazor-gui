import { Link } from 'react-router-dom';
import { LayoutType, useLayoutRenderer } from '../layouts';

export const Layout: React.FC = () => {
  // const LayoutRenderer = useLayoutRenderer(LayoutType.Docking);
  // return (
  //   <LayoutRenderer>
  //     <h1></h1>
  //   </LayoutRenderer>
  // );
  return (
    <div>
      <h1>Welcome to layout!</h1>
      <Link to="/amps">Amps</Link>
      <br />
      <br />
      <Link to="/bookmarks">Bookmarks</Link>
    </div>
  );
};
