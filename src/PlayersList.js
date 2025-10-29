import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  const containerStyle = {
    paddingTop: '40px',
    paddingBottom: '40px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1f3a93'
  };

  return (
    <Container style={containerStyle}>
      <h1 style={titleStyle}>FIFA Players Cards</h1>
      <Row>
        {players.map((player) => (
          <Col key={player.id} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
