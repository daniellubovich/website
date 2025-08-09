// Home.js
import { html } from 'htm/preact'
import { Component } from 'preact'
import Section from './Section.js'

const renderItem = function (item) {
  let statusIcon
  switch (item.status) {
    case 'done':
      statusIcon = html`<i class="check" />`
      break
    case 'in-progress':
      statusIcon = html`<i class="in-progress" />`
      break
    case 'todo':
      statusIcon = html`<i class="todo" />`
      break
  }

  let children = ''
  if (item.items) {
    children = html`
      <ul>
        ${item.items.map(renderItem)}
      </ul>
    `
  }

  // Add className if present
  return html`
    <li class=${item.className || ''}>
      ${statusIcon}
      <span dangerouslySetInnerHTML=${{ __html: item.text }} />
      ${children}
    </li>
  `
}

export default class Home extends Component {
  render({ content }) {
    const sections = []
    for (const section of content.sections) {
      sections.push(html`
          <${Section} title=${section.title}>
            <ul>
              ${section.items.map(renderItem)}
            </ul>
          </${Section}>
          `)
    }

    return sections
  }
}
