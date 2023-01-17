import classnames from 'classnames'
import { t } from 'i18next'

import { Link } from '@redwoodjs/router'

import { usePagination } from './usePagination'

type PaginationProps = {
  count: number
  page: number
  perPage: number
  linkTo: unknown
}

const Pagination = ({ count, page = 1, perPage, linkTo }: PaginationProps) => {
  const items = []
  const currentpage = page
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: count,
    pageSize: perPage,
  })

  const lastPage = paginationRange[paginationRange.length - 1]

  if (page === 1 && paginationRange.length < 2) {
    return null
  }

  items.push(
    <Link
      key="p"
      to={linkTo({ page: page - 1, limit: perPage })}
      className={classnames(
        currentpage === 1 ? 'pointer-events-none text-blue-200' : '',
        'page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none'
      )}
    >
      {t('Previous')}
    </Link>
  )

  paginationRange.map((pageNumber) => {
    if (pageNumber === 'DOTS') {
      items.push(<li className="py-1 px-3">&#8230;</li>)
    } else {
      items.push(
        <Link
          key={pageNumber}
          to={linkTo({ page: pageNumber, limit: perPage })}
          className={` ${
            pageNumber === currentpage
              ? ' bg-blue-700 text-white hover:bg-blue-600 hover:text-white'
              : 'bg-transparent  text-gray-800 hover:bg-gray-200 hover:text-gray-800'
          } page-link relative block rounded-md  border-0  py-1.5 px-3 outline-none transition-all duration-300  focus:shadow-none`}
        >
          {pageNumber}
        </Link>
      )
    }
  })

  items.push(
    <Link
      to={linkTo({ page: page + 1, limit: perPage })}
      className={classnames(
        page + 1 > lastPage ? 'pointer-events-none text-blue-200' : '',
        'page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none'
      )}
    >
      <li key="n">{t('Next')}</li>
    </Link>
  )

  return <ul className="flex list-none">{items}</ul>
}

export default Pagination
