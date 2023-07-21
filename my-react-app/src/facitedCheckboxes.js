import "./facitedCheckboxes.css";
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Cards from './itemPreview';


function FacitedCheckboxes({ items, brands }) {
  const [selectedItems, setSelectedItems] = useState(items);
  const [selectedBrands, setSelectedBrands] = useState(brands);

  // Function to handle search based on selected brands
  function handleSearch(selectedBrands) {
    const newItems = items.filter((item) =>
      selectedBrands.includes(item.brand)
    );

    return newItems;
  };

  // Function to handle brand checkbox changes
  function handleBrandChange(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBrands((selectedBrands) => {
      const updatedBrands = isChecked
        ? [...selectedBrands, value]
        : selectedBrands.filter((brand) => brand !== value);

      const newItems = handleSearch(updatedBrands);
      setSelectedItems(newItems);

      return updatedBrands;
    });
  };

  return (
    <Form>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <h2>Select Brand</h2>
            {brands.map((brand) => (
              <div key={brand} className="wrapper">
                <Form.Check
                  label={brand}
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={handleBrandChange}
                />
              </div>
            ))}
          </div>
          <div className="col-10 overflow-scroll item-wrapper">
            {selectedItems.map((item) => (
              <div key={item.id} className='item-cards'>
                <Cards
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  rating={item.rating}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Form>
  );
}

export default FacitedCheckboxes;
