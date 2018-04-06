import React from 'react'

const App = function () {
  return (
    <div className = 'container'>
      <div className = 'project'>
        <p>Title</p>
        <img className = 'profileImage' src = 'images/profile.jpg' />
        <div className = 'iconContainer'>
          <a href='https://github.com/tian-dutoit' target='_blank' rel="noopener noreferrer"> <img className = 'icons' src='images/github.png' />  </a>
          <a href='https://www.linkedin.com/in/tian-du-toit/' target='_blank' rel="noopener noreferrer"> <img className = 'icons' src='images/linkedin.png' /> </a>
        </div>
      </div>
      <div className = 'project'>
        <p>Marama</p>
        <img className = 'projectImage' src = 'images/marama.png' />
        <a href = 'http://www.marama.org.nz' target='_blank' rel='noopener noreferrer'>Deployed version</a>
        <a href = 'https://github.com/Marama-App/marama' target='_blank' rel='noopener noreferrer'>GitHub link</a>
      </div>
      <div className = 'project'>
        <p>Super</p>
        <img className = 'projectImage' src = 'images/super.png' />
        <a href = 'https://github.com/tian-dutoit/super' target='_blank' rel='noopener noreferrer'>GitHub link</a>
      </div>
      <div className = 'project'>
        <p>Bomb Defuser</p>
        <img className = 'projectImage' src = 'images/bomb.png' />
        <a href = 'https://github.com/tian-dutoit/bomb-defuser' target='_blank' rel='noopener noreferrer'>GitHub link</a>

      </div>
    </div>
  )
}

export default App
