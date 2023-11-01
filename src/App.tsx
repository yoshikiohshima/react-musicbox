import './App.css';
import './style.css';

import {MusicBoxModel} from "./model.js";
import {MusicBoxField} from "./view.tsx";

import params from "./apiKey.ts";

import {
  InCroquetSession,
  App as CroquetApp
} from "@croquet/react";

function App() {
  return (
      <InCroquetSession
        name={params.name || CroquetApp.autoSession("q")}
        apiKey={params.apiKey}
        tps={0.5}
        appId={params.appId || "io.croquet.react.musicbox"}
        password={params.password || CroquetApp.autoPassword()}
        model={MusicBoxModel}
        eventRateLimit={params.eventRateLimit || 60}>
         <MusicBoxField />
      </InCroquetSession>
  )
}

export default App
