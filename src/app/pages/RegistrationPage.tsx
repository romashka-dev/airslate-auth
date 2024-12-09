import '../../styles/pages/_registrationPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebase'
import { Form } from '../../ui/components/organisms/Form'
import { setUser } from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { TemplateScaffold } from '../../ui/components/templates/Scaffold'

export const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleRegister = ({
    EmailAddress,
    Password,
  }: {
    EmailAddress: string
    Password: string
  }) => {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, EmailAddress, Password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        navigate('/')
      })
      .catch(console.error)
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
