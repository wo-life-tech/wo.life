import React from 'react';

import Layout from '../components/common/layout/layout';
import SEO from '../components/common/layout/seo';
import Navigation from '../components/common/navigation/navigation';

import Header from '../components/sections/header';
import Features from '../components/sections/features';
import Footer from '../components/sections/footer';
import AboutUs from '../components/sections/about-us';
import Shop from '../components/sections/shop';
import Endorse from '../components/sections/endorse';
import Faq from '../components/sections/faq';
import ContactForm from '../components/sections/ContactForm';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Navigation />
		<Header />
		<AboutUs />
		<Shop />
		<Endorse />
		<Features />
		<Faq />
		<ContactForm />
		<Footer />
	</Layout>
);

export default IndexPage;
