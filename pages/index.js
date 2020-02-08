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
          <title>JSNKNG</title>
        </Head>
        <Hero backgroundURL={``}
          vHeight={'85vh'}> 
          <Grid>
            <Row__Decorated>
              <Col__Decorated xsOffset={1} xs={21}>
                <p>Hello. I’m <strong><Link href='/about' scroll={false}><a>Jason King</a></Link>.</strong> 
                {` `}I'm a <strong>Creative Technologist,</strong> a <strong><Link href='/projects/Web' scroll={false}><a>Web & Mobile Developer</a></Link>, 
                {` `}<Link href='/design' scroll={false}><a> Graphic Designer</a></Link>, </strong> and
                {` `}<strong><Link href='/collections/Art' scroll={false}><a> Visual Artist</a></Link>, </strong> 
                {` `}living in <strong>Princeton, NJ.</strong></p>
                <br />
                <p>I’m part of <strong><a href='https://adcycle.co' target='_blank' rel='noopener'>AdCycle</a>,</strong> 
                {` `} a boutique <strong>digital marketing agency</strong> 
                {` `} and provide <strong> web & mobile development support</strong> through 
                {` `} <strong><a href='https://cab408.com' target='_blank' rel='noopener'>CAB408</a>.</strong></p>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
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
  padding: 2rem 0 0 0;
  width: 100%;
  min-height: 90vh;
  max-height: 100%;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};

  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  ${props => props.vHeight};
    padding: 0 1rem 0 1rem;
  `}
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.875rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.5rem;
    `}
  }
  p {
    font-size: 1.375rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.25rem;
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
