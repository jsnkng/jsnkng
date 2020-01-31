import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../components/footer'
import Banner from '../components/elements/banner'
import Iframe from 'react-iframe'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  const [expandIFrame, setExpandIFrame] = useState(false)
  const handleExpandIFrame = () => {
    setExpandIFrame(true)
  }
  const handleCollapseIFrame = () => {
    setExpandIFrame(false)
  }
    const windowDimension = useWindowDimensions()
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
   
  }, [])
  useEffect(() => {
    forceCheck()
  })
  if (!loaded) {
    return null
  } else {
    return (
      <Content>
        <Head>
          <title>JSNKNG</title>
        </Head>
        <Header 
          heroHeight={`90vh`} 
          heroBackground={`/gallery/National_Park_Guides_dev/National_Park_Guides_background.jpg`}
        >
          <div className='hero'>
            <Grid fluid={true}>
              <Row__Decorated>
                <Col__Decorated xs={12} sm={6} md={6} lgOffset={1} lg={6}>
                  <Logo>
                    <div className='top__logo'>
                      <a className='top__logo--text'>
                        <img className='top__logo--image' src='/gallery/National_Park_Guides/us-nps.png' alt='National Parks Guides' />
                      </a>
                   </div>
                  </Logo>
                  <div className='content'>
                    <h3>NextJS/React/Node/MongoDB</h3>
                    <h3>Progressive Web App</h3>
                    <h3>Responsive Design</h3>
                    <h3>API Integration</h3>
                    <h3>MongoDB/S3 Caching</h3>
                    <br />
                    <p>A work-in-progress, National Park Guides is a digital guide to America’s National Parks. Built on the National Park Service API, it uses the data available to create a collection of over 450 digital brochures. Each “brochure” combines photos, descriptions, locations, events, alerts, visitor centers, contacts, campgrounds, news, and other content from the National Park service into a responsive designed “web page” part of a single page app built on NextJS/React/Node.  </p>
                  
                    <a href="https://natparguides.com" target="_blank" rel="noopener">Launch National Park Guides</a>
                    <a href="https://github.com/jsnkng/National-Parks" target="_blank" rel="noopener">Open on GitHub</a>

                  </div>
                   
                    </Col__Decorated>
                    <Col__Decorated xs={12} sm={6} md={6} lg={5}>
                    <Iframe url="https://natparguides.com"
                      id="webFrame"
                      display="inherit"
                      position="relative"
                      className={expandIFrame && 'expanded'}
                      />
                      <div className='toggle__container'>
                        <span className='toggle' onClick={handleExpandIFrame}>Expand</span> <span className='toggle' > |  </span> 
                        <span className='toggle' onClick={handleCollapseIFrame}>Collapse</span> <span className='toggle' > |  </span> 
                        <span className='toggle'><a href="https://natparguides.com" target="_blank" rel="noopener">Open</a></span>
                      </div>
                    </Col__Decorated>
                  </Row__Decorated>
                </Grid>
              </div>
            <div className={windowDimension.scrollY < 0.8 * windowDimension.height  ? 'navigation__spacer absolute' : 'navigation__spacer fixed' }></div>
          </Header>
          <Navigation
            className={windowDimension.scrollY < 0.8 * windowDimension.height  ? 'absolute' : 'fixed' }>
            <Link href={`/`} as={`/`} scroll={false}>
              <a className='navigation__title'>
                Home
              </a>
            </Link>
            <Link href='/' as='/' scroll={false}>
              <div className='navigation__logo'>
                <a href='#'><strong><span>JSN</span><br />KNG</strong><br />2020</a>
              </div>
            </Link>
          </Navigation>
          <Grid fluid={true}>
          <Row__Decorated>
            <Col__Decorated xs={12}>
              
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
          <Footer__Wrapper>
            <Footer themeName={themeName} setThemeName={setThemeName} />
          </Footer__Wrapper>
        </Content>
      )
    }
  }

  Page.pageTransitionDelayEnter = true

  export default Page

  const Content = styled.main`

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

  const Footer__Wrapper = styled.div`
      height: 3rem;
      color: ${({ theme }) => theme.colors.text } !important; 
  `

  const Logo = styled.div`
    z-index: 100;
    margin-left: 1rem;
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
    }
    
    .top__logo--image {
      cursor: pointer;
      border: none;
      width: 200px;
      margin-bottom: 1rem;
    }
  }
  `
  const Header = styled.header`
    #webFrame {
      display: none !important;
      ${'' /* background: ${({ theme }) => theme.colors.image_overlay_darkgradient } !important;  */}
      background-image: url(/gallery/National_Park_Guides/us-nps.png);
      background-size: 66%;
      background-position: center center;
      background-repeat: no-repeat;
      margin: 0 auto;
      width: 332px;
      height: 556px;
      border: 3px solid ${({ theme }) => theme.colors.home_text };
      border-radius: 8px;
      box-shadow: 5px 5px 40px rgba(0,0,0,.8);
      
      ${SuperQuery().minWidth.sm.css`
        display: block !important;
        width: 332px;
        height: 566px;
        right: 3vw;
      `}
      ${SuperQuery().minWidth.md.css`
        width: 332px;
        height: 566px;
        right: 0;
      `}

      &.expanded {
        position: fixed;
        top: -10px;
        right: 50vw;
        width: 85vw;
        height: 596px;
        z-index: 1200;
        ${SuperQuery().minWidth.sm.css`
          right: 0vw;
          width: 50vw;
          height: 516px;
        `}
        ${SuperQuery().minWidth.md.css`
          right: 45vw;
          width: 90vw;
          height: 596px;
        `}
        ${SuperQuery().minWidth.lg.css`
          right: 50vw;
          width: 85vw;
          height: 596px;
        `}
      }
      
    }

    .toggle__container {
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
    .toggle {
      color: #ffffff;
    }
    .hero {
      width: 100%;
      height: ${props => props.heroHeight};
      margin: 0;
      padding: 2rem 1rem;
      z-index: 5;
      background-image: url(${props => props.heroBackground});
      background-size: cover;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
    .content {
      width: 88%;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.4;
      margin-left: 1rem;
      z-index: 100;
      opacity:1;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
      text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
      a {
        display: block;
        font-weight: 700;
        padding: 1rem 0;
        color:  ${({ theme }) => theme.colors.home_text } !important; 
      }
      ${SuperQuery().minWidth.md.css`
      font-size: 1.25rem;
      `}
      h3 {
        font-size: 1rem;
      }
    }

    .hero__overlay {
      z-index: 10;
      background: ${ ({ theme }) => theme.colors.image_overlay_darkgradient };
    }
    .hero__title {
      display: block;
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 1;
      text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
      color: ${({ theme }) => theme.colors.home_text};
      margin: 4%;
      ${SuperQuery().minWidth.md.css`
        font-size: 3rem;
      `}
    }
    .hero__subtitle {
      display: block;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: -0.05em;
      text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
      color: ${({ theme }) => theme.colors.home_text};
      margin: 0 4% 0 1%;
      ${SuperQuery().minWidth.sm.css`
        font-size: 2rem;
      `}
    }

    .navigation__spacer.absolute {
      position: relative;
      display: none;
      height: 5rem;
    }
    .navigation__spacer.fixed {
      display: block;
      height: 5rem;
    }
    
  `

  const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.trans_back};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    z-index: 800;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      height: 5rem;
    `}
    &.absolute {
    }
    &.fixed {
      position: fixed;
      top: 0vh;
      left: 0;
      right: 0;
      height: 3.5rem;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
    
    .navigation__logo {
      display: flex;
      font-size: 1rem;
      line-height: .8;
      align-items:center;
      margin-right: 1.5rem;
      span {
        font-size: 1.125rem;
      }
      a {
        cursor: pointer;
        text-decoration: none;
        border: none;
        color: inherit;
      }
    }
    .navigation__title {
      flex: 0 1 auto;
      font-size: 1rem;
      line-height: 1.1;
      font-weight: 400;
      letter-spacing: -0.05em;
      padding: 0 1rem 0 4.5rem;
      ${SuperQuery().minWidth.sm.css`
        font-size: 1.5rem;
      `}
      ${SuperQuery().minWidth.md.css`
        padding: 0 1rem 0 5rem;
      `}
    }
  `


