import { Trans, useTranslation } from 'react-i18next'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CAR_BRAND_MUTATION = gql`
  mutation DeleteCarBrandMutation($id: Int!) {
    deleteCarBrand(id: $id) {
      id
    }
  }
`

const CarBrand = ({ carBrand }) => {
  const { t, i18n } = useTranslation()
  const [deleteCarBrand] = useMutation(DELETE_CAR_BRAND_MUTATION, {
    onCompleted: () => {
      toast.success('CarBrand deleted')
      navigate(routes.carBrands())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete carBrand ' + id + '?')) {
      deleteCarBrand({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="CarBrandDetails">
              Car Brand {{ carBrandID: carBrand.id }}Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{carBrand.id}</td>
            </tr>
            <tr>
              <th>{t('Name')}</th>
              <td>{carBrand.name}</td>
            </tr>
            <tr>
              <th>{t('Hebrew Name')}</th>
              <td>{carBrand.heName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCarBrand({ id: carBrand.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(carBrand.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default CarBrand
