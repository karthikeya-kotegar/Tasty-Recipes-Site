import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const data = graphql`
 query FirstQuery{
    site {
      info:siteMetadata {
        author
        description
        simpleData
        siteUrl
        title
        person {
          name
        }
        complexData {
          name
          age
        }
      }
    }
  }
`

const ComponentName = () => {
  const getData = useStaticQuery(data);
  const siteData = getData.site.info;
  console.log("data",getData)
//   const {
//     site: {
//       info: { title },
//     },
//   } = useStaticQuery(data);

  return (
    <>
      <div>{siteData.author}</div>
      {/* <h2>title is : {title}</h2> */}
      {/* <div>{getData.site.info.person.name}</div> */}
      {/* <div>
        {getData.site.info.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} : {item.age}
            </p>
          );
        })}
      </div> */}
    </>
  );
};

export default ComponentName;
