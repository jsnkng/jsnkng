import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  
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
          <title>Jason King: Developer/Designer/Artist</title>
          <meta property="og:title" content="Jason King: Developer/Designer/Artist" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jsnkng.com" />
          <meta property="og:image" content="https://jsnkng.com/jsnkng_256_invert.png" />
        </Head>
        <Hero backgroundURL={``}> 
          <Grid>
            <Row__Decorated>
              <Col__Decorated xsOffset={1} xs={22}>
                <br /><p>Hello. I’m <strong><Link href='/about' as='/about' scroll={false}><a>Jason King</a></Link>.</strong> 
                {` `}I'm a <strong>Creative Technologist,</strong> a <strong><Link href='/projects/[projectType]' as='/projects/Web' scroll={false}><a>Web & Mobile Developer</a></Link>, 
                {` `}<Link href='/collections/[collectionType]' as='/collections/Design' scroll={false}><a> Graphic Designer</a></Link>, </strong> and
                {` `}<strong><Link href='/collections/[collectionType]' as='/collections/Art' scroll={false}><a> Visual Artist</a></Link>, </strong> 
                {` `}living in <strong>Princeton, NJ.</strong></p>
                <br />
                <p>I’m part of <strong><a href='https://adcycle.co' target='_blank' rel='noopener'>AdCycle</a>,</strong> 
                {` `} a boutique <strong>digital marketing agency</strong> 
                {` `} and provide <strong> web & mobile development support</strong> through 
                {` `} <strong><a href='https://cab408.com' target='_blank' rel='noopener'>CAB408</a>.</strong></p>
                <br />
                <p>If you want to <strong>see what I’ve been up to,</strong> check out my web app 
                {` `}<strong><Link href='/projects/[projectType]/project/[projectName]' as='/projects/Web/project/National_Park_Guides' scroll={false}><a>National Park Guides</a></Link></strong>
                {` `} or my art series <strong><Link href='/collections/[collectionType]/collection/[collectionName]' as='/collections/Art/collection/Mythologies' scroll={false}><a>Mythologies.</a></Link></strong></p>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Navigation parentTitle={``} parentLink={{ href: `/`, as: `/` }} />
        
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
  padding: 5rem 0 5rem 0;
  width: 100%;
  min-height:  100vh;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};

  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    min-height: 90vh;
    height:  90vh;
  `}
  
  p {
    font-size: 1.5rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    ${SuperQuery().maxWidth.of('360px').css`
      font-size: 1.125rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: 2rem;
    `}

    strong {
      font-weight: 700;
    }
    a {
      color: ${({ theme }) => theme.colors.color_two};
      border-bottom: 2px dotted;
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.colors.color_one};
      }
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
