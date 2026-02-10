import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  //console.log(location);

  const [dashBtn, setDashBtn] = useState("");
  const [colorBtn, setColorBtn] = useState("");

  const [active, setActive] = useState({
    dashboard: "",
    color: "",
  });

  useEffect(() => {
    const path = location.pathname;
    // console.log("use effect called");
    // console.log(path);
    if (path === "/dashboard") {
      // setActive({ dashboard: "bg-blue-400 text-white", color: "" });
      setDashBtn("bg-blue-400 text-white");
      setColorBtn("");
    }
    if (path.includes("/dashboard/color")) {
      setActive({ dashboard: "", color: "bg-blue-400 text-white" });
    }
  }, [location]);

  const selectColor = () => {
    let color = prompt("Enter your color");
    navigate(`/dashboard/color/${color}`);
    setActive({ dashboard: "", color: "bg-blue-400 text-white" });
  };

  //
  return (
    <div className=" shadow-md p-4 flex flex-col gap-y-2">
      <div
        className={`active:opacity-50 cursor-pointer w-full px-1 py-0.5 shadow-md rounded-md  ${dashBtn} `}
        onClick={() => navigate("/dashboard")}
      >
        About{" "}
      </div>
      <div
        className={`active:opacity-50 cursor-pointer w-full px-1 py-0.5 shadow-md rounded-md ${colorBtn}`}
        onClick={selectColor}
      >
        Color
      </div>
      <div
        className="active:opacity-50 cursor-pointer w-full px-1 py-0.5 shadow-md rounded-md"
        onClick={() => navigate("/")}
      >
        Logout
      </div>
    </div>
  );
}

export default SideBar;
