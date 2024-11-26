import "../../styles/pages/_register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import { Form } from "../../ui/components/organisms/Form";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = ({ EmailAddress, Password }: { EmailAddress: string; Password: string }) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, EmailAddress, Password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate("/");
      })
      .catch(console.error)
  }

  const { register, handleSubmit, formState: { errors }} = useForm<{
    EmailAddress: string;
    Password: string;
  }>({
    defaultValues: {
      EmailAddress: "",
      Password: ""
    },
    mode: "onChange"
  });

  return (
    <>
      <div className="layout">
        <div className="layout__header">
          <div className="main-logo">
            <img src="./images/svg/airslate-mono.svg" width={150} height={48} alt="airSlate logo" />
          </div>
        </div>
        <main className="layout__body">
          <Form
            onSubmit={handleSubmit(handleRegister)}
            formTitle="Welcome to airSlate"
            register={register}
            errors={errors}
            buttonText="Get started"
          />
          <p className="account">Already have an account?&ensp;
            <Link className="account__link" to="../login">Sign in</Link>
          </p>
        </main>
      </div>
    </>
  );
}
