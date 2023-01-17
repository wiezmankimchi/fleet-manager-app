import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CarBrand/CarBrandsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_CAR_BRAND_MUTATION = gql`
  mutation DeleteCarBrandMutation($id: Int!) {
    deleteCarBrand(id: $id) {
      id
    }
  }
`

const CarBrandsList = ({ carBrands, count }) => {
  const { t, i18n } = useTranslation()
  const [deleteCarBrand] = useMutation(DELETE_CAR_BRAND_MUTATION, {
    onCompleted: () => {
      toast.success('CarBrand deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete carBrand ' + id + '?')) {
      deleteCarBrand({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Name')}</th>
            <th>{t('Hebrew Name')}</th>

            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carBrands.map((carBrand) => (
            <tr key={carBrand.id}>
              <td>{truncate(carBrand.id)}</td>
              <td>{truncate(carBrand.name)}</td>
              <td>{truncate(carBrand.heName)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carBrand({ id: carBrand.id })}
                    title={'Show carBrand ' + carBrand.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editCarBrand({ id: carBrand.id })}
                    title={'Edit carBrand ' + carBrand.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete carBrand ' + carBrand.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carBrand.id)}
                  >
                    {t('Delete')}
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>
              <Trans i18nKey={'recordCount'}>
                There are:{{ totalCount: count }} records
              </Trans>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CarBrandsList
