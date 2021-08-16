import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import SEO from "../components/SEO"


const Tags = ({data}) => {
    const newTags = setupTags(data.allContentfulRecipes.nodes)
    return (
        <Layout>
          <SEO title="Tags"/>
            <main className="page">
                 <section className="tags-page">
                    {newTags.map((tag, index) => {
                        const [tagName, value] = tag
                        const tagSlug = slugify(tagName, {lower:true})
                        return (
                            <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                                <h5>{tagName}</h5>
                                <p>{value} recipes</p>
                            </Link>
                        )
                    })}
                 </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
