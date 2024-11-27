import { InputGroup } from "../../molecules/InputGroup";
import { Button } from "../../atoms/Button";

interface FormProps {
  onSubmit: () => void;
  formTitle: string;
  register: any;
  errors: Record<string, any>;
  buttonText: string;
}

export const Form = ({onSubmit, formTitle, register, errors, buttonText}: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="form"
      autoComplete="off"
    >
      <div className="form__inner">
        <h1 className="form__title">{formTitle}</h1>
        <div className="form__controls">
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
                  title={buttonText}
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
  );
}
