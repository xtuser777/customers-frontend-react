import { useContext } from 'react';
import CardTitle from '../../components/shared/card-title';
import FieldsetCard from '../../components/shared/fieldset-card';
import { CustomersContext } from '../../contexts/customers-context';

function Customers() {
  const { data, customers, filter, handleChangeFilter, handleDoFilter } =
    useContext(CustomersContext);
  return (
    <>
      <CardTitle title="Gerenciar Clientes" />
      <FieldsetCard legend="Filtragem de clientes">
        <div className="row">
          <div className="col-sm-10">
            <label htmlFor="filtro">Filtro:</label>
            <input
              type="text"
              name="filtro"
              id="filtro"
              className="form-control input-sm expanded"
              placeholder="Filtrar por nome ou email."
              value={filter}
              onChange={handleChangeFilter}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="filtrar">&nbsp;</label>
            <button
              name="filtrar"
              id="filtrar"
              className="btn btn-sm btn-primary expanded"
              onClick={handleDoFilter}
            >
              Filtrar
            </button>
          </div>
        </div>
      </FieldsetCard>

      <FieldsetCard legend="Clientes cadastrados">
        <table id="customers" className="table table-condensed table-striped table-hover">
          <thead>
            <tr>
              <th className="hidden">ID</th>
              <th style={{ width: '40%' }}>NOME</th>
              <th style={{ width: '16%' }}>CPF</th>
              <th>EMAIL</th>
              <th style={{ width: '2%' }}>&nbsp;</th>
              <th style={{ width: '2%' }}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="hidden">{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.document}</td>
                <td>{customer.email}</td>
                <td>
                  <a
                    role="button"
                    className="glyphicon glyphicon-edit"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="ALTERAR"
                    href="#"
                  ></a>
                </td>
                <td>
                  <a
                    role="button"
                    className="glyphicon glyphicon-trash"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="EXCLUIR"
                    href="#"
                    onClick={async () => {}}
                  ></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FieldsetCard>
    </>
  );
}

export default Customers;
