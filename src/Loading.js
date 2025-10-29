import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner"></div>
        <h2 className="loading-text">Chargement en cours...</h2>
        <p className="loading-subtitle">Préparation des cartes de joueurs FIFA</p>
      </div>
    </div>
  );
};

export default Loading;
