import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-h5-audio-player/lib/styles.css';
import './globals.css';

import { Container, Row } from 'react-bootstrap'

function App() {
  let [currentMusic, setCurrentMusic] = useState(0) 

  let playlist = [
    { name: 'opeth', src: "music/opeth.mp3" },
    { name: 'Motorhead - Ace of spades', src: "music/Ace of Spades.mp3" },
    { name: 'Black sabbath - paranoid', src: "music/paranoid.mp3" }
  ]

  function handleClickNext(){
    return currentMusic >= playlist.length - 1 ? setCurrentMusic(currentMusic = 0) : setCurrentMusic(currentMusic + 1)
  }

  function handleClickPrev(){
    return currentMusic === 0 ? setCurrentMusic(currentMusic + playlist.length - 1) : setCurrentMusic(currentMusic - 1)
  }
  
  return (
    <div className="main-site">
      <Container>
        <Row>
          <div className="col-lg-12 mx-auto">
            <h1 className="text-center">{playlist[currentMusic].name}</h1>
            <AudioPlayer
              autoPlayAfterSrcChange={false}
              showSkipControls={true}
              src={playlist[currentMusic].src}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrev}
            />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default App;
