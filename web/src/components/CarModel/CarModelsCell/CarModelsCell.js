import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import CarModels from 'src/components/CarModel/CarModels'
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
  query FindCarModels ($page:Int, $limit:Int) {
    carModels (page:$page, limit:$limit, orderBy: {${
      i18n.dir() == 'rtl' ? 'heName' : 'name'
    }: asc}){
      count
      carModels {
        id
        name
        heName
        carBrandId
        createdAt
        updateAt
        createdBy
        updatedBy
        CarBrand {
          id
          name
          heName
        }
      }
    }
  }
`
}
export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No carModels yet. '}
      <Link to={routes.newCarModel()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModels, page = 1, limit = 10 }) => {
  const { t } = useTranslation()
  return (
    <>
      <CarModels carModels={carModels.carModels} count={carModels.count} />
      <dir className="flex justify-evenly">
        <Pagination
          count={carModels.count}
          page={page}
          perPage={limit}
          linkTo={routes.carModelsPaged}
        />
        <div className="flex">
          <div className="page-link relative block rounded-md border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none">
            {t('Records per Page')}:
          </div>
          <PageLimitSelector limit={limit} routeTo={routes.carModelsPaged} />
        </div>
      </dir>
    </>
  )
}
