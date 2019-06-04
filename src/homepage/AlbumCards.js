import FabrikantImg from '../common/images/fabrikantpage.jpg'
import YoutubeImg from '../common/images/youtubepage.png'

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
                    <h3 class="f5 f4-ns mb0 black-90">Fabrikant</h3>
                    <h3 class="f6 f5 fw4 mt2 black-60">Client Catalog Page</h3>
                </a>
            </article>
            </a>
            <a target="_blank" href="http://fabrikant.eachscape.com/">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img src={YoutubeImg}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">Fabrikant</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Client Catalog Page</h3>
                    </a>
                </article>
            </a>
        </section>

    );
};

export default AlbumCards;
