import { createContext, useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

export const CustomersContext = createContext({
  data: [],
  customers: [],
  filter: '',
  handleChangeFilter: (e) => {},
  handleDoFilter: () => {},
});

function CustomersProvider({ children }) {
  const [data, setData] = useState([]);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Teste1', document: '111.111.111-11', email: 'teste1@mail.com' },
  ]);

  const [filter, setFilter] = useState('');

  const filterData = () => {
    setCustomers([]);
  };

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDoFilter = () => {
    filterData();
  };

  return (
    <CustomersContext.Provider
      value={{
        data,
        customers,
        filter,
        handleChangeFilter,
        handleDoFilter,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
}

CustomersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomersProvider;
