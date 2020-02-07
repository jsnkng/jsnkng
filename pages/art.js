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

          <Hero vHeight={'90vh'} backgroundURL={`/gallery/Mythologies/Musae_in_Deliquium/image_iii.jpg`}> 
            <BackgroundOverlay />
            <Grid__Decorated>
              <Row__Decorated className='reversible'>
                <Col__Decorated xs={12} md={5}>
                  <Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}>
                    <a>
                      <h3>Mythologies</h3>
                      <p>Mythologies borrows strategies from Surrealism’s encounters with automatic writing 
                        in a deliberate effort to create visual art that exceeds conscious determination.</p>
                    </a>
                  </Link>

                  <Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}>
                    <a>
                      <span>View Gallery</span>
                    </a>
                  </Link>
                </Col__Decorated>
                <Col__Decorated xs={12} mdOffset={1} md={6}>
                  <Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}>
                    <a>
                      <ResponsiveImage backgroundURL={`/gallery/Mythologies/Musae_in_Deliquium/image.jpg`} />
                    </a>
                  </Link>
                </Col__Decorated>
              </Row__Decorated>
            </Grid__Decorated>
          </Hero>
          
          <Navigation parentTitle={`Art`} parentLink={{ href: `/art`, as: `/art` }} />

          <Character backgroundURL={`/gallery/Nature_Morte/2_The_Receptive_0/Nature_Morte_background.jpg`}> 
            <BackgroundOverlay /> 
            <Grid__Decorated>
              <Row__Decorated>
                <Col__Decorated xs={12} md={6}>
                  <Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}>
                    <a>
                      <ResponsiveImage backgroundURL={`/gallery/Nature_Morte/2_The_Receptive_0/image.jpg`} />
                    </a>
                  </Link>
                </Col__Decorated>
                <Col__Decorated xs={12} mdOffset={1} md={5}>
                <Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}>
                  <a>
                    <h3>Nature Morté</h3>
                    <p>Nature Morté meshes the aesthetic sensibility of the painter's still life 
                      with categorical illustrations of botanical, entomological, 
                      and zoological specimens to produce an ontological catalog of time and beauty.</p>
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
          </Character>
          <Character backgroundURL={`/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image_ii.jpg`}> 
            <BackgroundOverlay />
            <Grid__Decorated>
              <Row__Decorated className='reversible'>
                <Col__Decorated xs={12} md={5}>
                  <Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}>
                    <a>
                      <h3>Starlight Meadows</h3>
                      <p>Starlight Meadows tells the story of last patch of farmland at the end of the world. 
                        An amnesiac king abandoned his kingdom and wanders the land begging. A triumvirate of  
                        pigs arrive with army of troglodytes and  wage a campaign of terror on 
                        the sheep of the land. Only a band of anarchic primates hold back the kingdom’s 
                        complete collapse while their leader searches for the means of restoring memory and
                        the forward flow of time.</p>
                    </a>
                  </Link>
                  <Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}>
                    <a>
                      <span>View Gallery</span>
                    </a>
                  </Link>
                </Col__Decorated>
                <Col__Decorated xs={12} mdOffset={1} md={6}>
                  <Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}>
                    <a>
                      <ResponsiveImage backgroundURL={`/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image.jpg`} />
                    </a>
                  </Link>
                </Col__Decorated>
              </Row__Decorated>
            </Grid__Decorated>
          </Character>

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
  z-index: 100; 
  cursor: pointer;
  width: 90vw;
  height: 90vw;

  ${SuperQuery().minWidth.md.css`
    width: 100%;
    height: 80vh;
  `}
`
const Content = styled.div`
  a {
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
  }
`
const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 750px;
  padding: 7rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: #ffffff;
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    min-height:  ${props => props.vHeight};
    padding: 2rem 1rem 2rem 1rem;
  `}

  a {
    color:#fff; 
  }
`
const Character = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 750px;
  padding: 2rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: #ffffff;
  text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};

  a {
    color:#fff; 
  }
  h3 {
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
  background-color: ${({ theme }) => theme.colors.image_overlay_opaque };
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`
