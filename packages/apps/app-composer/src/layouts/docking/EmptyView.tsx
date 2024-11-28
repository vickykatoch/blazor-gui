export const EmptyViewPanel: React.FC<{ name: string }> = ({ name }) => (
  <div className="content-panel">
    <h3>{name}</h3>
    <p>Requested View Does not exist</p>
  </div>
);
