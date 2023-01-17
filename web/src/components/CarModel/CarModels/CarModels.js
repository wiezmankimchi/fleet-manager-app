import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY } from 'src/components/CarModel/CarModelsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MUTATION = gql`
  mutation DeleteCarModelMutation($id: Int!) {
    deleteCarModel(id: $id) {
      id
    }
  }
`

const CarModelsList = ({ carModels, count }) => {
  const { t, i18n } = useTranslation()
  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL_MUTATION, {
    onCompleted: () => {
      toast.success('CarModel deleted')
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
    if (confirm('Are you sure you want to delete carModel ' + id + '?')) {
      deleteCarModel({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Name')}</th>
            <th>{t('Hebrew Name')}</th>
            <th>{t('Car Brand')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {carModels.map((carModel) => (
            <tr key={carModel.id}>
              <td>{truncate(carModel.id)}</td>
              <td>{truncate(carModel.name)}</td>
              <td>{truncate(carModel.heName)}</td>
              <td>
                {truncate(
                  i18n.dir() == 'rtl'
                    ? carModel.CarBrand.heName
                    : carModel.CarBrand.name
                )}
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.carModel({ id: carModel.id })}
                    title={'Show carModel ' + carModel.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editCarModel({ id: carModel.id })}
                    title={'Edit carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete carModel ' + carModel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(carModel.id)}
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

export default CarModelsList
