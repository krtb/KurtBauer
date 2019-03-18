import React, { Component } from 'react'
import logo from '../../common/images/nodoubt.jpg';

export default class first extends Component {
  render() {
    return (
      <main>
        <nav class="dt w-100 border-box pa3 ph5-ns">
          <img src={logo} class="br3 ba b--black-10 h3 w3" alt="avatar" />
          <h1 class="f5 f4-ns fw6 black-70">Kurt Bauer</h1>
          <h2 class="f6 black-70 fw2 ttu tracked">New York</h2>
          <div class="dtc v-mid w-75 tr">
            <a
              class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
              href="#"
              title="Work"
            >
              Work
            </a>
            <a
              class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
              href="#"
              title="About"
            >
              About
            </a>
            <a
              class="link dim dark-gray f6 f5-ns dib"
              href="#"
              title="Contact"
            >
              Get In Touch
            </a>
          </div>
        </nav>
        <article class="center mw5 mw6-ns hidden ba mv4">
          <h1 class="sans-serif f4 bg-near-black white mv0 pv2 ph3">
            Software Engineer/ Mobile Developer/ UI Designer
          </h1>
          <div class="pa3 bt">
            <p class="sans-serif f6 f5-ns lh-copy measure mv0">
             I'm an interdisciplinary engineer, binding analogue ideas to the digital landscape.
             I help companies, startups, & entrepenuers alike in building products that remain relavant.
            </p>
          </div>
        </article>
      </main>
    )
  }
}
