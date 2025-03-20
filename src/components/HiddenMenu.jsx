import styled from "styled-components";
import PropTypes from "prop-types";



const HiddenMenu = ({ isHovered }) => {
  console.log(isHovered);
  return (
    <HiddenArea $isHovered = {isHovered} />
  );
};

HiddenMenu.propTypes = {
  isHovered: PropTypes.bool.isRequired
}



const HiddenArea = styled.div.attrs(({ $isHovered }) => ({
  style: {
    display: $isHovered ? "block" : "none",
  }
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;

  background-color: white;

`;

export default HiddenMenu;