import React from 'react'

const App = function () {
  return (
    <div className = 'container'>
      <div className = 'profile'>
        <p>Title</p>
        <img className = 'profileImage' src = 'images/profile.jpg' />
      </div>
      <div className = 'project'>
        <p>Marama</p>
        <img className = 'projectImage' src = 'images/marama.png' />
      </div>
      <div className = 'project'>
        <p>Super</p>
        <img className = 'projectImage' src = 'images/super.png' />
      </div>
      <div className = 'project'>
        <p>Bomb Defuser</p>
        <img className = 'projectImage' src = 'images/bomb.png' />
      </div>
    </div>
  )
}

export default App
