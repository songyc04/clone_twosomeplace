import styled from "styled-components";

import TopBar from "#components/TopBar.jsx";
import CornerBtn from "#components/CornerBtn.jsx";

import BackImage01 from "#resources/Home_BackImage.jpeg";


const Home = () => {
  return (
    <Main>
      <BackImage>
        <TopBar />
        <CornerBtn text="기업 단체 구매" loc="top" />
        <CornerBtn text="협력업체 제안" loc="bottom" />
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