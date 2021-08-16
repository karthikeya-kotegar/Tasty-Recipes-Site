import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
const TagsList = ({recipes = []}) => {
    const newTags = setupTags(recipes)
    return (
        <div className="tag-container">
            <h4>Your Recipes</h4>
            <div className="tags-list">
                {newTags.map((tag, index) => {
                    const [tagName, value] = tag
                    const tagSlug = slugify(tagName, {lower:true})
                    return (
                    <Link to={`/tags/${tagSlug}`} key={index}>
                        {tagName} ({value})
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TagsList
