import { UrlEntry } from './components/urlEntry';

import backgroundImage from './images/background.png';
import styled from 'styled-components';

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-position: 70% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* filter: blur(8px); */
  width: 70%;
  height: 100vh;
`;

function App() {
  return (
    <Content>
      <UrlEntry/>
    </Content>
  );
}

export default App;

