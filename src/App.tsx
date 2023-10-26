import './App.css';
import './style.css';

import {MusicBoxModel} from "./model.js";
import {MusicBoxField} from "./view.tsx";

import {
  InCroquetSession,
  App as CroquetApp
} from "@croquet/react";

function App() {
  return (
      <InCroquetSession
        name={CroquetApp.autoSession("q")}
        apiKey="1_urfzbotnt0ehwio5ddzz6nif0jz9zy3h2f9zwsnv"
        tps={0.5}
        appId="io.croquet.react.musicbox"
        password="abc"
        model={MusicBoxModel}
        eventRateLimit={60}
        debug={[]}>
         <MusicBoxField />
      </InCroquetSession>
  )
}

export default App
