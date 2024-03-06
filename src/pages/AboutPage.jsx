import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-canter'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
        Welcome to LUXURY DESIGN! We are a passionate team dedicated to bringing style and inspiration to your home through our curated selection of home decoration products.<br></br><br></br>

        At LUXURY DESIGN, we believe that a well-decorated home is a reflection of your personality and a sanctuary that should inspire and uplift you. That's why we carefully handpick each item in our collection, ensuring that it meets our high standards of quality, design, and functionality.<br></br><br></br>

Quality is our top priority. We collaborate with trusted artisans and suppliers who share our commitment to excellence. From stylish furniture to eye-catching décor accessories, every item in our collection is selected for its exceptional craftsmanship and ability to elevate your living space.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
