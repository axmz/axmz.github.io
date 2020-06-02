import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project = ({ children, image, description, name, link }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile{
        nodes { 
          relativePath
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const imagenode = data.placeholderImage.nodes.find(node => node.relativePath === image)

  return (
    <div>
      <h2>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </h2>
      <p>{description}</p>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {
            (imagenode && imagenode.childImageSharp) ?
              <Img fluid={imagenode.childImageSharp.fluid} /> :
              <div>{children}</div>
          }
        </a>
      </div>
    </div>
  )
}

export default Project