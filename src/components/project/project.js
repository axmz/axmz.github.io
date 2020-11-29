import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Video } from 'gatsby-video'

const Project = ({ children, image, video, description, name, link }) => {

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
      allVideoFfmpeg {
        nodes {
          mp4: transcode(maxWidth: 3600, maxHeight: 1520, fileExtension: "mp4", codec: "libx264") {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
        }
      }
    }
  `)

  const videonode = data.allVideoFfmpeg.nodes.find(node => node.mp4.originalName === video)
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
              <Img fluid={imagenode.childImageSharp.fluid} style={{boxShadow: "0px 0px 6px 2px rgba(0,0,0,.2)"}} /> :
              (videonode) ?
                <Video
                  autoPlay
                  muted
                  loop
                  sources={[videonode.mp4]}
                /> :
                <div>{children}</div>
          }
        </a>
      </div>
    </div>
  )
}

export default Project