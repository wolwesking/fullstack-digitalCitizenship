import React from 'react'
import "../css/PageMain.css"

function PageMain() {
  return (
    <div>
      <section>
        <h1>What is copyright?</h1>
        <div>
          <p>It's a protection for your work!</p>
          <p>It means that only YOU have the right to do these things with your work:</p>
        </div>
        <ul>
          <li>Make copies of your work</li>
          <li>Distrute copies of your work</li>
          <li>Perform your work publicly (plays/films/dances/music)</li>
          <li>Display your work publicly (artwork/audio/code)</li>
          <li>Make changes to it</li>
        </ul>
          <p>Unless you didn't give permission, then those list
            points are illegal for everybody else to do</p>
      </section>

      <section className="protect">
        <h1>Which works are protected?</h1>
        <div>
          <ul>
            <li>Literary works (Software)</li>
            <li>Musical works</li>
            <li>Dramatic works</li>
            <li>Pantomimes and choreographic works</li>
            <li>Graphic works</li>
            <li>Motion pictures</li>
            <li>Sound recordings</li>
            <li>Architechtural works</li>
          </ul>
          <section>
            <img src="../images/Software.png" height="206.267" alt="Software.png" />
            <img src="../images/music.webp" height="206.267" alt="music.webp" />
            <img src="../images/graphic.png" height="206.267" alt="graphic.png" />
            <img src="../images/drama.png" height="206.267" alt="drama.png" />
          </section>
        </div>
      </section>

      <section>
        <h1>Which works are not protected?</h1>
        <ul>
          <li>Ideas</li>
          <li>Titles</li>
          <li>Names</li>
          <li>Speech</li>
          <li>Works by the US government</li>
        </ul>
      </section>
      <section>
        <h1>How long does copyright protection last?</h1>
        <p>70 yeas after the death of the author/artist</p>
      </section>
    </div>
  )
}


export default PageMain 