import types from './types';

const setAllRecords = (records) => ({
    type:types.LOAD_ALL_RECORD,
    records
  
});

export default { setAllRecords };
