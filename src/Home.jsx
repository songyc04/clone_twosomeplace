import styled from "styled-components";

import TopBar from "#components/TopBar.jsx";

import BackImage01 from "#resources/Home_BackImage.jpeg";


const Home = () => {
  return (
    <Main>
      <BackImage>
        <TopBar />
      </BackImage>
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
`

const BackImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${BackImage01});
  background-size: cover;
  background-position: center;
`

export default Home;