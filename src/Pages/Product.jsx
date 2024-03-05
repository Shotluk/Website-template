import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        // Ensure the response has the "products" key
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('API response does not contain the "products" key:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  

  // Calculate indexes of products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to get top 5 rated products
  const getTopRatedProducts = () => {
    const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
    return sortedProducts.slice(0, 5);
  };

  const topRatedProducts = getTopRatedProducts();

  // Data for the horizontal bar chart
  const barChartData = {
    series: [{
      data: topRatedProducts.map(product => product.rating),
    }],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: topRatedProducts.map(product => product.title),
      min: 4.5,
      max: 5,
    },
  };

  // Data for the donut chart based on stock values
  const stockValues = currentProducts.map(product => product.stock);
  const donutChartData = {
    series: stockValues,
    labels: currentProducts.map(product => product.title),
  };

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2>Product Table</h2>
      <div className="mb-3">
        <label htmlFor="entriesPerPage" className="form-label me-2">
          Show entries per page:
        </label>
        <select
          id="entriesPerPage"
          className="form-select"
          value={productsPerPage}
          onChange={e => setProductsPerPage(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <table className="table table-hover">
        <thead>
          <tr className='table table-dark'>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(number + 1)} className="page-link">
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ApexCharts Horizontal Bar Graph */}
      <div className="mt-3">
        <h3>Top 5 Rated Products Chart:</h3>
        <ApexCharts options={barChartData} series={barChartData.series} type="bar" height={350} />
      </div>

      {/* ApexCharts Donut Chart */}
      <div className="mt-3">
        <h3>Product Distribution Chart (Based on Stock):</h3>
        <ApexCharts options={donutChartData} series={donutChartData.series} type="donut" height={350} />
      </div>
    </div>
  );
}

export default ProductTable;
