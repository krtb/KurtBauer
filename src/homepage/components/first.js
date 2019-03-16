import React, { Component } from 'react'

export default class first extends Component {
  render() {
    return (
        <main>
            <nav class="dt w-100 border-box pa3 ph5-ns">
              <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <img src={require('../../images/nodoubt.jpg')} class="dib w2 h2 br-100" alt="Site Name"/>
              </a>
                <div class="dtc v-mid w-75 tr">
                  <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">ABOUT</a>
                  <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">PORTFOLIO</a>
                  <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">CONTACT ME</a>
                </div>
            </nav>
            <article class="center mw5 mw6-ns hidden ba mv4">
                <h1 class="sans-serif f4 bg-near-black white mv0 pv2 ph3">Hi, I'm Kurt Bauer</h1>
                <div class="pa3 bt">
                    <p class="sans-serif f6 f5-ns lh-copy measure mv0">
                        I'm a full-stack software engineer, and mobile developer
                        based in Brooklyn. I'm an advocate for data privacyy & the decentralization of the world wide web.
                    </p>
                </div>
            </article>
  <section class="cf mt5 pv5 bt b--black-05 ph6-l">
    <h1 class="tc f5 ttu fw6 tracked mb4 avenir">Other Projects</h1>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <div class="grow cover bg-center pv5 pv6-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg)'}}></div>
    </a>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
      <div class="grow cover bg-top pv5 pv6-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg)'}}></div>
    </a>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <div class="grow cover bg-top pv5 pv6-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/cc010611.s_960.jpg)'}}></div>
'    </a>
    <a href="#0" class="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <div class="grow cover bg-top pv5 pv6-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg)'}}></div>
    </a>
    <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
      <div class="grow cover bg-center pv5 pv7-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg)'}}></div>
    </a>
    <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
      <div class="grow cover bg-center pv5 pv7-l" style={{backgroundImage:'url(https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg)'}}></div>
  '  </a>
  </section>
</main>
    )
  }
}
