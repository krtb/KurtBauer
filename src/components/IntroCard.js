import React, { Component } from 'react';

class IntroCard extends Component {
    render(){
    return <article className="center mw5 mw6-ns hidden ba mv4">
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">//info_about/me.txt</h1>
        <div className="pa3 bt">
          <p className="f6 f5-ns lh-copy measure mv0">
            Kurt Bauer is latinx, a full-stack software engineer, web & mobile designer,
            writer, artist, photographer, progressive activist,
            and I will always have a faster site than you.
          </p>
        </div>
      </article>}
}

export default IntroCard;