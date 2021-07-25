import styled from 'styled-components';

import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Text from './components/Text';

const Container = styled.div`
  display: grid;
  grid-template-columns: [first] 1fr [middle] 1fr [last];

  max-width: 1250px;
  margin: auto;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Text />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default App;
