import { createContext, useState, ChangeEvent, useContext } from 'react';
import PropTypes from 'prop-types';

import { ContainerContext } from './container-context';
import Customer from '../pages/customer';
import FormIndividualPersonContext from './form-individual-person-context';
import FormAddressContext from './form-address-context';
import FormContactProvider from './form-contact-context';

export const CustomersContext = createContext({
  data: [],
  customers: [],
  filter: '',
  orderBy: '1',
  handleChangeFilter: (e) => {},
  handleChangeOrderBy: (e) => {},
  handleDoFilter: () => {},
  handleAddCustomer: () => {},
});

function CustomersProvider({ children }) {
  const { changeContent } = useContext(ContainerContext);
  const [data, setData] = useState([]);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Teste1', document: '111.111.111-11', email: 'teste1@mail.com' },
  ]);

  const [filter, setFilter] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const filterData = () => {
    setCustomers([]);
  };

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  /** @param {ChangeEvent<HTMLSelectElement>} e */
  const handleChangeOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  const handleDoFilter = () => {
    filterData();
  };

  const handleAddCustomer = () => {
    console.log('teste');
    changeContent(
      <FormContactProvider>
        <FormAddressContext>
          <FormIndividualPersonContext>
            <Customer />
          </FormIndividualPersonContext>
        </FormAddressContext>
      </FormContactProvider>,
    );
  };

  return (
    <CustomersContext.Provider
      value={{
        data,
        customers,
        filter,
        orderBy,
        handleChangeFilter,
        handleChangeOrderBy,
        handleDoFilter,
        handleAddCustomer,
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
