import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import SuperQuery from '@themgoncalves/super-query'
import styled from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Element = ({ right, isMenuOpen, handleMenuStateChange, className }) => {
  return (
    <Menu__Wrapper className={className}>
      <Menu 
        right={right}
        isOpen={isMenuOpen}
        onStateChange={handleMenuStateChange}
        outerContainerId={'outer__wrapper'}
        pageWrapId={'inner__wrapper'}>
        
        {/* <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}> */}

        
          <span>Dev</span>
          <ul className='navigation__links'>
            <li><Link href='/natparguides_dev'><a>National Park Guides</a></Link></li>
            {/* <li>2017 — <Link href='/pkd'><a>Disease Info Site</a></Link></li>
            <li>2017 — <Link href='/veeva'><a>Sales Rep IVA</a></Link></li>
            <li>2016 — <Link href='/naftin'><a>Patient/HCP Site</a></Link></li>
            <li>2016 — <Link href='/ihateseizures'><a>Patient Info Site</a></Link></li>
            <li>2015 — <Link href='/actelion'><a>HCP Hybrid Mobile</a></Link></li> */}
          </ul>

          <span>UX/UI</span>
          <ul className='navigation__links'>
            <li><Link href='/natparguides'><a>National Park Guides</a></Link></li>
            <li><Link href='/halterscycles'><a>Halter’s Cycles</a></Link></li>
            {/* <li>2019 — <Link href='/atkinscre'><a>Atkins CRE</a></Link></li>
            <li>2019 — <Link href='/adcycle'><a>AdCycle</a></Link></li>
            <li>2018 — <Link href='/hjadvisors'><a>Hugh Johnson Advisors</a></Link></li> */}
          </ul>

          <span>Art</span>
          <ul className='navigation__links'>
            <li><Link href='/collection/[collectionName]/' as='/collection/Mythologies/'><a>Mythologies</a></Link></li>
            <li><Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/'><a>Nature Morté</a></Link></li>
            <li><Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/'><a>Starlight Meadows</a></Link></li>
          </ul>
       

          {/* <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Art</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className='navigation__links'>
                <li><Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}><a>Mythologies</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}><a>Nature Morté</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}><a>Starlight Meadows</a></Link></li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem> */}

          {/* <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Web</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className='navigation__links'>
                <li><Link href='/collection/[collectionName]/' as='/collection/National_Park_Guides/' scroll={false}><a>National Park Guides</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Halters_Cycles/' scroll={false}><a>Halter’s Cycles</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Hugh_Johnson_Advisors/' scroll={false}><a>Hugh Johnson Advisors</a></Link></li>
                <li><Link href='/web/[webName]/' as='/web/PXL8N/' scroll={false}><a>PXL8N</a></Link></li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Code</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className='navigation__links'>
                <li><Link href='/collection/[collectionName]/' as='/collection/PWA_API_Full_Stack/' scroll={false}><a>PWA API/Full Stack</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Pharma_API_Backend/' scroll={false}><a>Pharma API/Backend</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Pharma_API_Frontend/' scroll={false}><a>Pharma API/Frontend</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/Veeva_Hybrid_iPad_App/' scroll={false}><a>Hybrid iPad App</a></Link></li>
                <li><Link href='/collection/[collectionName]/' as='/collection/PXL8N/' scroll={false}><a>Hybrid Mobile App</a></Link></li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem> */}
          {/* </Accordion> */}

    </Menu> 
  </Menu__Wrapper>
  )
}

export default Element

const Menu__Wrapper = styled.div`
  .navigation__links {
    outline: none;
    border: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;

    ${SuperQuery().minWidth.lg.css`
      font-size: 1.25rem;
    `}
    li {
      cursor: pointer;
      color: ${ ({ theme }) => theme.colors.color_two};
      padding: 0.125rem 0 0 0;
      a {
        text-decoration: none;
        color: ${ ({ theme }) => theme.colors.color_two};
      }
    }
  }
span {
  outline: none;
  font-size: 1.5rem;
  color: ${ ({ theme }) => theme.colors.text};
}
span.bm-item {
  margin-top: 1rem;
}
.accordion {
    border: none;
    outline: none;
    padding: 0;
  }
  .accordion__item + .accordion__item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
  }
  .accordion__button {
    color: ${({ theme }) => theme.colors.color_one};
    font-size: 1.75rem;
    text-indent: 0.5rem;
    padding:  1rem 0 0.5rem 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
    outline: 0;
    cursor: pointer;
    span {
      margin-block-end:0px;
      margin-block-start:0px;
      margin-bottom:0px;
      margin-inline-end:0px;
      margin-inline-start:0px;
      margin-left:-.5rem;
      margin-right:0px;
      margin-top:0px;
    }
  }
  .accordion__button:hover {
    color: ${({ theme }) => theme.colors.color_two};
  }
  .accordion__button:before {
    display: inline-block;
    float: left;
    content: '';
    height: .75rem;
    width: .75rem;
    margin: .75rem .5rem 0 -1.5rem;

    border-bottom: 3px solid currentColor;
    border-right: 3px solid currentColor;
    transform: rotate(-45deg);
  }
  .accordion__button[aria-expanded='true'],
  .accordion__button[aria-selected='true'] {
    color: ${({ theme }) => theme.colors.color_two};
  }
  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
  }
  .accordion__panel {
    animation: fadein 0.35s ease-in;
    ${'' /* border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground}; */}
  }
  .accordion__panel[attr=hidden] {
  }
  `
