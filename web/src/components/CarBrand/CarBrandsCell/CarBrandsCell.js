import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import CarBrands from 'src/components/CarBrand/CarBrands'
import { PageLimitSelector } from 'src/components/Pagination/PageLimitSelector'
import Pagination from 'src/components/Pagination/Pagination'

export const beforeQuery = ({ page = 1, limit = 10 }) => {
  return {
    variables: { page: page, limit: limit },
  }
}

export const QUERY = () => {
  const { i18n } = useTranslation()
  return gql`
        query FindCarBrands ($page:Int, $limit:Int) {
          carBrands( page:$page, limit:$limit, orderBy: { ${
            i18n.dir() == 'rtl' ? 'heName' : 'name'
          }: asc }) {
            count
            carBrands{
            id
            name
            heName
            createdAt
            updateAt
            createdBy
            updatedBy
            }
          }
        }
      `
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t,i18n } = useTranslation()
  document.body.dir = i18n.dir()
  return (
    <div className="rw-text-center">
      {t('No Car Brands yet. ')}
      <Link to={routes.newCarBrand()} className="rw-link">
        <Trans i18nKey={'CreateOneMale'}>{t('Create one?')}</Trans>
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carBrands, page = 1, limit = 10 }) => {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()
  return (
    <>
      <CarBrands carBrands={carBrands.carBrands} count={carBrands.count} />
      <div className="flex justify-evenly">
        <Pagination
          count={carBrands.count}
          page={page}
          perPage={limit}
          linkTo={routes.carBrandsPaged}
        />
        <div className="flex">
          <div className="page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none">
            {t('Records per Page')}
          </div>
          <PageLimitSelector limit={limit} routeTo={routes.carBrandsPaged} />
        </div>
      </div>
    </>
  )
}
