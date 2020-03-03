import React from 'react';

import './Categories-page-container.css';

import CategoriesCarousel from '../components/categories-carousel';
import CategoriesNav from '../components/categories-nav';

const CategoriesPageContainer = ({ catalog }) => (
    <div className="categories">
        <CategoriesNav catalog={catalog} />
        <CategoriesCarousel image={`${catalog}.jpg`} />
        <CategoriesCarousel image={`${catalog}.jpg`} />
        <CategoriesCarousel image={`${catalog}.jpg`} />
    </div>
);

export default CategoriesPageContainer;
