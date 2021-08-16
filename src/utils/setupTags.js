import React from "react"

const setupTags =(recipes) => {
    const allTags = {}
    recipes.forEach(recipe => {
        recipe.content.tags.forEach(tag => {
            if(allTags[tag]) {
                allTags[tag] = allTags[tag] + 1
            } else {
                allTags[tag] = 1
            }

        })
    })
    // convert object as an array of key-value pairs.
    const newTags = Object.entries(allTags).sort((a,b) => {
        const [firstTag] = a
        const [secondTag] = b
        // Determines whether two strings are equivalent in the current or specified locale.
        return firstTag.localeCompare(secondTag)
    })
    return newTags
}

export default setupTags