import React, { useState } from 'react';
import ProductHero from '../components/sections/ProductHero';
import ProductCatalog from '../components/product/ProductCatalog';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <ProductHero isSearching={searchTerm.length > 0} />
            <ProductCatalog searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </>
    );
};

export default Products;
