import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    allFile(filter: {name: {ne: "meatStoreLogo"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FIXED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    return (
        <>
        <div className="page">
            <h1>My Gallery!</h1>
            <Wrapper>
                {nodes.map((image, index) => {
                    const { name } = image
                    const pathToImage = getImage(image)
                    return <article key={index} className="gallery">
                        <GatsbyImage 
                            image= {pathToImage}
                            alt= {name}
                            className="gallery-img"
                        />
                    </article>
                })}
            </Wrapper>
        </div>
        </>
    )
}

export const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    .gallery {
        margin: 1rem;
    }
    .gallery-img {
        border-radius: 1rem;
    }
`

export default Gallery
