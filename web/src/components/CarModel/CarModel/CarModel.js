import { Trans, useTranslation } from 'react-i18next'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_CAR_MODEL_MUTATION = gql`
  mutation DeleteCarModelMutation($id: Int!) {
    deleteCarModel(id: $id) {
      id
    }
  }
`

const CarModel = ({ carModel }) => {
  const { t, i18n } = useTranslation()
  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL_MUTATION, {
    onCompleted: () => {
      toast.success('CarModel deleted')
      navigate(routes.carModels())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete carModel ' + id + '?')) {
      deleteCarModel({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="CarModelDetails">
              Car Model {{ carModelID: carModel.id }} Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{carModel.id}</td>
            </tr>
            <tr>
              <th>{t('Name')}</th>
              <td>{carModel.name}</td>
            </tr>
            <tr>
              <th>{t('Hebrew Name')}</th>
              <td>{carModel.heName}</td>
            </tr>
            <tr>
              <th>{t('Car Brand')}</th>
              <td>{carModel.CarBrand.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarModel({ id: carModel.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carModel.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default CarModel
