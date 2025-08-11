import { html } from 'htm/preact'
import { Component } from 'preact'

export default class TitleBar extends Component {
  render({ title = 'Title' }) {
    const currentTheme = document.documentElement.getAttribute('data-theme')

    return html`<h1 class="title-bar">
      ${title}
      <div class="theme-toggle">
        <label class="switch">
          <input
            type="checkbox"
            id="theme-toggle"
            checked=${currentTheme === 'dark'}
            onclick=${this.toggleTheme}
          />
          <span class="slider-container"></span>
        </label>
      </div>
    </h1> `
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
}
