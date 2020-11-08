import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cart from './Cart'
import Products from './Products';

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

function App() {
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      // const response = await fetch('http://localhost:4000/products');
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'GET',
        // headers: headers,
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }

    fetchProducts();
  }, [])

  const addToCart = async(newProductId) => {
    const body = {
      productId: newProductId
    }
    
    if(!cartId){
      const response = await fetch('http://localhost:3000/api/carts', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      })
      const data = await response.json();
      console.log(data);
      setCartId(data.id);
      setCartItems(data.products);
    } else {
      const response = await fetch(`http://localhost:3000/api/carts/${cartId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(body)
      })
      const data = await response.json();
      setCartItems(data.products)
      console.log(data);
    }
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Buy our products</h1>
        </header>
        <main>
          <section>
            <Link to='/cart'>View your cart</Link>
            <Route exact path="/" render={() => <Products products={products} addToCart={addToCart} />} />
          </section>
          {/* http://localhost:3000/cart */}
          {/* <Route path="/cart" component={Cart} /> */}
            <Route path="/cart" render={() => <Cart cartItems={cartItems} />} />
            {/* <Route path="/cart"> <Cart cartItems={cartItems} /> </Route> */}
            
        </main>
      </div>
    </Router>
    
  );
}

export default App;
