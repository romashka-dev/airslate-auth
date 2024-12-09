import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { Button } from '../../ui/components/atoms/Button'
import { TemplateScaffold } from '../../ui/components/templates/Scaffold'

export const HomePage = () => {
  const dispatch = useAppDispatch()

  const { isAuth, email } = useAuth()

  return isAuth ? (
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
          <Button
            onClick={() => dispatch(removeUser())}
            title={`Log out from ${email}`}
            selector="button"
            type="button"
            ariaLabel="Log out"
          />
        </main>
      </div>
    </TemplateScaffold>
  ) : (
    <TemplateScaffold>
      <Navigate to="/login" />
    </TemplateScaffold>
  )
}
