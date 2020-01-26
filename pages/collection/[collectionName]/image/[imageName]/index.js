import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'
import Banner from '../../../../../components/elements/banner'
import Hero from '../../../../../components/elements/hero'

const Page = ({ collectionTitle, collectionName, imageName, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  // const [imageName, setImageName] = useState(router.query.imageName)
  const [image] = images.filter(image => image.name === imageName )
  const [verticalHeight, setVerticalHeight] = useState(Number(image.ratio.split(':')[1])/Number(image.ratio.split(':')[0])*100)
  
  // const ratio = images.filter(image => image.name === imageName )
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])
  
  useEffect(() => {
    forceCheck()
  })
  if (!loaded) {
    console.log('not loaded')
    return null
  } else {
    console.log(' loaded')
    return (
    <>
    <Head>
      <title>JSNKNG : {collectionName} : {imageName}</title>
    </Head>
    <Content>
        <Header 
          heroBackground={`/gallery/${collectionName}/${imageName}/image_ii.jpg`}
          heroHeight='77vh'
          heroTitle={image.title} 
          // heroSubtitle={image.title} 
          parentTitle={collectionTitle}
          parentLink={{
            href: `/collection/[collectionName]/`, 
            as: `/collection/${collectionName}/` 
          }}
        />
        <Grid fluid={true}>
          <Row__Decorated>
            <Col__Decorated xs={12}>
              <LazyLoad offset={100}>
                <ResponsiveImage verticalHeight={verticalHeight} backgroundURL={`/gallery/${collectionName}/${imageName}/image.jpg`} />
                <div className='item__details'>
                  <p>{image.title}</p> 
                  <p>{image.year}</p>
                  <p>{image.tags}</p>
                  <a href={`${process.env.SHOP_URL}${image.name.toLowerCase().replace(/_/g, '-')}`}>Shop {image.title} Collection</a>
                </div>
              </LazyLoad>
            </Col__Decorated>
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
  const { collectionName, imageName } = query
  const { origin }  = absoluteUrl(req)
  const collectionResult = await fetch(`${origin}/api/collection/${collectionName}`)
  const result = await collectionResult.json()
  result.imageName = imageName
  result.collectionName = collectionName
  return result
}


const Content = styled.main`
  .image {
    margin: 0;
  }
  .image__primary {
      min-height: 40vh;
    img {
      width: 100%;
    }
  }
  .image__enlargements {
    margin: 0;
    padding: 0 .5rem;
  }
  .image__enlarged {
    div {
      margin: .25rem;
      width: width: 100%;
      height: 97vw;
      ${SuperQuery().minWidth.sm.css`
        height: 49vw;
      `}
      ${SuperQuery().minWidth.md.css`
        height: 25vw;
      `}
    }
  }

  .item__details {
    margin: 1rem;
  }
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  ${'' /* background-color: ${ ({ theme }) => theme.colors.image_overlay_light }; */}
`

const ResponsiveImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundURL});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(${props => props.verticalHeight}vw - 2rem); 
  padding: 1rem;
  margin: 1rem 0;
  z-index: 10;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

const EnlargedImages = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 50vw;
  margin: 0;
  z-index: 10;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
