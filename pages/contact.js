import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../components/footer'
import Navigation from '../components/navigation'



const Page = ({ origin, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  const [sendMessageSuccess, setSendMessageSuccess] = useState(null)
  
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  
  const onSubmit = (data, e) => {
    fetch(`${origin}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then( r => {
      if (r.status == 200) {
        e.target.reset()
        setSendMessageSuccess(true)
      } else {
        setSendMessageSuccess(false)
      }
    })
  };
  
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

        <Hero backgroundURL={``}> 
          {
            sendMessageSuccess && 
            <div>
              <h1>Thanks for contacting me.</h1>
              <h2>I will get back to you as soon as I can.</h2>
              <p><Link href='/' as='/'><a>Return to Home</a></Link></p>
            </div>
          }
          {
            sendMessageSuccess ||
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
            
              <Row__Decorated>
                <Col__Decorated xs={24} smOffset={2} sm={20}>
                  <h1>Contact Jason King</h1>
                  <label>
                    Your Name
                    <input name="senderName" ref={register({ required: true, maxLength: 80  })} /> {/* register an input */}
                    {errors.senderName && 'Please tell us your name.'}
                  </label>
                </Col__Decorated>
              </Row__Decorated>

              <Row__Decorated>
                <Col__Decorated xs={24} smOffset={2} sm={9}>
                  <label>
                    Your Email
                    <input name="senderEmail" 
                      ref={register({ 
                        required: true, 
                        maxLength: 80, 
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                      })} 
                    />
                    {errors.senderEmail && 'Please provide your return email address.'}
                  </label>
                </Col__Decorated>
                <Col__Decorated xs={24} smOffset={2} sm={9}>
                  <label>
                      Your Phone Number
                    <input name="senderPhone" ref={register({ required: true, maxLength: 15, minLength: 8 })} />
                    {errors.senderPhone && 'Please provide your phone number.'}
                  </label>
                </Col__Decorated>
              </Row__Decorated>
              <Row__Decorated>
                <Col__Decorated xs={24} smOffset={2} sm={20}>
                  
                  <label>
                      Your Message. What can I do for you?
                    <textarea name="senderMessage" ref={register({ required: true, maxLength: 480  })} ></textarea>
                    {errors.senderMessage && 'Please include a message. How can we help you?'}
                  </label>
                  <input type="submit" value="Send" />
                </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </form>
        }
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />

        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page

Page.getInitialProps = async ({ req, query }) => {
  const { origin }  = absoluteUrl(req)
  const result = {}
  result.origin = origin
  console.log(result)
  return result
}
 

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
  h1 {
    font-size: 2.5rem;
    font-weight: 200;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.text};
    }
  h2 {
    font-size: 1.25rem;
    font-weight: 200;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    font-size: 1.25rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}

    a {
      color: ${({ theme }) => theme.colors.color_two};
      border-bottom: 2px dotted;
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.colors.color_one};
      }
    }
  }
  label {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    margin: 1rem 0;
  }

  input,
  textarea {
    width: 100%;
    font-size: 1.25rem;
    margin: 0.125rem 0;
    padding: 0.5rem;
  }
  textarea {
    height: 10rem;
  }

  input[type="submit"] {
    font-size: 1.25rem ;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.offbackground};
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