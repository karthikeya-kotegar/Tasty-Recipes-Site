import React from 'react'
import Layout from "../components/Layout"
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

export default function Contact({data}) {
    const recipes = data.allContentfulRecipes.nodes
    return (
        <Layout>
          <SEO  title="Contact"/>
            <main className="page">
                <section className="contact-page">
                <article className="contact-info">
                    <h3>Want to Get in Touch.</h3>
                    <p>Kickstarter whatever echo park pinterest scenester listicle marfa poke. Hot chicken paleo pinterest celiac, marfa banh mi messenger bag chia la croix kombucha try-hard woke cardigan.</p>

                    <p>Echo park organic cornhole art party next level gochujang pour-over bitters bicycle rights direct trade. Intelligentsia semiotics trust fund tattooed, mlkshk everyday carry craft beer sriracha hot chicken.</p>

                    <p>it's readymade tofu marfa, crucifix small batch kitsch butcher normcore.</p>
                </article>
                <article>
                    <form className="form contact-form"
                      action="https://formspree.io/f/xyylbejz"
                      method="POST" >
                        <div className="form-row">
                            <label htmlFor="name">your name </label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">your email </label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn block">submit</button>

                    </form>
                </article>
                </section>
                <section className="featured-recipes">
                    <h4>Look At this awesome recipes! </h4>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
    )
}
