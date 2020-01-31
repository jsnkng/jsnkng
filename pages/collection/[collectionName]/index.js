import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Banner from '../../../components/elements/banner'

const Page = ({ collectionTitle, collectionName, disciplineTitle, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {

  const windowDimension = useWindowDimensions()

  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(images.length)))

  /* Create a copy of data  and remove the hero item from it */
  const pictures = [ ...images ]
  // pictures.splice(heroIdx,1)

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
        <Header 
          heroBackground={`${images[heroIdx].path}/image_i.jpg`}
          heroHeight={`90vh`}
          heroTitle={collectionTitle} 
          heroSubtitle={``}
          parentTitle={disciplineTitle}
          parentLink={{ href: `/`, as: `/` }}
        />
        <Grid fluid={true}>
          <Row__Decorated>
            {
            pictures.slice(0).map((item, index) => {
              return (
              <Col__Decorated className='image__thumb' xs={12} sm={12} md={4} lg={3} key={index+item.path}>
                <Banner
                    headline={``}
                    title={item.title}
                    subtitle={item.year}
                    name={item.name}
                    backgroundURL={`${item.path}/image.jpg`}
                    backgroundHoverURL={`${item.path}/image_i.jpg`}
                    link={{ 
                      href: `/collection/[collectionName]/image/[imageName]`, 
                      as:`/collection/${collectionName}/image/${item.name}`
                    }}
                    windowDimension={windowDimension}
                  />
              </Col__Decorated>
              )
            })
            }
            </Row__Decorated>
          </Grid>
        </Content>
      <Footer__Wrapper>
        <Footer themeName={themeName} setThemeName={setThemeName} />
      </Footer__Wrapper>
    </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page

Page.getInitialProps = async ({ req, query }) => {
  const { collectionName } = query
  const { origin }  = absoluteUrl(req)
  const collectionResult = await fetch(`${origin}/api/collection/${collectionName}`)
  const result = await collectionResult.json()
  result.collectionName = collectionName
  return result
}


const Content = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;

.image__thumb {
  height: 100vw;
  position: relative;

  ${SuperQuery().minWidth.md.css`
    height: 33.33vw;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 25vw;
  `}
}
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  width: 100%;
  margin: 0;
  padding: 0;
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
