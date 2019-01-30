import React from 'react'
import { Link } from "gatsby"
import IntroCard from "../components/IntroCard"

const IndexPage = () => (
  <div>
    <IntroCard/>
    <h1 className="fw5 sans-serif">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
