import { useTranslation } from 'react-i18next'

import { logo } from 'src/lib/icons'
const HeaderNav = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.body.dir = i18n.dir()
  }
  return (
    <nav className="fixed z-30 w-full border-b border-gray-200 bg-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            {/* Menu button */}
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/* Menu button */}
            {/* Logo */}
            <a
              href="/"
              className="mr-3 flex items-center text-xl font-bold lg:ml-2.5"
            >
              {logo()}
              <span className="self-center whitespace-nowrap ltr:ml-3 rtl:mr-3">
                {t('Raphaelo - Car Fleet Manager')}
              </span>
            </a>
            {/* Logo */}
            {/* search */}
            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-64">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </form>
            {/* search */}
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
            >
              <span className="sr-only">Search</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <button
              className="mx-1 rounded bg-slate-300 p-1 text-sm"
              onClick={() => changeLanguage('en')}
            >
              en
            </button>
            <button
              className="mx-1 rounded bg-slate-300 p-1 text-sm"
              onClick={() => changeLanguage('he')}
            >
              he
            </button>
            <button
              className="mx-1 rounded bg-slate-300 p-1 text-sm"
              onClick={() => changeLanguage('fr')}
            >
              fr
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
