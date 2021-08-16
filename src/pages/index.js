import * as React from "react"
import Layout from "../components/Layout"
// import * as homePageStyles from  "../components/examples/css-module/home.module.css"
// import { Button } from "../components/examples/styledComponents/button"
import { StaticImage } from "gatsby-plugin-image"
// import Gallery from "../components/examples/Gallery"
// import FetchData from "../components/examples/graphql/fetchData"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
const Home = () => {
  return (
    <>
      <Layout>
        <SEO title="Home"  />
        <main className="page">
          <header className="hero">
            <StaticImage 
              src="../images/foods.jpg"
              alt="home"
              layout="fullWidth"
              placeholder="blurred"
              className="hero-img"
            />
            <div className="hero-container">
              <div className= "hero-text">
                  <h1>Tasty Recipes</h1>
                  <h4>easy and delicious..😋</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>

        {/* <Gallery /> */}
      </Layout>
    </>
     )
}

export default Home
