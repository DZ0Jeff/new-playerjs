import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-h5-audio-player/lib/styles.css';
import './globals.css';

import { Container, Row } from 'react-bootstrap'

function App() {
  const music = "music/opeth.mp3"
  
  return (
    <div className="main-site">
      <Container>
        <Row>
          <div className="col-lg-12 mx-auto">
            <AudioPlayer
              showSkipControls={true}
              src={music}
            />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default App;
