import styled from "styled-components";
import { useState } from "react";

import TopMenu from "#components/TopMenu.jsx";
import HiddenMenu from "#components/HiddenMenu.jsx"


const TopBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <TopArea onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <HiddenMenu isHovered={isHovered}/>
      <TitleArea>
        <TopMenu content="A TWOSOME PLACE"></TopMenu>  
      </TitleArea>
      <MenuArea>
        <TopMenu content="투썸플레이스 소개"></TopMenu>
        <TopMenu content="메뉴이야기"></TopMenu>
        <TopMenu content="브랜드 지원"></TopMenu>
        <TopMenu content="투썸플레이스 앱 & 멤버십"></TopMenu>
        <TopMenu content="가맹점 창업안내"></TopMenu>
        <TopMenu content="새소식 & 공지"></TopMenu>
      </MenuArea>
      <BtnArea>
        <TopMenu content="English" border={true}></TopMenu>
        <TopMenu border={true}></TopMenu>
      </BtnArea>
    </TopArea>
  );
}


const TopArea = styled.span`
  height: 100px;
  width: 100%;
  display: flex;
`;

const TitleArea = styled.span`
  height: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
`;

const MenuArea = styled.span`
  height: 100%;
  text-align: center;
  top: 50%;

  flex: 5;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  z-index: 1;
`;

const BtnArea = styled.span`
  height: 100%;
  text-align: center;

  flex: 0.9;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  z-index: 1;
`;

export default TopBar;