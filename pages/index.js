import React from "react";
import { Product } from "../components";
import {allProductQuery} from "../requests/allProducts";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const Home = ({ products}) => {
  return (
    <>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
      </div>
      <div className="products-container">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
	const client = new ApolloClient({
		uri: 'https://yxroc21k.api.sanity.io/v1/graphql/production/default',
		cache: new InMemoryCache()
	});
	const { data } = await client.query({
		query: allProductQuery
	});
	return {
		props: {
			products: data?.allProduct,
		},
		revalidate: 10,
	};
};

export default Home;
