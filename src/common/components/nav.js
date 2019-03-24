import React from 'react';
import logo from '../../common/images/nodoubt.jpg'

export default () => (
<nav className="dt w-100 border-box pa3 ph5-ns">
    <img src={logo} className="br3 ba b--black-10 h3 w3" alt="avatar" />
    <h1 className="f5 f4-ns fw6 black-70">Kurt Bauer</h1>
    <h2 className="f6 black-70 fw2 ttu tracked">New York</h2>
    <div className="dtc v-mid w-75 tr">
        <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="#"
            title="Work"
        >
            Work
            </a>
        <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="#"
            title="About"
        >
            About
            </a>
        <a
            className="link dim dark-gray f6 f5-ns dib"
            href="#"
            title="Contact"
        >
            Get In Touch
            </a>
    </div>
</nav>
)