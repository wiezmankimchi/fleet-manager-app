import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {t(title)}
          </Link>
        </h1>
        <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
          {i18n.dir() == 'ltr' ? <div className="rw-button-icon">+</div> : ''}{' '}
          {t(buttonLabel)}{' '}
          {i18n.dir() == 'rtl' ? <div className="rw-button-icon">+</div> : ''}
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
