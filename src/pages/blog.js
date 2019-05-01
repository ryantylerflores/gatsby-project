import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  // Markdown Query //
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // Contentful Query //
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (
              formatString: "MMMM Do, YYYY"
            )
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
      <Head title="Blog"/>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {/* {renderPageInfo} */}
        {/* { data.allMarkdownRemark.edges.map((edges,index) => {
          return(
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edges.node.fields.slug}`}>
                <h2>{edges.node.frontmatter.title}</h2>
                <p>{edges.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        }) } */}
        { data.allContentfulBlogPost.edges.map((edges, index) => {
          return(
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edges.node.slug}`}>
                <h2>{edges.node.title}</h2>
                <p>{edges.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;