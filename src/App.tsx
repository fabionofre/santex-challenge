import { useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

import { useQuery, gql } from '@apollo/client';

const ACTIVE_ORDERS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options)  {
      items{
        id
        name
        slug
        description
        slug
        assets {
          id
          source
          type
          preview
        }
        variants {
          id
          name
          price
          currencyCode
          priceWithTax
          stockLevel
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ACTIVE_ORDERS, {
    variables: {
      options: { take: 12 }
    }
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{`Error! ${error.message}`}</h1>;

  console.log('data', data);

  return (
    <>
      <Header></Header>
      <div className="main-container">
        <video src="background-sam.mp4" loop muted playsInline autoPlay className="video-container"></video>
        <ProductList></ProductList>
      </div>
    </>
  );
}

export default App;
