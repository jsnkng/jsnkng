import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
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
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };
  const handleContactFormPost = () => {
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

        <Hero backgroundURL={``}
          vHeight={'90vh'}> 
          <BackgroundOverlay />
          <Grid>
          <Row__Decorated>
          
              <Col__Decorated xs={24} sm={12} md={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="senderName" ref={register({ required: true, maxLength: 80  })} /> {/* register an input */}
                {errors.senderName && 'Please tell us your name.'}
          
                <input name="senderEmail" 
                  ref={register({ 
                    required: true, 
                    maxLength: 80, 
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                  })} 
                />
                {errors.senderEmail && 'Please provide your return email address.'}
                
                <input name="senderPhone" ref={register({ required: true, maxLength: 15, minLength: 8 })} />
                {errors.senderPhone && 'Please provide the best phone number to reach you by.'}
          
                <textarea name="senderMessage" ref={register({ required: true, maxLength: 480  })} ></textarea>
                {errors.senderMessage && 'Please include a message. How can we help you?'}

                <input type="submit" />
              </form>
      
              
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
  background: ${({ theme }) => theme.colors.image_overlay_darkgradient };
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`