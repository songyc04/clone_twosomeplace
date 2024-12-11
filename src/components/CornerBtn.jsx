import styled from "styled-components";
import PropTypes from "prop-types";



const CornerBtn = ({ text, loc }) => {
  return (
    <Button loc={loc}>{ text }</Button>
  );
};


const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: 180px;
  background-color: #f3451f;
  padding: 20px 30px 20px 30px;
  position: fixed;
  right: 2%;
  bottom: ${(props) => (props.loc == "bottom" ? "40px" : "130px")};

  border: 0;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
    background-color: #f3451f;
  }

`;


CornerBtn.propTypes = {
  text: PropTypes.string.isRequired,
  loc: PropTypes.string,
}

export default CornerBtn;