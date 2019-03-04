import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const API_URL = process.env.API_URL;
const {  setAllProducts } = actions;
const url = `${API_URL}products`;

const fetchAllProducts = () => dispatch => {
  const token = localStorage.getItem('token');
  const defaultOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  return axios
    .get(url,defaultOptions)
    .then(({ data }) => {
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
    })
    .catch(({ response }) => {
      toast.error(response.error, {
        hideProgressBar: true,
      });
    });
};

export default fetchAllProducts;
