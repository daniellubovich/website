// Section.js
import { html } from 'htm/preact'
import { Component } from 'preact'

export default class Section extends Component {
  render({ title = 'Section', children = 'Section Content' }) {
    return html`
      <section class="section">
        <h2>${title}</h2>
        <p>${children}</p>
      </section>
    `
  }
}
