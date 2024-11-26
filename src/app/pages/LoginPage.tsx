import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import { Form } from "../../ui/components/organisms/Form";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { AuthorInfo } from "../../ui/components/molecules/AuthorInfo";
import { LogoList } from  "../../ui/components/molecules/LogoList";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = ({ EmailAddress, Password }: { EmailAddress: string; Password: string }) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, EmailAddress, Password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate("/");
      })
      .catch(() => alert("Invalid User!"))
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      EmailAddress: "",
      Password: ""
    },
    mode: "onChange"
  });

  // const onSubmit = (data: { EmailAddress: string; Password: string }) => {
  //   console.log("Form Data:", data);
  // };

  const logos = [
    {
      id: "1",
      selectorLink: "logo__link",
      href: "https://vite.dev",
      selectorImage: "logo__image logo__image--vite",
      path: "./images/svg/vite.svg",
      width: 64,
      height: 64,
      altText: "Vite logo",
    },
    {
      id: "2",
      selectorLink: "logo__link",
      href: "https://react.dev",
      selectorImage: "logo__image logo__image--react",
      path: "./images/svg/react.svg",
      width: 64,
      height: 64,
      altText: "React logo",
    },
    {
      id: "3",
      selectorLink: "logo__link",
      href: "https://www.typescriptlang.org/",
      selectorImage: "logo__image logo__image--typescript",
      path: "./images/svg/typescript.svg",
      width: 64,
      height: 64,
      altText: "TypeScript logo",
    },
  ];

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
            onSubmit={handleSubmit(handleLogin)}
            formTitle="Log in to airSlate"
            register={register}
            errors={errors}
            buttonText="Log in"
          />
          <p className="create-account">Don’t have an account?&ensp;
            <Link className="create-account__link" to="/register">Create one</Link>
          </p>
        </main>
        <div className="layout__footer">
          <AuthorInfo
            projectDescription="Project: airSlate Auth"
            authorName="Author: Holovizin Roman"
          />
          <LogoList logos={logos} />
        </div>
      </div>
    </>
  );
}
