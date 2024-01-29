import { Link } from 'react-router-dom';

export const Layout: React.FC = () => {
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
