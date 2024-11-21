import "../../styles/pages/_register.scss";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <div className="layout">
        <div className="layout__header">
          <p className="account">Already have an account?&ensp;
            <Link className="account__link" to="../login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}