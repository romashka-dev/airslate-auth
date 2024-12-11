import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TemplateScaffold } from '../../ui/components/templates/Scaffold'
import { Form } from '../../ui/components/organisms/Form'
import { AuthorInfo } from '../../ui/components/molecules/AuthorInfo'
import { LOGOS } from '../data/logo-data'
import { LogoList } from '../../ui/components/molecules/LogoList'
import { setUser } from '../store/slices/user-slice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { loginUser } from '../auth/auth-service'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = async ({
    EmailAddress,
    Password,
  }: {
    EmailAddress: string
    Password: string
  }) => {
    try {
      const userData = await loginUser(EmailAddress, Password)
      dispatch(
        setUser({
          email: userData.email,
          id: userData.uid,
          token: userData.token,
        })
      )
      navigate('/')
    } catch {
      alert('Invalid User!')
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
          <section className="section section--login-form">
            <Form
              onSubmit={handleSubmit(handleLogin)}
              formTitle="Log in to airSlate"
              register={register}
              errors={errors}
              buttonText="Log in"
            />
          </section>
          <section className="section section--create-account">
            <div className="create-account">
              <p className="create-account__text">
                Don’t have an account?&ensp;
                <Link className="create-account__link" to="/register">
                  Create one
                </Link>
              </p>
            </div>
          </section>
        </main>
        <div className="layout__footer">
          <AuthorInfo
            projectDescription="Project: airSlate Auth"
            authorName="Author: Holovizin Roman"
          />
          <LogoList logos={LOGOS} />
        </div>
      </div>
    </TemplateScaffold>
  )
}
