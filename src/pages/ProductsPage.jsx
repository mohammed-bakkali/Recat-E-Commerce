import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return <main>
    <PageHero title='product'/>
    <Wrapper className='page'>
      <div className="section- center products">
        <Filters/>
        <div>
          <Sort/>
          <ProductList/>
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }

/* Small */
@media (min-width: 768px) {
  .products {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .products {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .products {
    width: 1170px;
  }
}
`

export default ProductsPage
