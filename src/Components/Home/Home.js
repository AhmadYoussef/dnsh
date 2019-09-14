import React from 'react';
import classes from './Home.module.scss';
import ServiceLayout from './ServicesLayout/ServicesLayout';
import ProductsLayout from './ProductsLayout/ProductsLayout';
import PartnerLayout from './PartnerLayout/PartnerLayout';
import video from '../_assets/imgs/backgroundVideo.mov';
const Home = (props) => {
	return (
		<main className={classes.home}>
			<section className={classes.HeadImg}>
				<video loop muted autoPlay>
					<source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you
					upgrade your browser.
				</video>
			</section>
			<ProductsLayout />
			<section className={classes.servicesContainer}>
				<ServiceLayout />
			</section>
			<PartnerLayout />
		</main>
	);
};

export default Home;
