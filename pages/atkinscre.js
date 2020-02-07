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

        <Hero backgroundURL={`/gallery/AtkinsCRE/AtkinsCRE_Background.jpg`}
          vHeight={'90vh'}> 
          <BackgroundOverlay />
          <Grid>
          <Row__Decorated>
            <Col__Decorated xs={12} sm={6} md={6} lgOffset={1} lg={5}>
              <div className='description'>
                  <a className='logo'>
                  <img src='/gallery/AtkinsCRE/logo-atkins-commercial-realestate.png' alt='Atkins CRE' />
                    <h2>Wordpress</h2>
                    <h3>Responsive Design</h3>
                    <h3>Dynamic Property Listings</h3>
                  </a>
                <br />
                <a href='https://www.atkinscre.com'>https://www.atkinscre.com</a>
                </div>

                <div className='content'>
                  <a href="https://www.atkinscre.com">
                    <img src='/gallery/AtkinsCRE/atkinscre_thumbnail.jpg' alt='Atkins CRE' />
                  </a>
                  <p>All businesses need to generate leads and develop brand awareness, Atkins Commercial Real Estate uses 
                  their mobile-friendly, Wordpress site to do both and a whole lot more. Putting the customer’s needs first, 
                  Atkins CRE’s design puts map and phone button at the top of every screen for easy 
                  access and a CTA contact form at the bottom so users are provided lots of opportunities to get in touch. 
                  What’s more, properties they have listed are available on the website and kept up-to-date through a custom 
                  WordPress plugin.</p>
                </div>
                <br />
                {/* <div className='description'>
                  <Link href='/atkinscre'><a>Learn More About the Project</a></Link>
                </div> */}
              </Col__Decorated>
              <Col__Decorated xs={12} sm={6} md={6}>
                <Iframe url="https://www.atkinscre.com"
                  id="webFrame"
                  display="inherit"
                  position="relative"
                  className={expandIFrame && 'expanded'}
                /> 
                <div className='toggle__container'>
                  { expandIFrame || <span onClick={handleExpandIFrame}>Expand | </span>}
                  { expandIFrame && <span onClick={handleCollapseIFrame}>Collapse | </span>}
                  <span><a href="https://www.atkinscre.com">Open in New Window</a></span>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Navigation parentTitle={`Web`} parentLink={{ href: `/web`, as: `/web` }} />

        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
const Content = styled.div`
  ${'' /* padding: 2rem 1rem 2rem 1rem; */}
  color: ${({ theme }) => theme.colors.text }; 
  a {
    ${'' /* color: ${({ theme }) => theme.colors.text }; */}
  color: #ffffff;
    text-decoration: none; 
  }
  a h3 {
    text-decoration: underline;
  }
  h2 {
    margin: 2rem 0 0 0.75rem;
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: -0.1em;
  }
`

const Character = styled.header`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: #ffffff;
  text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};

  a {    
    text-decoration: none;
    text-shadow: none;
  }
  
  &.selectedWorks {
    text-align: center;
    .content {
      
      img {
        display: block;
        margin: 1rem auto 1.5rem auto;
        border: 3px solid ${({ theme }) => theme.colors.home_text };
        border-radius: 4px;
        width: 70vw;
        max-width: 90%;
        box-shadow: 5px 5px 40px rgba(0,0,0,.8);
        cursor: pointer;
        ${'' /* ${SuperQuery().minWidth.lg.css`
          width: 22vw;
        `}
        ${SuperQuery().minWidth.of('1700px').css`
          width:  20vw;
          max-width: 90%;
        `} */}
      }
    }
    ${SuperQuery().minWidth.sm.css`
      text-align: left;
    `}
   h3, span {
     display: block;
     text-align: center;
   }
  }



`






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
    height:  ${props => props.vHeight};
    padding: 2rem 1rem 2rem 1rem;
  `}
  .logo {
    z-index: 100;
    margin: -0.5rem 0rem 1rem 0;
    text-decoration: none;
    img {
      border: none;
      width: 360px;
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
    ${'' /* color:  ${({ theme }) => theme.colors.home_text } !important;  */}
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    
    a {
      display: block;
      font-weight: 700;
      padding: 1rem 1rem 0 1rem;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
      &.xs {
        display: block;
        ${SuperQuery().minWidth.sm.css`
        display: none;
        `}
      }
    }
    p {
      font-size: 1.125rem;
    }
    h3 {
      font-size: 1rem;
    }
    img {
      display: block;
      width: 60vw;
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
    background-image: url(/gallery/AtkinsCRE/logo-atkins-commercial-realestate.png);
    background-color: rgba(0,0,0,0.8);
    background-size: 66%;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 auto;
    height: 35rem;
    max-height: 680px;
    border: 3px solid ${({ theme }) => theme.colors.home_text };
    border-radius: 8px;
    box-shadow: 5px 5px 40px rgba(0,0,0,.8);
    ${SuperQuery().minWidth.sm.css`
      display: block !important;
      right: 0;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 21rem;
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
        width: 45vw;
        height: 516px;
      `}
      ${SuperQuery().minWidth.md.css`
        right: 45vw;
        width: 90vw;
        height: 640px;
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
  display: block; 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  z-index: 0;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.image_overlay_opaque };
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`