import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { push as Menu } from 'react-burger-menu'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  

  useEffect(() => {
    forceCheck()
  })
  
  return (
    <>
      <Head>
        <title>JSNKNG</title>
      </Head>
      <Content>
        hekl
      </Content>
    </>
  )
}

export default Page

const Content = styled.div`
 
`