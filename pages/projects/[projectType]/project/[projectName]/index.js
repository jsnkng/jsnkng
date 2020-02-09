import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'
import { useSwipeable, Swipeable } from 'react-swipeable'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'
import Navigation from '../../../../../components/navigation'

import Iframe from 'react-iframe'
const Page = ({ 
  projectType,
  projectTitle, 
  projectName, 
  projectLogo, 
  projectThumb, 
  projectThumbLogo, 
  projectBackground, 
  projectCategory, 
  projectTags, 
  projectURL, 
  projectDescription, 
  themeName, 
  setThemeName, 
  pageTransitionReadyToEnter}) => {

  /* Basic page stuff */
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
  if (!loaded) {
    return null
  } else {
    return (
      <>
      <Head>
        <title>JSNKNG : {projectTitle} </title>
      </Head>
      <Hero backgroundURL={projectBackground}
          projectThumbLogo={projectThumbLogo}> 
          <BackgroundOverlay />
          <Grid__Decorated fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={24} sm={11} mdOffset={1}>

                <div className='description'>

                  <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${projectType}/project/${projectName}`} scroll={false}>
                    <a className='logo'>
                    <img src={projectLogo} alt={projectTitle} />
                  <h2>{projectCategory}</h2>
                  {
                    projectTags.map(tag => {
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
                  <Link href='/projects/[projectType]/project/[projectName]/' as={`/projects/${projectType}/project/${projectName}`} scroll={false}>
                    <a><img src={projectThumb} /></a>
                  </Link>
                  <div dangerouslySetInnerHTML={{__html:projectDescription}}></div>
                </div>

                <br />

                <div className='description'>
                <a href={projectURL} target='_blank'>{projectURL}</a>
                </div>

              </Col__Decorated>
              <Col__Decorated xs={24} smOffset={1} sm={10}>
                <Iframe url={projectURL}
                  id="webFrame"
                  display="inherit"
                  position="relative"
                  className={expandIFrame && 'expanded'}
                /> 
                <div className='toggle__container'>
                  { expandIFrame || <span onClick={handleExpandIFrame}>Expand | </span>}
                  { expandIFrame && <span onClick={handleCollapseIFrame}>Collapse | </span>}
                  <span><a href={projectURL}>Launch</a></span>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid__Decorated>
        </Hero>

      <Navigation parentTitle={`Web`} parentLink={{ href: `/projects/[projectType]`, as: `/projects/Web` }} />

      <Footer themeName={themeName} setThemeName={setThemeName} />

    </>
    )
  }
}
Page.pageTransitionDelayEnter = true

export default Page

Page.getInitialProps = async ({ req, query }) => {
  const { projectName } = query
  const { origin }  = absoluteUrl(req)
  const projectResult = await fetch(`${origin}/api/project/${projectName}`)
  const result = await projectResult.json()
  result.projectName = projectName
  return result
}


const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height:90vh;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};
  /* Navigation related, responsive design */
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  ${props => props.vHeight};
    padding: 2rem 1rem 2rem 1rem;
  `}
  .logo {
    z-index: 100;
    margin: -0.5rem 0rem 1rem 0;
    text-decoration: none;
    img {
      border: none;
      width: 240px;
    }
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
      font-size: 1.75rem;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 1.1;
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
    ${'' /* color:  ${({ theme }) => theme.colors.home_text } !important;  */}
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    
    
    a {
      display: block;
      font-weight: 700;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
    }
    p {
      font-size: 1.125rem;
      ${SuperQuery().minWidth.md.css`
        font-size: 1.25rem;
      `}
    }
    h3 {
      font-size: 1rem;
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
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`