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

        <Hero className='productDesign' backgroundURL={`/gallery/PXL8N/Languid_Angel/image_i.jpg`}
          vHeight={'90vh'}> 
          <BackgroundOverlay />
         
          <img className='logo' src='/gallery/PXL8N/PXL8N_Tag_Logo_sml.png' alt='PXL8N' width="200px" />
          <h2>Returning Soon</h2>

              {/* <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/pxl8n/daycrawler/daycrawler-bean-bag-chair-w-filling/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/Double_Daredevil/image.jpg' width="90%"/>
                  <h3>Double Daredevil</h3>
                  <h4>Beanbag Chair</h4>
                </div>
                </a>
              </Col__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/mythologies/valteri-mortem-benjamin/vmb-iv-journal-blank/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/Languid_Angel/image.jpg' width="90%"/>
                  <h3>Languid Angel</h3>
                  <h4>Ruled Journal</h4>
                </div>
                </a>
              </Col__Decorated>
              <Col__Decorated xs={6} md={3}>
              <a href='https://shop.jsnkng.com/catalog/mythologies/tesselato-stravit-flos-tegumen-spinis/tesselato-stravit-flos-tegumen-spinis-ceramic-mug/' target="_blank" rel="noopener">
                <div className='content'>
                  <img src='/gallery/PXL8N/Petal_Pusher/image.jpg' width="90%"/>
                  <h3>Petal Pusher</h3>
                  <h4>Ceramic Mug</h4>
                </div>
                </a>
              </Col__Decorated> */}
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />

        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
const Hero = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  ${props => props.vHeight};
    padding: 2rem 1rem 2rem 1rem;
  `}
  img {
    z-index: 10;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    z-index: 10;
  }
 

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