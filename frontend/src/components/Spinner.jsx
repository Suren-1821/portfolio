export default function Spinner() {
  return (
    <div className="load-state">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle inner"></div>
      </div>
      <div className="spinner-text">Loading portfolio...</div>
    </div>
  );
}
