import { useEffect } from "react";
import { checkToken } from "../utils/checkToken";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkToken()) {
      navigate("/signin");
    }
  }, []);

  return <div>투두</div>;
}

export default Todo;
