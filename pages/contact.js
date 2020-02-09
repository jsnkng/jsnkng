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
 
const Content = styled.div`
  ${'' /* padding: 2rem 1rem 2rem 1rem; */}
  color: ${({ theme }) => theme.colors.text }; 
  a {
    ${'' /* color: ${({ theme }) => theme.colors.text }; */}
  color: #ffffff;
    text-decoration: none; 
  }
  a h3 {
    text-decoration: underline;
  }
  h2 {
    margin: 2rem 0 0 0.75rem;
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: -0.1em;
  }
`

const Character = styled.header`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: #ffffff;
  text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};

  a {    
    text-decoration: none;
    text-shadow: none;
  }
  
    

`






const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};
  /* Navigation related, responsive design */
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  ${props => props.vHeight};
    padding: 2rem 1rem 2rem 1rem;
  `}
  .logo {
    z-index: 100;
    margin: -0.5rem 0rem 1rem 0;
    text-decoration: none;
    img {
      border: none;
      width: 90%;
      max-width: 360px;
    }
  }
  .description {
    text-align: center;
    margin: 0;
    width: 100%;
    font-weight: 400;
    line-height: 1.4;
    z-index: 100;
    opacity: 1;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      text-align: left;
    `}
    h2 {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 1.1;
    }
    h3 {
      font-size: 1.125rem;
      font-weight: 200;
    }
    a {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.home_text};
      cursor: pointer;
      border: none;
    }
  }
  .content {
    width: 100%;
    font-weight: 400;
    line-height: 1.4;
    z-index: 100;
    opacity: 1;
    margin-left: 0;
    ${'' /* color:  ${({ theme }) => theme.colors.home_text } !important;  */}
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    
    a {
      display: block;
      font-weight: 700;
      padding: 1rem 1rem 0 1rem;
      color:  ${({ theme }) => theme.colors.home_text } !important; 
      &.xs {
        display: block;
        ${SuperQuery().minWidth.sm.css`
        display: none;
        `}
      }
    }
    p {
      font-size: 1.125rem;
    }
    h3 {
      font-size: 1rem;
    }
    img {
      display: block;
      width: 60vw;
      margin: 1rem auto 1.5rem auto;
      border: 3px solid ${({ theme }) => theme.colors.home_text };
      border-radius: 4px;
      box-shadow: 5px 5px 40px rgba(0,0,0,.8);
      ${SuperQuery().minWidth.sm.css`
        display: none;
      `}
    }
  }

  #webFrame {
    display: block;
    margin: 0 auto;
    width: 60vw;
    height: 80vh;
    max-height: 880px;
    border: 3px solid ${({ theme }) => theme.colors.home_text };
    border-radius: 8px;
    box-shadow: 5px 5px 40px rgba(0,0,0,.8);
   
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