import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  return (
    <div>
      <div>
        <div>
          <label>Email</label>
          <input placeholder="email" />
        </div>
        <div>
          <label>Password</label>
          <input placeholder="password" type="password" />
        </div>
        <div>
          <button onClick={() => navigation("/dashboard")}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
