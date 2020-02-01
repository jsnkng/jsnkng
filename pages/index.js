import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../components/footer'
import Iframe from 'react-iframe'
import Navigation from '../components/navigation'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  const [expandIFrame, setExpandIFrame] = useState(false)
  const handleExpandIFrame = () => {
    setExpandIFrame(true)
  }
  const handleCollapseIFrame = () => {
    setExpandIFrame(false)
  }
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
      <>

        <Head>
          <title>JSNKNG</title>
        </Head>

        <Hero backgroundURL={`/gallery/National_Park_Guides/natparguides__background__med.jpg`}>
          <Grid>
            <Row__Decorated>
              <Col__Decorated xs={12} sm={6}>
                <a className='logo'>
                  <img src='/gallery/National_Park_Guides/us-nps.png' alt='National Parks Guides' />
                </a>
                <div className='content'>
                  <h3>NextJS/React/Node/MongoDB</h3>
                  <h3>Progressive Web App</h3>
                  <h3>API Integration</h3>
                  <h3>MongoDB/S3 Caching</h3>
                  <br />
                  <p>A work-in-progress, National Park Guides is a digital guide to America’s National Parks. 
                  Built on the National Park Service API, it uses the data available to create a collection of 
                  over 450 digital brochures. Each “brochure” combines photos, descriptions, locations, events, 
                  alerts, visitor centers, contacts, campgrounds, news, and other content from the National 
                  Park service into a responsive designed “web page” part of a single page app built on 
                  NextJS/React/Node.</p>
                  <a href="https://natparguides.com" target="_blank" rel="noopener">
                    <img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' />
                  </a>
                  <a className='xs' href="https://natparguides.com" target="_blank" rel="noopener">
                    Launch National Park Guides
                  </a>
                  <a className='xs' href="https://github.com/jsnkng/National-Parks" target="_blank" rel="noopener">
                    Open on GitHub
                  </a>
                </div>
              </Col__Decorated>
              <Col__Decorated xs={12} sm={6}>
                <Iframe url="https://natparguides.com"
                  id="webFrame"
                  display="inherit"
                  position="relative"
                  className={expandIFrame && 'expanded'}
                  />
                <div className='toggle__container'>
                  { expandIFrame || <span onClick={handleExpandIFrame}>Expand | </span>}
                  { expandIFrame && <span onClick={handleCollapseIFrame}>Collapse | </span>}
                  <span><a href="https://natparguides.com" target="_blank" rel="noopener">Launch</a> | </span>
                  <span><a href="https://github.com/jsnkng/National-Parks" target="_blank" rel="noopener">GitHub</a></span>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />

        <BackgroundOverlay />
       
        <Content>
          <Grid>
            <Row__Decorated>
              <Col__Decorated xs={12}  md={5} lg={6}>
              <div className='content'>
                <h1>
                  Hello. I'm Jason King and this is what I do.
                </h1>
              </div>
              </Col__Decorated>
              {/* <Col__Decorated xs={12} sm={6} md={3}>
              <div className='content'>
                <p>This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. </p>
              </div>
              </Col__Decorated> */}
              <Col__Decorated xs={12} s mdOffset={1}  md={6} lgOffset={1}  lg={5}>
                <div className='content'>
                  <p>
                  </p>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>

        <Content>
          <Grid>
            <Row__Decorated>
              <Col__Decorated xs={12}  md={5} lg={6}>
              <div className='content'>
                <blockquote>I believe in thinking through projects while doing them. In other words projects become a means to think through other problems. 
                
                I enjoy making prototypes and MVPs, I find writing code is the best way to think through and about the problems we are trying to solve by writing code. If there's a map to follow
                that’s great and I really like working with an organization that provides structure and support, but I'm extremely comfortable taking on large projects on my own and working them through to completion. I
                think it’s a much better approach than over architecting a solution or running into unforseen implementation challenges down the road. Plus most people think better
                about something they can see than they do with their imaginations, so being able to create a draft or prototype out of nothing and then bringing that to the table for greater group input just makes sense. </blockquote>
              </div>
              </Col__Decorated>
              {/* <Col__Decorated xs={12} sm={6} md={3}>
              <div className='content'>
                <p>This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. </p>
              </div>
              </Col__Decorated> */}
              <Col__Decorated xs={12} s mdOffset={1}  md={6} lgOffset={1}  lg={5}>
                <div className='content'>
                  <p>Jason King satisfies his passion for making things synthesizing visual, cognitive, and semiotic systems 
                    as an artist, designer, and full-stack web developer. A versatile Creative Technologist he’s worked for a variety of large and small agencies, startups, 
                    and dot-coms over more than 20 years in the industry. Energetic and passionate about making things both artistic and commercial his entrepreneurial 
                    drive has provided him opportunities to experience a range of failures and successes and develop his programming, UX design, project and business management skills.
                  </p>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>


        <Content>
          <Grid>
          <h2>Selected Works</h2>
            <Row__Decorated>
              <Col__Decorated xs={6} md={4}>
                <Link href='/natparguides' passHref>
                  <div className='content'>
                    <img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' width="70%"/>
                    <h3>National Park Guides</h3>
                    <h4>UX/UI Design</h4>
                  </div>
                </Link>
              </Col__Decorated>
              <Col__Decorated xs={6} md={4}>
                <Link href='/natparguides' passHref>
                  <div className='content'>
                    <img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' width="70%"  height="150px" />
                    <h3>Docker Frontend Build</h3>
                    <h4>Development</h4>
                  </div>
                </Link>
                <Link href='/natparguides' passHref>
                  <div className='content'>
                    <img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' width="70%"  height="200px" />
                    <h3>Hybrid Mobile App</h3>
                    <h4>Development</h4>
                  </div>
                </Link>
              </Col__Decorated>
              <Col__Decorated xs={6} md={4}>
                <Link href='/halterscycles' passHref>
                  <div className='content'>
                    <img src='/gallery/Halters_Cycles/halters_laptop.jpg' width="70%"/>
                    <h3>Halter’s Cycles</h3>
                    <h4>UX/UI Design</h4>
                  </div>
                </Link>
                <Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' passHref>
                  <div className='content'>
                    <img src='/gallery/PXL8N/naturemorte_02.jpg' width="70%"/>
                    <h3>Nature Morté</h3>
                    <h4>Fine Art</h4>
                  </div>
                </Link>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>


        <Hero backgroundURL={`/gallery/Mythologies/Natalis_Sancti_Igne/mythologies_background.jpg`}> 
          <Grid fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={12} md={4}>
                <Link href='/collection/[collectionName]/' as='/collection/Mythologies/'>
                  <div className='content'>
                    <h3>Mythologies</h3>
                      <h2>Fine Art</h2>
                    <h4>Atlas Tenebre</h4>
                    <p>This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. </p>
                  </div>
                </Link>
              </Col__Decorated>
              <Col__Decorated xs={12}  mdOffset={1} md={7} >
                <ResponsiveImage backgroundURL={`/gallery/Mythologies/Natalis_Sancti_Igne/image.jpg`} />
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Content>
          <Grid>
          <img src='/gallery/PXL8N/PXL8N_Tag_Logo_sml.png' alt='PXL8N' width='150px' />
          <h2>Product Design</h2>
            <Row__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/pxl8n/daycrawler/daycrawler-bean-bag-chair-w-filling/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/pxl8n_beanbag.jpg' width="90%"/>
                  <h3>Daycrawler</h3>
                  <h4>Beanbag Chair</h4>
                </div>
                </a>
              </Col__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/mythologies/valteri-mortem-benjamin/vmb-iv-journal-blank/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/pxl8n_journal.jpg' width="90%"/>
                  <h3>VMB IV</h3>
                  <h4>Journal</h4>
                </div>
                </a>
              </Col__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/mythologies/tesselato-stravit-flos-tegumen-spinis/tesselato-stravit-flos-tegumen-spinis-ceramic-mug/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/pxl8n_mug.jpg' width="90%"/>
                  <h3>TSFTS</h3>
                  <h4>Coffee Mug</h4>
                </div>
                </a>
              </Col__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/mythologies/valteri-mortem-benjamin/vmb-i-journal-ruled-line/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/VMB-i_journal.jpg' width="90%"/>
                  <h3>VMB I</h3>
                  <h4>Journal</h4>
                </div>
                </a>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>
        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
const ResponsiveImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundURL});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 55vh;
  height: 55vh; 
  margin: 2vw;
  z-index: 1600; 
    border: 3px solid ${({ theme }) => theme.colors.home_text };
    border-radius: 8px;
    box-shadow: 5px 5px 40px rgba(0,0,0,.8);

  ${'' /* ${SuperQuery().minWidth.md.css`
    width: 96%;
    height: 95vw; 
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 60vw; 
  `} */}
`
const Content = styled.div`
  padding: 2rem 1rem 2rem 1rem;
  color:  ${({ theme }) => theme.colors.text }; 
`
const Hero = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 6rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  ${SuperQuery().minWidth.sm.css`
    height: 90vh;
    padding: 2rem 1rem 2rem 1rem;
  `}
  .logo {
    z-index: 100;
    margin-left: 1rem;
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
    }
    img {
      cursor: pointer;
      border: none;
      width: 200px;
      margin-bottom: 1rem;
    }
  }

  .content {
    width: 88%;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.4;
    z-index: 100;
    opacity:1;
    color:  ${({ theme }) => theme.colors.home_text } !important; 
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    a {
      display: block;
      font-weight: 700;
      margin-left:7.5vw;
      padding: 1rem 1rem 0 1rem;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
      &.xs {
        display: block;
        ${SuperQuery().minWidth.sm.css`
        display: none;
        `}
      }
    }
    ${SuperQuery().minWidth.md.css`
      font-size: 1.25rem;
    `}
    h3 {
      font-size: 1rem;
    }
    img {
      display: block;
      width: 70vw;
      margin: 1.5rem auto 0 auto;
      border: 3px solid #d1d1d1;
      border-radius: 4px;
    ${SuperQuery().minWidth.sm.css`
      display: none;
    `}
    }
  }

  #webFrame {
    display: none !important;
    ${'' /* background: ${({ theme }) => theme.colors.image_overlay_darkgradient } !important;  */}
    background-image: url(/gallery/National_Park_Guides/us-nps.png);
    background-color: rgba(0,0,0,0.8);
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

const BackgroundOverlay = styled.div`
  display: none; 
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1100;
  opacity: 0;
  background-color: rgba(0,0,0,0.8);
  background-image: url(${props => props.backgroundURL});
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  &.showBackground {
    display: flex;
    opacity: 1;
    background-color: rgba(0,0,0,0.8);
  }
`