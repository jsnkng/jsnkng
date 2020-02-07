import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

const Page = ({ collectionTitle, collectionName, disciplineTitle, aboutCollection, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [showModal, setShowModal] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
 
  const windowDimension = useWindowDimensions()

  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(images.length)))

  /* Create a copy of data  and remove the hero item from it */
  const pictures = [ ...images ]
  // pictures.splice(heroIdx,1)

  const modalShow = () => {
    showModal || setShowModal(true)
    showBackground || setShowBackground(true)
    document.body.style.overflow = 'hidden'
  }
  const modalHide = () => {
    setShowModal(false)
    setShowBackground(false)
    document.body.style.overflow = 'auto'
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
      <Content>
        <BackgroundOverlay 
          className={showBackground && 'showBackground'}
          onClick={modalHide} 
        >
        <Modal className={showModal && 'showModal'}>
          <div className='content' dangerouslySetInnerHTML={{__html:aboutCollection}}></div>
        </Modal>
        </BackgroundOverlay>
        <Header 
          heroBackground={`${images[heroIdx].path}/image_i.jpg`}
          heroHeight={`100vh`}
          heroTitle={collectionTitle} 
          heroSubtitle={``}
          heroDescription={aboutCollection}
          parentTitle={disciplineTitle}
          parentLink={{ href: `/art`, as: `/art` }}
        />
        {/* <ModalButton><button onClick={modalShow}>About {collectionTitle}</button></ModalButton> */}
        <Grid__Decorated >
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
          </Grid__Decorated>
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

const Grid__Decorated = styled(Grid)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`

const ModalButton = styled.div`
  position: absolute;
  text-align: center;
  top: 60vh;
  width: 100%;
  z-index:1000;
  button {
    font-size: 1.25rem;
    padding: 0.75rem;
    width: 25vw;
    min-width: 300px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.home_text_shadow };
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.home_text };
    background: ${({ theme }) => theme.colors.image_overlay_light };
  }
`
const Modal = styled.div`
  display: none;
  height: 90vh;
  width: 90vw;
  max-height: 800px;
  max-width: 640px;
  z-index: 1200;
  opacity: 0;
  overflow: auto;
  background-color: rgba(255,255,255,0.8);
  &.content {
  }
  &.showModal {
    display: block;
    opacity: 1;
  }
`

const BackgroundOverlay = styled.div`
  display: none; 
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1100;
  opacity: 0;
  background-color: rgba(0,0,0,0.8);
  background-image: url(${props => props.backgroundURL});
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  &.showBackground {
    display: flex;
    opacity: 1;
    background-color: rgba(0,0,0,0.8);
  }
`