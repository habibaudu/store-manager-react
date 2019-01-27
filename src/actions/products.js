//Action creator

export const fetchAllProduct = () => {
  return function(dispatch) {
     
  const token = localStorage.getItem('token')
  return fetch('https://store-manager2.herokuapp.com/api/v1/products', {
  method: 'GET',
  mode: 'cors',
  headers: {'Content-Type': 'application/json',
  'x-access-token': token,
  pragma: 'no-cache',
  'cache-control': 'no-cache'
  }
  
  }).then((Response) => {
  status = Response.status;
  return Response.json();
  })
  .then((data) => {
  if(status === '200'){
     const img = data.imgArr;
      const data2 = data.rows;
      let count = 0;
      const products =[];
      data2.forEach((product) => {
        
        const { id, productname, price, quantity } = product;
          
                products.push({'item':img[count],id,productname,price,quantity});                                         
                      
        count += 1;
      })
  dispatch(setAllProducts(products))
  }else if(status === '400'){
  
      alert(`Error occured while loading products ,please try again later`);
      window.location = 'index.html';
  }
      
  })
  .catch(err =>console.log(err));
  };
}

function setAllProducts(products) {
  return {
    type: "LOAD_PRODUCTS",
    payload: products
  };
}
  
  
  
  