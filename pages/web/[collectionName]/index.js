import SuperQuery from '@themgoncalves/super-query'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { forceCheck } from 'react-lazyload'
import absoluteUrl from 'next-absolute-url'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import Footer from '../../../components/footer'
import Header from '../../../components/header'
import Banner from '../../../components/elements/banner_alt'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import Iframe from 'react-iframe'

const Page = ({ collectionTitle, collectionName, disciplineTitle, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {

  const windowDimension = useWindowDimensions()
  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(images.length)))

  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

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
          heroBackground={`${images[heroIdx].path}/image_ii.jpg`}
          heroHeight={`77vh`}
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
              <Col__Decorated className='image__thumb' xs={12} sm={12} md={4} lg={4} key={index+item.path}>
                <Banner
                    headline={``}
                    title={item.title}
                    subtitle={item.year}
                    name={item.name}
                    backgroundURL={`${item.path}/image_i.jpg`}
                    backgroundHoverURL={`${item.path}/image_i.jpg`}
                    link={{ 
                      href: `/web/[collectionName]/image/[imageName]`, 
                      as:`/web/${collectionName}/image/${item.name}`
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
  const collectionResult = await fetch(`${origin}/api/web/${collectionName}`)
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
    height: 50vw;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 33.33vw;
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
    color: ${({ theme }) => theme.colors.text} !important; 
`

