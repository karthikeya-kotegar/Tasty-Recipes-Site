import React from 'react'
import Layout from '../components/Layout'
// import {header, text} from  "../components/examples/css-module/about.module.css"
// import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"


export const query = graphql`
  {
    allContentfulRecipes(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const About = ({data:{allContentfulRecipes:{nodes:recipes}}}) => {
    return (
        <Layout>
          <SEO title="About" />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h1>I'm baby jianbing,</h1>
                        <p>Retro chartreuse truffaut flexitarian raw denim labore succulents roof party commodo laborum green juice bespoke fashion axe cliche.</p>
                        <p>Snackwave irony pickled proident. Chartreuse salvia freegan edison bulb, lo-fi yr quinoa taxidermy man braid art party enim veniam. </p>
                        <Link to= "/contact" className="btn">contact</Link>
                    </article>
                    <StaticImage src="../images/salt.jpg" alt="pouring salt" 
                        layout="constrained"
                        placeholder="blurred"
                        className="about-img"
                    />
                </section>
                <section className="featured-recipes">
                    <h4>Featured </h4>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
    )
}

export default About

// const Wrapper = styled.div`
//     background: blue;
//     p{
//         color: red;
//     }
// `