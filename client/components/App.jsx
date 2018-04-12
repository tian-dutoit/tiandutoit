import React from 'react'

const App = function () {
  return (
    <div className = 'container'>
      <div className = 'profile'>
        <h2>Tian du Toit</h2>
        <img className = 'profileImage' src = 'images/profile.jpg' />
        <p>Blurb about me</p>
        <div className = 'iconContainer'>
          <a href='https://github.com/tian-dutoit' target='_blank' rel="noopener noreferrer"> <img className = 'icons' src='images/github.png' />  </a>
          <a href='https://www.linkedin.com/in/tian-du-toit/' target='_blank' rel="noopener noreferrer"> <img className = 'icons' src='images/linkedin.png' /> </a>
        </div>
      </div>
      <hr/>
      <h3>Marama</h3>
      <div className = 'project'>
        <div className = 'blurb'>
          <p>Blurb Marama Blurb MaramaBlurb MaramaBlurb MaramaBlurb MaramaBlurb MaramaBlurb Marama</p>
          <a href = 'http://www.marama.org.nz' target='_blank' rel='noopener noreferrer'>Deployed version</a>
          <a href = 'https://github.com/Marama-App/marama' target='_blank' rel='noopener noreferrer'>GitHub link</a>
        </div>
        <div>
          <img className = 'projectImage' src = 'images/marama.png' />
        </div>
      </div>
      <hr/>
      <h3>Super</h3>
      <div className = 'project'>
        <div className = 'blurb'>
          <p>Blurb about Super</p>
          <a href = 'https://github.com/tian-dutoit/super' target='_blank' rel='noopener noreferrer'>GitHub link</a>
        </div>
        <div>
          <img className = 'projectImage' src = 'images/super.png' />
        </div>
      </div>
      <hr/>
      <h3>Bomb Defuser</h3>
      <div className = 'project'>
        <div className = 'blurb'>
          <p>Blurb about bomb defuser</p>
          <a href = 'https://github.com/tian-dutoit/bomb-defuser' target='_blank' rel='noopener noreferrer'>GitHub link</a>
        </div>
        <div>
          <img className = 'projectImage' src = 'images/bomb.png' />
        </div>
      </div>
    </div>
  )
}

export default App
