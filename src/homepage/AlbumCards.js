import FabrikantImg from '../common/images/fabrikantpage.jpg'
import YoutubeImg from '../common/images/youtubepage.png'
import Eimg from '../common/images/enewspage.png'
import Cryptimg from '../common/images/crypto_crashpage.png'
import Informee from '../common/images/InforMeepage.png'

import React from 'react';

const AlbumCards = () => {
    return (
        <section class="cf w-100 pa2-ns">
            <a target="_blank" href="http://fabrikant.eachscape.com/">
            <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                    <img src={FabrikantImg}
                        class="db bg-center cover aspect-ratio--object" />
                </div>
                <a href="#0" class="ph2 ph0-ns pb3 link db">
                    <h3 class="f5 f4-ns mb0 black-90">Fabrikant Jewlers</h3>
                    <h3 class="f6 f5 fw4 mt2 black-60">Client Catalog Page</h3>
                </a>
            </article>
            </a>
            <a target="_blank" href="https://youtubereactclone.netlify.com">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img src={YoutubeImg}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">Youtube Clone</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Youtube API, React.js</h3>
                    </a>
                </article>
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.rhythmnewmedia.android.e&hl=en">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img src={Eimg}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">E! News for Android/iOS</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">React-Native Mobile App</h3>
                    </a>
                </article>
            </a>
            <a target="_blank" href="http://fabrikant.eachscape.com/">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img src={Cryptimg}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">Crypto_Crash</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Ruby app</h3>
                    </a>
                </article>
            </a>
            <a target="_blank" href="http://fabrikant.eachscape.com/">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img src={Informee}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">InforMee</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">React, Rails</h3>
                    </a>
                </article>
            </a>
        </section>
    );
};

export default AlbumCards;
