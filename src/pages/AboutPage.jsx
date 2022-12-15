import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About page feedback</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate,
           quod animi quae minus minima debitis ducimus similique mollitia quam?</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage