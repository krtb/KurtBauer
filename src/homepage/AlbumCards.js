import FabrikantImg from '../common/images/fabrikantpage.jpg'
import YoutubeImg from '../common/images/youtubepage.png'
import Eimg from '../common/images/enews.png'
import Cryptimg from '../common/images/crypto_crashpage.png'
import Informee from '../common/images/InforMeepage.png'

import React from 'react';

const AlbumCards = () => {
    return (
      <article class="sans-serif" >
        <h2 class="f3 fw4 pa3 mv0">Work</h2>

        <div class="cf pa2">


          <div class="fl w-50 w-25-m w-20-l pa2">
            <img src={FabrikantImg} class="db w-100 br2 br--top img-resize" alt="fabrikant img"/>
                        <div class="pa2 ph3-ns pb3-ns">
                            <div class="dt w-100 mt1">
                                <div class="dtc">
                                    <a name="work" target="_blank" href="http://fabrikant.eachscape.com/">
                                        <h1 class="f5 f4-ns mv0">LIVE</h1>
                                    </a>
                                </div>
                                <div class="dtc tr">
                                    <a name="work" target="_blank" href="http://fabrikant.eachscape.com/">
                                    <h2 class="f5 mv0">Code</h2>
                                    </a>
                                </div>
                            </div>
                            <p class="f6 lh-copy measure mt2 mid-gray">
                                A client web app for Fabrikant Jewlers to input client and significant others details in their database.
                                Can add/edit/delete a client and their siginifiant other, as well as add notes to each.
                            </p>
                        </div>
                </div>


          <div class="fl w-50 w-25-m w-20-l pa2">
            <img src={YoutubeImg} class="db w-100 br2 br--top img-resize" alt="fabrikant img" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <a name="work" target="_blank" href="https://youtubereactclone.netlify.com">
                    <h1 class="f5 f4-ns mv0">LIVE</h1>
                  </a>
                </div>
                <div class="dtc tr">
                  <a name="work" target="_blank" href="https://github.com/krtb/YoutubeReactClone">
                    <h2 class="f5 mv0">Code</h2>
                  </a>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                A clone of the Youtube Search functionality built with React and the YouTube Search API.
                On page load renders a list of videos, can select and play a main video after inputting text in the search bar.
              </p>
            </div>
          </div>


          <div class="fl w-50 w-25-m w-20-l pa2">
            <img src={Eimg} class="db w-100 br2 br--top img-resize" alt="fabrikant img" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <a name="work" target="_blank" href="https://play.google.com/store/apps/details?id=com.rhythmnewmedia.android.e&hl=en">
                    <h1 class="f5 f4-ns mv0">App Store</h1>
                  </a>
                </div>
                {/* <div class="dtc tr">
                  <a name="work" target="_blank" href="http://fabrikant.eachscape.com/">
                    <h2 class="f5 mv0">Code</h2>
                  </a>
                </div> */}
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                 A clone of the Youtube Search functionality built with React and the YouTube Search API.
                 On page load renders a list of videos, can select and play a main video after inputting text in the search bar.
                 Built With: Recat-Native / NBC APIs
              </p>
            </div>
          </div>


          <div class="fl w-50 w-25-m w-20-l pa2">
            <img src={Cryptimg} class="db w-100 br2 br--top img-resize" alt="fabrikant img" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                {/* <div class="dtc">
                  <a name="work" target="_blank" href="http://fabrikant.eachscape.com/">
                    <h1 class="f5 f4-ns mv0">LIVE</h1>
                  </a>
                </div> */}
                <div class="dtc tr">
                  <a name="work" target="_blank" href="https://github.com/krtb/Crypto_Crash">
                    <h2 class="f5 mv0">Code</h2>
                  </a>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                CRYPTO_CRASH is a turn-based game placing you in the role of an amateur cryptocurrency trader looking to raise enough money to escape to Canada.
                Built With: Ruby / Sinatra / Active Record / SQLite3
              </p>
            </div>
          </div>

          <div class="fl w-50 w-25-m w-20-l pa2">
            <img src={Informee} class="db w-100 br2 br--top img-resize" alt="fabrikant img" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                {/* <div class="dtc">
                  <a name="work" target="_blank" href="http://fabrikant.eachscape.com/">
                    <h1 class="f5 f4-ns mv0">LIVE</h1>
                  </a>
                </div> */}
                <div class="dtc tr">
                  <a name="work" target="_blank" href="https://github.com/krtb/InforMee">
                    <h2 class="f5 mv0">Code</h2>
                  </a>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                Informee seeks to shed some light on American politics by allowing users to view the newest bills being introduced to the House.
                Built With: React / Rails / PostGreSQL
                            </p>
            </div>
          </div>

        </div>

      </article>
    );
};

export default AlbumCards;
