import "./App.scss";
import { Button } from "../ui/components/atoms/Button";
import { InputGroup } from "../ui/components/molecules/InputGroup";
import { AuthorInfo } from "../ui/components/molecules/AuthorInfo/AuthorInfo";
import { LogoList } from  "../ui/components/molecules/LogoList/LogoList";
import { useForm } from "react-hook-form";

function App() {
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

  const onSubmit = (data: { EmailAddress: string; Password: string }) => {
    console.log("Form Data:", data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)} action="/" className="login-form" method="post" name="form" autoComplete="off">
            <div className="login-form__inner">
              <h1 className="login-form__title">Log in to airSlate</h1>
              <div className="login-form__controls">
                <div className="form-group">
                  <div className="form-group__row">
                    <div className="form-group__items">
                      <InputGroup
                        labelProps={{
                          selector: "form-group__label",
                          text: "Enter an email",
                          htmlFor: "Email"
                        }}
                        inputProps={{
                          id: "Email",
                          className: "form-group__input",
                          type: "email",
                          placeholder: "Enter an email",
                          autoComplete: "email",
                          register: register("EmailAddress", {required: "Email address is required."})
                        }}
                      />
                      {errors.EmailAddress && <p className="input-error">{errors.EmailAddress?.message}</p>}
                    </div>
                  </div>
                  <div className="form-group__row">
                    <div className="form-group__items">
                      <InputGroup
                        labelProps={{
                          selector: "form-group__label",
                          text: "Password",
                          htmlFor: "Password"
                        }}
                        inputProps={{
                          id: "Password",
                          className: "form-group__input",
                          type: "password",
                          placeholder: "Enter password",
                          autoComplete: "password",
                          register: register("Password", {
                            required: "Password is required.",
                            minLength: {
                              value: 8,
                              message: "Min length is 8"
                            }
                          }),
                        }}
                      />
                      {errors.Password && <p className="input-error">{errors.Password?.message}</p>}
                    </div>
                  </div>
                  <div className="form-group__row">
                    <p className="policy">
                      By clicking Log in, you agree to the&ensp;
                      <a className="policy__Link" href="https://www.airslate.com/terms-of-service" target="_blank">Terms of Services</a>
                      <span className="policy__text">&ensp;and&ensp;</span>
                      <a className="policy__Link" href="https://www.airslate.com/privacy-notice" target="_blank">Privacy Policy,</a>
                      <span className="policy__text">&ensp;including receipt of emails from of us about our service.</span>
                    </p>
                  </div>
                  <div className="form-group__row">
                    <div className="form-group__action">
                      <Button
                        title="Log in"
                        selector="form-group__button"
                        type="submit"
                        ariaLabel="Log in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
  )
}

export default App
