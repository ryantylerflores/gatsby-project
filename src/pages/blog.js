import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // const renderPageInfo = data.allMarkdownRemark.edges.map((x,index) => {
  //   return (
  //     <li key={index}>
  //       <h2>{x.node.frontmatter.title}</h2>
  //       <p>{x.node.frontmatter.date}</p>
  //     </li>
  //   )
  // })

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {/* {renderPageInfo} */}
        { data.allMarkdownRemark.edges.map((edges,index) => {
          return(
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edges.node.fields.slug}`}>
                <h2>{edges.node.frontmatter.title}</h2>
                <p>{edges.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        }) }
      </ol>
    </Layout>
  )
}

export default BlogPage;