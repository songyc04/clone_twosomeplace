import styled from "styled-components";
import PropTypes from "prop-types";

const TopMenu = ( {content, border = false} ) => {
  let result;

  if (border) {
    if (content) {
      result = <MenuButton iscontent={content}>{content}</MenuButton>
      console.log(content);
    } else {
      result = <MenuButton iscontent={content}>{content}</MenuButton>
      console.log(content);

    }
    
  } else {
    result = <MenuLink>{content}</MenuLink>
  }
  
  
  return (result);
}

const MenuButton = styled.button`
  font-size: 14px;
  color: white;
  border: ${(props) => (props.iscontent ? "0" : "3px solid black")};
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const MenuLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: white;
  
  &:hover {
    cursor: pointer;
  }


`
// TopMenu.defaultProps = {
//   border: false, // 기본값 설정
// };

TopMenu.propTypes = {
  content: PropTypes.string,
  border: PropTypes.bool,
}

export default TopMenu;