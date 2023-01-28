import { useTranslation, Trans } from 'react-i18next'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const Driver = ({ driver }) => {
  const { t, i18n } = useTranslation()
  const [deleteDriver] = useMutation(DELETE_DRIVER_MUTATION, {
    onCompleted: () => {
      toast.success('Driver deleted')
      navigate(routes.drivers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete driver ' + id + '?')) {
      deleteDriver({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="DriverDetail">
              Driver {{ driverID: driver.id }} Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{driver.id}</td>
            </tr>
            <tr>
              <th>{t('First Name')}</th>
              <td>{driver.firstName}</td>
            </tr>
            <tr>
              <th>{t('Last Name')}</th>
              <td>{driver.lastName}</td>
            </tr>
            <tr>
              <th>{t('Reg. Number')}</th>
              <td>{driver.registration}</td>
            </tr>
            <tr>
              <th>{t('Reg. End Date')}</th>
              <td>{timeTag(driver.registrationDate)}</td>
            </tr>
            <tr>
              <th>{t('Reg. Image')}</th>
              <td>{driver.registratonImage}</td>
            </tr>
            <tr>
              <th>{t('Company')}</th>
              <td>{driver.companyId}</td>
            </tr>
            <tr>
              <th>{t('Car')}</th>
              <td>{driver.carId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDriver({ id: driver.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(driver.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default Driver
