import { Description, Title } from "./About";

function Header() {
  return (
    <div className="shadow-md rounded-md my-4  p-6">
      <Title />
      <Description />
    </div>
  );
}

export default Header;
