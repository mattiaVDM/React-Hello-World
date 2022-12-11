import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "purple" : "violet"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "TaskTracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
