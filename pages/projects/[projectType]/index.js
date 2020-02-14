import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../../../components/footer'
import Iframe from 'react-iframe'
import Navigation from '../../../components/navigation'

const Page = ({ 
  projects,
  themeName, 
  setThemeName, 
  pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })
 
  
  const [expandIFrame, setExpandIFrame] = useState(false)
  const handleExpandIFrame = () => {
    setExpandIFrame(true)
  }
  const handleCollapseIFrame = () => {
    setExpandIFrame(false)
  }

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(0)

  /* Create a copy of data  and remove the hero item from it */
  const projectThumbs = [ ...projects ]
  projectThumbs.splice(heroIdx,1)


  if (!loaded) {
    return null
  } else {
    return (
      <>

        <Head>
          <title>{`Jason King ${projects[heroIdx].projectType}`}</title>
          <meta property="og:title" key="ogtitle" content={`Jason King ${projects[heroIdx].projectType}`} />
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content={`https://www.jsnkng.com/projects/${projects[heroIdx].projectType}`} />
          <meta property="og:image" key="ogimage" content={`https://www.jsnkng.com/${projects[heroIdx].projectLogo}`} />
          <meta name="description" key="description" content="Hello. I’m Jason King. I'm a Creative Technologist, an Engineer & UX Developer, Graphic Designer, and Visual Artist, living in Princeton, NJ." />
      </Head>

        <Hero backgroundURL={projects[heroIdx].projectBackground}
          projectThumbLogo={projects[heroIdx].projectThumbLogo}> 
          <BackgroundOverlay />
          <Grid__Decorated fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={24} sm={11} mdOffset={1}>

                <div className='description'>

                  <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${projects[heroIdx].projectType}/project/${projects[heroIdx].projectName}`} scroll={false}>
                    <a className='logo'>
                    <img src={projects[heroIdx].projectLogo} alt={projects[heroIdx].projectTitle} />
                  <h2>{projects[heroIdx].projectCategory}</h2>
                  {
                    projects[heroIdx].projectTags.map(tag => {
                      return (
                        <h3 key={tag}>{tag}</h3>
                      )
                    })
                  }
                    </a>
                  </Link>

                  <br />

                  

                </div>

                <div className='content'>
                  <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${projects[heroIdx].projectType}/project/${projects[heroIdx].projectName}`} scroll={false}>
                    <a><img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' /></a>
                  </Link>
                  <div dangerouslySetInnerHTML={{__html:projects[heroIdx].projectDescription}}></div>
                </div>

                <br />

                <div className='description'>

                <a href={projects[heroIdx].projectURL} target='_blank'>{projects[heroIdx].projectURL}</a>
                  {/* <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${projects[heroIdx].projectType}/project/${projects[heroIdx].projectName}`} scroll={false}><a>Learn More About the Project</a></Link> */}
                </div>

              </Col__Decorated>
              <Col__Decorated xs={24} smOffset={1} sm={10}>
                <Iframe url={projects[heroIdx].projectURL}
                  id="webFrame"
                  display="inherit"
                  position="relative"
                  className={expandIFrame && 'expanded'}
                /> 
                <div className='toggle__container'>
                  { expandIFrame || <span onClick={handleExpandIFrame}>Expand | </span>}
                  { expandIFrame && <span onClick={handleCollapseIFrame}>Collapse | </span>}
                  <span><a href={projects[heroIdx].projectURL} target='_blank'>Launch</a></span>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid__Decorated>
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />

        <Content>
    
          <Grid__Decorated fluid={true}>
            <Row__Decorated className='column'>

              {
                projectThumbs.slice().map(project => {
                  return (

                    <Col__Decorated xs={24} sm={6} key={project.projectName}>
                      <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${project.projectType}/project/${project.projectName}`} scroll={false}>
                      <a>
                        <div className='callout'>
                          <img src={project.projectThumb} />
                          <h3>{project.projectTitle}</h3>
                          <span>{project.projectCategory}</span>
                        </div>
                      </a>
                      </Link>
                    </Col__Decorated>

                  )
                })
              }

            </Row__Decorated>
          </Grid__Decorated>
        </Content>

        <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
Page.getInitialProps = async ({ req, query }) => {
  const { projectType } = query
  const { origin }  = absoluteUrl(req)
  const projectResult = await fetch(`${origin}/api/projects/${projectType}`)
  const result = await projectResult.json()
  result.projectType = projectType
  return result
}

const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 7rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};
  /* Navigation related, responsive design */
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  90vh;
    padding: 2rem 1rem 2rem 1rem;
  `}
  .logo {
    z-index: 100;
    margin: -0.5rem 0rem 1rem 0;
    img {
      border: none;
      width: 240px;
    }
  }
  a.logo {
    text-decoration: none;
  }
  .description {
    text-align: center;
    margin: 0;
    width: 100%;
    font-weight: 400;
    line-height: 1.4;
    z-index: 100;
    opacity: 1;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      text-align: left;
    `}
    h2 {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: -0.05em;
    }
    h3 {
      font-size: 1.125rem;
      font-weight: 200;
    }
    a {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.home_text};
      cursor: pointer;
      border: none;
    }
  }
  .content {
    width: 100%;
    font-weight: 400;
    line-height: 1.4;
    z-index: 100;
    opacity: 1;
    margin-left: 0;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    h3 {
      font-size: 1rem;
      font-weight: 200;
      line-height: 1.2;
    }
    p {
      font-size: 1.125rem;
      ${SuperQuery().minWidth.md.css`
        font-size: 1.25rem;
      `}
    }
    a {
      display: block;
      font-weight: 700;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
    }
    img {
      display: block;
      width: 80vw;
      margin: 1rem auto 1.5rem auto;
      border: 3px solid ${({ theme }) => theme.colors.home_text };
      border-radius: 4px;
      box-shadow: 5px 5px 40px rgba(0,0,0,.8);
      ${SuperQuery().minWidth.sm.css`
        display: none;
      `}
    }
  }


  

  #webFrame {
    display: none !important;
    ${'' /* background: ${({ theme }) => theme.colors.image_overlay_darkgradient } !important;  */}
    background-image: url(${props => props.projectThumbLogo});
    background-color: rgba(0,0,0,0.8);
    background-size: 66%;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 auto;
    width: 90vw;
    height: 70vh;
    min-height: 600px;
    border: 3px solid ${({ theme }) => theme.colors.home_text };
    border-radius: 8px;
    box-shadow: 5px 5px 40px rgba(0,0,0,.8);
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    ${SuperQuery().minWidth.sm.css`
      display: block !important;
      width: 18rem;
      right: 0;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 21rem;
      height: 77.5vh;
    `}
    ${SuperQuery().minWidth.lg.css`
      width: 25rem;
    `}
    &.expanded {
      position: fixed;
      top: 0;
      right: 49vw;
      width: 90vw;
      height: 82.5vh;
      z-index: 1200;
    }
  }
  .toggle__container {
    color: #ffffff;
    text-align: center;   
    display: none;
    ${SuperQuery().minWidth.sm.css`
      display: block;
    `}
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem 1rem 3rem 1rem;
  z-index: 5;
  color: ${({ theme }) => theme.colors.text }; 
  background-color: ${({ theme }) => theme.colors.image_overlay_gradient };

  ${SuperQuery().minWidth.sm.css`
    text-align: left;
  `}

  a {
    color: ${({ theme }) => theme.colors.text }; 
    text-decoration: none; 
  }
  a h3 {
    text-decoration: underline;
  }
  
  h3, span {
    display: block;
    text-align: center;
  }

  .callout {
    margin: 0 0 2rem 0;
    img {
      display: block;
      margin: 1rem auto 1.5rem auto;
      border: 3px solid ${({ theme }) => theme.colors.home_text };
      border-radius: 4px;
      width: 80vw;
      max-width: 90%;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.25);
      cursor: pointer;
    }

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.2;
    }
    span {
      font-size: 1rem;
      font-weight: 200;
      line-height: 1.2;
    }
  }
`

const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  position: relative;
  margin: 0;
  padding: 0;
`
const Grid__Decorated = styled(Grid)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  display: block; 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  z-index: 0;
  opacity: 1;
  background: ${({ theme }) => theme.colors.image_overlay_darkgradient };
`