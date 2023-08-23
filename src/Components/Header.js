import Button from "./Button";
const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
