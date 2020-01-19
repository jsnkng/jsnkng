import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/elements/Banner'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  return (
    <>
      <Head>
        <title>JSNKNG</title>
      </Head>
      <Header 
        navigation__title='Welcome'
        navigation__subtitle='Nothing'
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />

       <BackgroundOverlay>
        <Banner
          backgroundURL={`/gallery/Mythologies/Sanguine_Miles/image_i.jpg`}
          title='Welcome'
          subtitle=''
          hero={true}
          manageFuture={() => {}}
        />
      </BackgroundOverlay>
      <Footer__Wrapper>
        <Footer themeName={themeName} setThemeName={setThemeName} />
      </Footer__Wrapper>
    </>
  )
}

export default Page

const Content = styled.main`
  
`
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
