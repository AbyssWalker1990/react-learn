import React from 'react'

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <p>{text}</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Default text'
}

export default Header