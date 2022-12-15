import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About page feedback</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate,
          quod animi quae minus minima debitis ducimus similique mollitia quam?</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage