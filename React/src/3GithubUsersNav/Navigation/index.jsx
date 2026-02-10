import { useNavigate } from "react-router-dom";

function Navigation(props) {
  const navigate = useNavigate();
  return (
    <div className=" flex w-full justify-center gapx-4">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="shadow-md rounded-md active:opacity-50 py-0.5 px-2"
      >
        Users
      </button>
      <button
        onClick={() => {
          navigate("/find");
        }}
        className="shadow-md rounded-md active:opacity-50 py-0.5 px-2"
      >
        Find
      </button>
    </div>
  );
}

export default Navigation;
