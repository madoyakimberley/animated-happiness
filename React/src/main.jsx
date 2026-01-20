import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GithubUsers from "./3GithubUsers";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubUsers />
  </StrictMode>,
);
