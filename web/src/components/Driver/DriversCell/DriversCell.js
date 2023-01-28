import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import Drivers from 'src/components/Driver/Drivers'
import { PageLimitSelector } from 'src/components/Pagination/PageLimitSelector'
import Pagination from 'src/components/Pagination/Pagination'

const beforeQuery = ({ page = 1, limit = 10 }) => {
  return {
    variables: { page: page, limit: limit },
  }
}

export const QUERY = gql`
  query FindDrivers($page: Int, $limit: Int, $orderBy: DriverOrderBy) {
    drivers(page: $page, limit: $limit, orderBy: $orderBy) {
      count
      drivers {
        id
        lastName
        registration
        registrationDate
        registratonImage
        companyId
        carId
        createdAt
        updateAt
        createdBy
        updatedBy
        firstName
        Company {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <div className="rw-text-center">
      {t('No drivers yet. ')}
      <Link to={routes.newDriver()} className="rw-link">
        <Trans i18nKey={'CreateOneMale'}>{'Create one?'}</Trans>
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ drivers, page = 1, limit = 10 }) => {
  const { t } = useTranslation()
  return drivers.count == 0 ? (
    <div className="rw-text-center">
      {t('No drivers yet. ')}
      <Link to={routes.newDriver()} className="rw-link">
        <Trans i18nKey={'CreateOneMale'}>{'Create one?'}</Trans>
      </Link>
    </div>
  ) : (
    <>
      <Drivers drivers={drivers.drivers} count={drivers.count} />
      <div className="flex justify-evenly">
        <Pagination
          count={drivers.count}
          page={page}
          perPage={limit}
          linkTo={routes.driversPaged}
        />
        <div className="flex">
          <div className="page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none">
            {t('Records per Page')}
          </div>
          <PageLimitSelector limit={limit} routeTo={routes.driversPaged} />
        </div>
      </div>
    </>
  )
}
