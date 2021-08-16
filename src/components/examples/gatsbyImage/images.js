import React from 'react'
import styled from 'styled-components'
import salt from "../../images/salt.jpg" 
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
    return (
        <Wrapper>
            <StaticImage 
            src="../../images/salt.jpg" 
            alt="food"
            height={400}
            width= {400}
            placeholder="tracedSVG"
            layout="constrained"
            className="example-img"
            as="section"
            />
            <h1>Hello Images!</h1>

        </Wrapper>
    )
}

const Wrapper = styled.section`
        width: 70vw;
        margin: 0 auto;
        section {
            border: 2px solid red;
        }
        .example-img{
            border-radius: 1rem;
        }

`
export default Images
