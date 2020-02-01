import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
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

        <Header backgroundURL={`/gallery/National_Park_Guides/natparguides__background.jpg`}
          parentLink={{ href: `/`, as: `/` }}>
          <Grid fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={12} sm={6} md={6} lgOffset={1} lg={6}>
                <a className='logo'>
                  <img src='/gallery/National_Park_Guides/us-nps.png' alt='National Parks Guides' />
                </a>
                <div className='content'>
                <h3>NextJS/React/Node/MongoDB</h3>
                    <h3>Progressive Web App</h3>
                    <h3>Responsive Design</h3>
                    <br />
                    <p>National Park Guides is your digital guide to America’s National Park System. Designed to provide 
                    advertising opportunities for businesses catering to park-goers, National Park Guides offers up-to-date 
                    park alerts, events, and news along with detailed maps, campground, and visitor center info. Easily 
                    saved to a mobile device’s home screen, this app is a friendly little guide to the Nation’s Park System.</p>
                </div>
                <a className='thumbnail' href="https://natparguides.com" target="_blank" rel="noopener">
                    <img src='/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg' />
                  </a>
                <a className='link' href="https://natparguides.com" target="_blank" rel="noopener">
                    Launch National Park Guides
                </a>
              </Col__Decorated>
              <Col__Decorated xs={12} sm={6} md={6} lg={5}>
                <Iframe url="https://natparguides.com"
                  id="webFrame"
                  display="inherit"
                  position="relative"
                  className={expandIFrame && 'expanded'}
                  />
                <div className='toggle__container'>
                  { expandIFrame || <span onClick={handleExpandIFrame}>Expand | </span>}
                  { expandIFrame && <span onClick={handleCollapseIFrame}>Collapse | </span>}
                  <span><a href="https://natparguides.com" target="_blank" rel="noopener">Launch</a></span>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Header>

        <Navigation parentTitle={`UX/UI`} parentLink={{ href: `/`, as: `/` }} />
        <Grid fluid={true}>
            <Row__Decorated>
              <Col__Decorated xsOffset={1} xs={3} mdOffset={1} md={1}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Mobile_Light/image.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={6} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Large_Light/image.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={3} mdOffset={1} md={1}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Mobile_Dark/image.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={6} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Large_Dark/image.jpg' width='100%' />
              </Col__Decorated>
            </Row__Decorated>
            <Row__Decorated>
              {/* <Col__Decorated xs={2} mdOffset={1} md={1}>
                
              </Col__Decorated> */}
              <Col__Decorated xsOffset={1} xs={1} mdOffset={1} md={1}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_iva.jpg' width='100%' />
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_iiia.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={3} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_iia.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={4} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_ia.jpg' width='100%' />
              </Col__Decorated>
            </Row__Decorated>
            <Row__Decorated>
              {/* <Col__Decorated xs={6} mdOffset={1} md={1}>
                
              </Col__Decorated> */}
              <Col__Decorated xsOffset={1} xs={1} mdOffset={1} md={1}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_ivb.jpg' width='100%' />
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_iiib.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={3} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_iib.jpg' width='100%' />
              </Col__Decorated>
              <Col__Decorated xsOffset={1} xs={4} mdOffset={1} md={3}>
                <img src='/gallery/National_Park_Guides/Park_Detail_Guide_Homepages/image_ib.jpg' width='100%' />
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
const Header = styled.header`
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
    margin-left: 1rem;
    z-index: 100;
    opacity:1;
    color:  ${({ theme }) => theme.colors.home_text } !important; 
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.md.css`
      font-size: 1.25rem;
    `}
   
  }
  a.link {
    display: block;
    text-align: center;
    font-weight: 700;
    color:  ${({ theme }) => theme.colors.home_text } !important; 
    ${SuperQuery().minWidth.sm.css`
      display: none;
    `}
  }
  a.thumbnail {
    display: block;
    width: 80vw;
    margin: 1rem auto;
    img {
      width: 100%;
      border: 3px solid #d1d1d1;
      border-radius: 4px;
    }
    ${SuperQuery().minWidth.sm.css`
      display: none;
    `}
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

