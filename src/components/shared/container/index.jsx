import { useContext } from 'react';
import { ContainerContext } from '../../../contexts/container-context';
import { Page1 } from '../../../pages/page1';
import { Page2 } from '../../../pages/page2';
import { Home } from '../../../pages/home';
import Customers from '../../../pages/customers';
import CustomersContext from '../../../contexts/customers-context';

const Container = () => {
  //const { contentName } = useContext(ContainerContext);
  const { content } = useContext(ContainerContext);
  return (
    <div className="container">
      {/* {(() => {
        switch (contentName) {
          case 'page1':
            return <Page1 />;
          case 'page2':
            return <Page2 />;
          case 'home':
            return <Home />;
          case 'customers':
            return (
              <CustomersContext>
                <Customers />
              </CustomersContext>
            );
          case 'customer':
            return (

            );
          default:
            return <Home />;
        }
      })()} */}
      {content}
    </div>
  );
};

export default Container;
