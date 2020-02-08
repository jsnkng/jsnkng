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

        <Content>

          <Hero backgroundURL={`/gallery/Mythologies/Musae_in_Deliquium/image_iii.jpg`}> 
            <BackgroundOverlay />
            <Grid__Decorated>
              <Row__Decorated className='reversible'>
                <Col__Decorated xsOffset={1} mdOffset={1} md={5}>
                  <Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}>
                    <a>
                      <h3>Mythologies</h3>
                      <p>borrows strategies from Surrealism’s encounters with automatic writing 
                        in a deliberate effort to create visual art that exceeds conscious determination.</p>
                    </a>
                  </Link>

                  <Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}>
                    <a>
                      <span>View Gallery</span>
                    </a>
                  </Link>
                </Col__Decorated>
              </Row__Decorated>
            </Grid__Decorated>
          </Hero>
          
          <Navigation parentTitle={`Art`} parentLink={{ href: `/art`, as: `/art` }} />

          <Hero backgroundURL={`/gallery/Nature_Morte/2_The_Receptive_0/Nature_Morte_background.jpg`}> 
            <BackgroundOverlay /> 
            <Grid__Decorated>
              <Row__Decorated>
                <Col__Decorated xsOffset={1} xs={10} mdOffset={6} md={5}>
                <Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}>
                  <a>
                    <h3>Nature Morté</h3>
                    <p>inherits from the miniaturized mise-en-scene of painting's still life and scientific
                     illustrations of botanical, entomological, and zoological specimens to produce a catalog of ontologies
                     aptly named after the 64 Hexagrams of the I Ching.</p>
                  </a>
                  </Link>
                  <Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}>
                    <a>
                      <span>View Gallery</span>
                    </a>
                  </Link>
                </Col__Decorated>
              </Row__Decorated>
            </Grid__Decorated>
          </Hero>
          <Hero backgroundURL={`/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image_ii.jpg`}> 
            <BackgroundOverlay />
            <Grid__Decorated>
              <Row__Decorated className='reversible'>
                <Col__Decorated xsOffset={1} xs={10} mdOffset={6} md={5}>
                  <Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}>
                    <a>
                      <h3>Starlight Meadows</h3>
                      <p>tells the story of last patch of farmland at the end of the world where the
                        king, under a spell of amnesia, has abandoned his kingdom and wanders, a beggar. A triumvirate of  
                        cruel pigs appear backed by an army of masked troglodytes and take advantage of the king’s
                        disappearance by waging a terror campaign against the folk of the land. 
                        Only a band of jolly primates hold back the kingdom’s 
                        complete collapse while their leader searches for any means of restoring the king’s memory. 
                        </p>
                    </a>
                  </Link>
                  <Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}>
                    <a>
                      <span>View Gallery</span>
                    </a>
                  </Link>
                </Col__Decorated>
              </Row__Decorated>
            </Grid__Decorated>
          </Hero>

        </Content>

        <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
const Content = styled.div`
`
const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text };
  font-size: 1.25rem;
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    font-size: 1.75rem;
    min-height:  90vh;
    padding: 2rem 1rem 2rem 1rem;
  `}

  a {
    color:#fff; 
    text-decoration: none; 
  }
  a span {
    font-size: 1.25rem;
    display: inline-block;
    padding: 1rem 0 0 0;
    text-decoration: underline;
  }
  h3 {
    font-size: 3rem;
    font-weight: 200;
    letter-spacing: -0.05em;
    line-height: 1.2;
  }
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SuperQuery().minWidth.md.css`
    flex-direction: row;
    justify-content: right;
  `}
  &.reversible {
    flex-direction: column-reverse;
    ${SuperQuery().minWidth.md.css`
      flex-direction: row;
      justify-content: left;
    `}
  }
`
const Col__Decorated = styled(Col)`
  position: relative;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
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
  background-color: ${({ theme }) => theme.colors.image_overlay_light };
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`
