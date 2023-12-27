import { useContext } from 'react';
import { ContainerContext } from '../../../contexts/container-context';

const Header = () => {
  const { changeContent } = useContext(ContainerContext);
  return (
    <header>
      <nav className="navbar navbar-fixed-top navbar-default navbar-padding">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="#" onClick={() => changeContent('home')}>
              Customers APP
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a className="font-navbar" href="#" onClick={() => changeContent('home')}>
                  Início
                </a>
              </li>

              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gerenciar <span className="caret"></span>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a href="#" onClick={() => changeContent('page1')}>
                      Página 1
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeContent('page2')}>
                      Pagina 2
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeContent('customers')}>
                      Clientes
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/representacoes/help/ManualdoUsuárioSCR.html" target="_blank">
                  Ajuda
                </a>
              </li>

              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  USER
                  <span className="caret"></span>
                </a>

                <ul className="dropdown-menu">
                  <li className="dropdown-header">Configurações</li>
                  <li>
                    <a href="/representacoes/configuracao/parametrizacao">Parametrização</a>
                  </li>
                  <li>
                    <a href="/representacoes/configuracao/dados">Meus Dados</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">Sair</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
