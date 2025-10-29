import { useEffect, useState } from 'react';
import './App.css';
import PlayersList from './PlayersList';
import Loading from './Loading';

function App({
  title = "FIFA Players Cards",
  subtitle = "Discover the Greatest Football Players",
  appTheme = "dark"
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Simuler le chargement avec animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // L'animation dure 3 secondes

    return () => clearTimeout(timer);
  }, []);
  const appStyle = {
    minHeight: '100vh',
    background: appTheme === "dark"
      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headerStyle = {
    textAlign: 'center',
    color: 'white',
    paddingTop: '30px',
    paddingBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '2px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '300',
    color: '#e0e0e0',
    letterSpacing: '1px'
  };

  return (
    <>
      {isLoading && <Loading />}
      <div style={appStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <p style={subtitleStyle}>{subtitle}</p>
        </header>
        <PlayersList />
      </div>
    </>
  );
}

export default App;
