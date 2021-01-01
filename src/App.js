import React, { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Login from './Components/Login.js'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player.js'
import { useDataLayerValue } from './Components/DataLayer'
// 2:09 timestamp
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      dispatch()

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

  }, []);

  return (
    <div className="app">
      {
        token ? 
          <Player />: 
          <Login />}
    </div>
  );
}

export default App;