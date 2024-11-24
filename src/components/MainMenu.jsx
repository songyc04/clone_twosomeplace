import PropTypes from "prop-types";

const MainMenu = ( {content} ) => {
  return (
    <li>{ content }</li>
  );
}

MainMenu.propTypes = {
  content: PropTypes.string.isRequired,
}

export default MainMenu;