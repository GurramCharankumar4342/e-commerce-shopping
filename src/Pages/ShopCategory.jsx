import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_products,addToCart} = useContext(ShopContext);
  
  const [sortBy, setSortBy] = useState('priceLowToHigh'); 
  const [itemsPerPage] = useState(12); 
  const [currentPage, setCurrentPage] = useState(1);
  

  const filteredProducts = all_products.filter(item => item.category === props.category);
  

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLowToHigh') {
      return a.new_price - b.new_price;
    } else if (sortBy === 'priceHighToLow') {
      return b.new_price - a.new_price;
    } else if (sortBy === 'nameAtoZ') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'nameZtoA') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, sortedProducts.length)}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <select onChange={handleSortChange} value={sortBy} className='select'>
            <option className='options' value="priceLowToHigh">Price: Low to High</option>
            <option className='options' value="priceHighToLow">Price: High to Low</option>
            <option className='options' value="nameAtoZ">Name: A to Z</option>
            <option className='options' value="nameZtoA">Name: Z to A</option>
          </select>
          {/* <img src={dropdown_icon} alt="Sort dropdown icon" /> */}
        </div>
      </div>
      <div className="shopcategory-products">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      {sortedProducts.length > currentPage * itemsPerPage && (
        <div className="shopcategory-loadmore">
          <button onClick={handleLoadMore}>Explore More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;

