// Home.js
import { html } from 'htm/preact'
import { Component } from 'preact'
import Section from './Section.js'

const renderItem = function (item) {
  let statusIcon
  switch (item.status) {
    case 'done':
      statusIcon = html`<i class="done" />`
      break
    case 'in-progress':
      statusIcon = html`<i class="in-progress" />`
      break
    case 'todo':
      statusIcon = html`<i class="todo" />`
      break
  }

  let children
  if (item.items) {
    children = html`
      <ul>
        ${item.items.map(renderItem)}
      </ul>
    `
  }

  return html`
    <li class=${item.className || ''}>
      ${statusIcon}<span
        dangerouslySetInnerHTML=${{ __html: item.text }}
      />${children}
    </li>
  `
}

export default class Home extends Component {
  render({ content }) {
    return content.sections.map((section) => {
      return html`
        <${Section} title=${section.title}>
          <ul>
            ${section.items.map(renderItem)}
          </ul>
        </${Section}>
      `
    })
  }
}
