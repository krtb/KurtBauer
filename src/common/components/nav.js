import React from 'react';
import Logo from '../../common/images/nodoubt.jpg'

export default () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <a
      class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
      href="#"
      title="Home"
    >
        <img
            src={Logo}
            class=" br3 ba b--black-10 h3 w3"
            alt="Site Name"
        />
        <h1 className="f5 f4-ns fw6 black-70">Kurt Bauer</h1>
        <h2 className="f6 black-70 fw2 ttu tracked" > New York</h2>
    </a>

    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="#"
        title="Work"
      >
        Work
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="#"
        title="About"
      >
        About
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="#"
        title="Contact"
      >
        Get In Touch
      </a>
    </div>
  </nav>
)