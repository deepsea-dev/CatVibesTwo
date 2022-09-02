import { UrlEntry } from './components/urlEntry';
import backgroundImage from './images/background-blurred.png';
import styled from 'styled-components';

function App() {
  return (
    <Content data-testid='content'>
      <UrlEntry/>
    </Content>
  );
}

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

export default App;