import { useTranslation } from 'react-i18next'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { i18n } = useTranslation()
  const { logOut, currentUser, isAuthenticated } = useAuth()
  document.body.dir = i18n.dir()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <div>
        <button onClick={() => i18n.changeLanguage('he')} className="rw-button">
          he
        </button>
        <button onClick={() => i18n.changeLanguage('en')} className="rw-button">
          en
        </button>
      </div>
      <div>
        <button className="rw-button">
          <Link to={routes.login()}>Login</Link>
        </button>
      </div>
      <div>
        <button className="rw-button">
          <Link to={routes.signup()}>SignUp</Link>
        </button>
      </div>
      <div>
        <button className="rw-button" onClick={() => logOut()}>
          Logout
        </button>
      </div>
      {isAuthenticated && (
        <div>Current User: {JSON.stringify(currentUser)}</div>
      )}
    </>
  )
}

export default HomePage
