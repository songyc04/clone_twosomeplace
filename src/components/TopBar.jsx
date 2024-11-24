import styled from "styled-components";

import MainMenu from "#components/MainMenu.jsx";


const TopBar = () => {
  return (
    <List>
      <MainMenu content="A TWOSOME PLACE"></MainMenu>
      <MainMenu content="투썸플레이스 소개"></MainMenu>
      <MainMenu content="메뉴이야기"></MainMenu>
      <MainMenu content="브랜드 지원"></MainMenu>
      <MainMenu content="투썸플레이스 앱 & 멤버십"></MainMenu>
      <MainMenu content="가맹점 창업안내"></MainMenu>
      <MainMenu content="새소식 & 공지"></MainMenu>
    </List>
  );
}


const List = styled.nav`
  height: 120px;
  width: 100%;

  background-color: red;
`;

export default TopBar;