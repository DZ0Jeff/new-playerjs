import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-h5-audio-player/lib/styles.css';
import './globals.css';

import { Container, Row } from 'react-bootstrap'
import api from './services/api'


function App() {
  let [currentMusic, setCurrentMusic] = useState(0) 
  let [playlist, setPlaylist] = useState([])
  // let [name, setName] = useState([])

  useEffect(() => {
    async function load(){
      const response = await api.get('/list')

      setPlaylist(response.data)
    }

    load()
  }, [])

  playlist.map(music => {
    console.log(
      music.split('/')[3].split('.')[0]      
    )
  })

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
            <h1 className="text-center">{playlist.map(music => music.split('/')[3].split('.')[0])[currentMusic]}</h1>
            <AudioPlayer
              autoPlayAfterSrcChange={false}
              showSkipControls={true}
              src={playlist[currentMusic]}
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
