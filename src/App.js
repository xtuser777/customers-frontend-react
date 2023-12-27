import Container from './components/shared/container';
import Header from './components/shared/header';
import ContainerContext from './contexts/container-context';

function App() {
  return (
    <ContainerContext>
      <Header />
      <Container />
    </ContainerContext>
  );
}

export default App;
