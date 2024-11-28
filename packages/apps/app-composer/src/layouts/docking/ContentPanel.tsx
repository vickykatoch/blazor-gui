export const ContentPanel: React.FC<{ name: string }> = ({ name }) => (
  <div className="content-panel">
    <h3>{name}</h3>
    <p>Content goes here</p>
  </div>
);
