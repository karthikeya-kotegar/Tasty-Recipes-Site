import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const TagTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipes.nodes
    return (
        <Layout>
          <SEO title={pageContext.tag} />
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes= {recipes} />
                </div>
            </main> 
        </Layout>
    )
}

export const query = graphql`
query getRecipeByTag($tag:String) {
    allContentfulRecipes(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
