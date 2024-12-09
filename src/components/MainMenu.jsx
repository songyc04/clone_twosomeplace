import styled from "styled-components";
import PropTypes from "prop-types";

const MainMenu = ( {content} ) => {
  return (
    <MenuButton>{ content }</MenuButton>
  );
}

const MenuButton = styled.button`
  font-size: 13px;
`

MainMenu.propTypes = {
  content: PropTypes.string.isRequired,
}

export default MainMenu;