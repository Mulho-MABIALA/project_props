import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Player = ({
  name = 'Unknown',
  team = 'No Team',
  nationality = 'Unknown',
  jerseyNumber = 0,
  age = 0,
  image = 'https://via.placeholder.com/300'
}) => {
  const playerCardStyle = {
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    height: '100%'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#FFD700',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '50%',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const bodyStyle = {
    padding: '15px'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1f3a93'
  };

  const infoStyle = {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <Card style={playerCardStyle}>
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={imageStyle}
        />
        <div style={badgeStyle}>{jerseyNumber}</div>
      </div>
      <Card.Body style={bodyStyle}>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <div style={infoStyle}>
          <span style={labelStyle}>Équipe:</span> {team}
        </div>
        <div style={infoStyle}>
          <span style={labelStyle}>Nationalité:</span> {nationality}
        </div>
        <div style={infoStyle}>
          <span style={labelStyle}>Âge:</span> {age} ans
        </div>
        <div style={infoStyle}>
          <span style={labelStyle}>Numéro de maillot:</span> {jerseyNumber}
        </div>
      </Card.Body>
    </Card>
  );
};

// Définition des PropTypes
Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

// Définition des defaultProps
Player.defaultProps = {
  name: 'Unknown',
  team: 'No Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://via.placeholder.com/300'
};

export default Player;
