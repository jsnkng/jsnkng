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
          heroBackground={`/gallery/National_Park_Guides/natparguides__background__dark.jpg`}
          parentLink={{ href: `/`, as: `/` }}
        >
          <div className='hero'>
            <Grid fluid={true}>
              <Row__Decorated>
                <Col__Decorated xs={12} sm={6} md={6} lgOffset={1} lg={6}>
                  <Logo>
                    <div className='top__logo'>
                     <a className='top__logo--text'>National<br />Park<br />Guides</a>
                      <img className='top__logo--image' src='/us-nps.png' alt='National Parks Guides' />
                    </div>
                  </Logo>
                  <div className='content'>
                    <h3>Progressive Web App</h3>
                    <h3>NextJS/React/Node/MongoDB</h3>
                    <h3>Responsive Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget sapien ultrices, venenatis sem maximus, hendrerit magna. Nam in diam rhoncus, rhoncus arcu vitae, eleifend sem. Fusce convallis a est sit amet accumsan. Suspendisse mi est, varius eu placerat quis, congue accumsan augue. Etiam laoreet erat congue lectus vehicula, vel blandit neque elementum.</p>
                  
                    <h4><a href="https://natparguides.com" target="_blank" rel="noopener">Open National Park Guides</a></h4>

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
              <Col__Decorated xs={12} md={4}>
            
              </Col__Decorated>
                <Col__Decorated xs={12} md={8}>

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

  const Header = styled.header`
    #webFrame {
      display: none !important;
      margin: 1rem auto 0 auto;
      width: 332px;
      height: 556px;
      border: 2px solid #c1c1c1;
      border-radius: 8px;
      box-shadow: 5px 5px 40px rgba(0,0,0,.8);

      
      ${SuperQuery().minWidth.sm.css`
        display: block !important;
        top: 20px;
        width: 332px;
        height: 566px;
        right: 3vw;
      `}

      ${SuperQuery().minWidth.md.css`
        top: 20px;
        width: 332px;
        height: 556px;
        right: 0;
      `}

      &.expanded {
        position: fixed;
        top: -20px;
        right: 50vw;
        width: 85vw;
        height: 596px;
        z-index: 1200;
        ${SuperQuery().minWidth.sm.css`
          display: block !important;
          top: 20px;
          right: 0vw;
          width: 50vw;
          height: 516px;
        `}
        ${SuperQuery().minWidth.md.css`
          top: -20px;
          right: 45vw;
          width: 90vw;
          height: 596px;
        `}
        ${SuperQuery().minWidth.lg.css`
          top: -20px;
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
        margin-top: 20px;
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
      position: absolute;
      top: 10rem;
      left: 1rem;
      width: 92%;
      font-weight: 200;
      font-size: 1.25rem;
      line-height: 1.2;
      z-index: 100;
      opacity:1;
      color: #ffffff;
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



  const Logo = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    z-index: 100;
    opacity:1;
    
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: ${({ theme }) => theme.colors.home_text};
      &:hover {
        color:${({ theme }) => theme.colors.home_text};
      }
    }

    .top__logo {
      position: absolute;
      top: .75rem;
      left: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-grow: 1;
      min-width: 110px;
    }
    
    .top__logo--image {
      cursor: pointer;
      border: none;
      width: 100px;
    }
    .top__logo--text {
      text-align:right;
      font-size: 2.25rem;
      line-height: .875;
      font-weight: 700;
      letter-spacing: -1px;
      margin-right: .5rem;
      ${SuperQuery().minWidth.md.css`
        font-size: 2.25rem;
        letter-spacing: -1.5px;
      `}
  }
  `