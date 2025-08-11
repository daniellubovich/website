import { html } from 'htm/preact'
import HomeContent from '../content/home.yaml'
import Footer from './Footer.js'
import Home from './Home.js'
import TitleBar from './TitleBar.js'

export default function App() {
  return html`
    <div id="application">
      <${TitleBar} title="Daniel Lubovich" />
      <div id="content"><${Home} content=${HomeContent} /></div>
      <${Footer} />
    </div>
  `
}
