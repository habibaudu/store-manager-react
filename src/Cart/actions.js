import types from './types';

const setSalesRecord = (salesState) => ({
    type:types.MAKE_SALES,
    salesState
});

const setSalesError = (salesError) => ({
  type:types.MAKE_SALES_ERROR,
  salesError
});




export default { setSalesRecord, setSalesError };
