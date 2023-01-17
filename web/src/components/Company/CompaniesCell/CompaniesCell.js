import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import Companies from 'src/components/Company/Companies'
import { PageLimitSelector } from 'src/components/Pagination/PageLimitSelector'
import Pagination from 'src/components/Pagination/Pagination'

export const beforeQuery = ({ page = 1, limit = 10 }) => {
  return {
    variables: { page: page, limit: limit },
  }
}
export const QUERY = gql`
  query FindCompanies($page: Int, $limit: Int, $orderBy: CompaniesOrderBy) {
    companies(page: $page, limit: $limit, orderBy: $orderBy) {
      count
      companies {
        id
        name
        address1
        address2
        city
        zipcode
        country
        createdAt
        updateAt
        createdBy
        updatedBy
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <div className="rw-text-center">
      {t('No companies yet. ')}
      <Link to={routes.newCompany()} className="rw-link">
        <Trans i18nKey={'CreateOneFemale'}>{'Create one?'}</Trans>
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ companies, page = 1, limit = 10 }) => {
  const { t } = useTranslation()
  return (
    <>
      <Companies companies={companies.companies} count={companies.count} />
      <div className="flex justify-evenly">
        <Pagination
          count={companies.count}
          page={page}
          perPage={limit}
          linkTo={routes.companiesPaged}
        />
        <div className="flex">
          <div className="page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none">
            {t('Records per Page')}
          </div>
          <PageLimitSelector limit={limit} routeTo={routes.companiesPaged} />
        </div>
      </div>
    </>
  )
}
