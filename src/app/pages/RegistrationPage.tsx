import '../../styles/pages/_registrationPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TemplateScaffold } from '../../ui/components/templates/Scaffold'
import { Form } from '../../ui/components/organisms/Form'
import { setUser } from '../store/slices/user-slice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { registerUser } from '../auth/auth-service'

export const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleRegister = async ({
    EmailAddress,
    Password,
  }: {
    EmailAddress: string
    Password: string
  }) => {
    try {
      const userData = await registerUser(EmailAddress, Password)
      dispatch(
        setUser({
          email: userData.email,
          id: userData.uid,
          token: userData.token,
        })
      )
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    EmailAddress: string
    Password: string
  }>({
    defaultValues: {
      EmailAddress: '',
      Password: '',
    },
    mode: 'onChange',
  })

  return (
    <TemplateScaffold>
      <div className="layout">
        <div className="layout__header">
          <div className="main-logo">
            <img
              src="./images/svg/airslate-mono.svg"
              width={150}
              height={48}
              alt="airSlate logo"
            />
          </div>
        </div>
        <main className="layout__body">
          <section className="section section--registration-form">
            <Form
              onSubmit={handleSubmit(handleRegister)}
              formTitle="Welcome to airSlate"
              register={register}
              errors={errors}
              buttonText="Get started"
            />
          </section>
          <section className="section section--account-registered">
            <div className="account">
              <p className="account__text">
                Already have an account?&ensp;
                <Link className="account__link" to="../login">
                  Sign in
                </Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </TemplateScaffold>
  )
}
