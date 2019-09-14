import React from 'react';
import classes from './ProductsLayout.module.scss';
import { NavLink } from 'react-router-dom';
const ProductsLayout = () => {
	return (
		<section className={classes.productsLayout}>
			<hr />
			<article className={classes.ProductsHeader}>
				<h1>Products</h1>
				<p>the best quality with best price</p>
				<p>
					DNSH mission is supporting our customers by providing integrated sustainable and profitable products
					and solutions that enable livestock farmers and growers to achieve the best possible results.
				</p>
			</article>
			<article className={classes.products}>
				<figure>
					<img src={require('../../_assets/imgs/Feedadditives2.jpeg')} alt="" />
					<figcaption>
						<h3>Animal Health</h3>
						<div className={classes.bottomProducts}>
							<NavLink className={classes.ServiceBtn} to="/products/animalHealth">
								Read More
							</NavLink>
						</div>
					</figcaption>
				</figure>
				<figure>
					<img src={require('../../_assets/imgs/Primex.jpeg')} alt="" />
					<figcaption>
						<h3>Feed Additives</h3>
						<div className={classes.bottomProducts}>
							<NavLink className={classes.ServiceBtn} to="/products/feedAdditives">
								Read More
							</NavLink>
						</div>
					</figcaption>
				</figure>
				<figure>
					<img src={require('../../_assets/imgs/Animalshealthbio.jpeg')} alt="" />
					<figcaption>
						<h3>Feed solutions</h3>
						<div className={classes.bottomProducts}>
							<NavLink className={classes.ServiceBtn} to="/products/premixes">
								Read More
							</NavLink>
						</div>
					</figcaption>
				</figure>
			</article>
		</section>
	);
};

export default ProductsLayout;
