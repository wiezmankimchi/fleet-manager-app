import { useTranslation, Trans } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Driver/DriversCell'
import { consoleLogger, timeTag, truncate } from 'src/lib/formatters'

const DELETE_DRIVER_MUTATION = gql`
  mutation DeleteDriverMutation($id: Int!) {
    deleteDriver(id: $id) {
      id
    }
  }
`

const DriversList = ({ drivers, count }) => {
  const { t, i18n } = useTranslation()
  const REGISTRATION_DAYS_EXPIRATION_LIMIT = -30
  const [deleteDriver] = useMutation(DELETE_DRIVER_MUTATION, {
    onCompleted: () => {
      toast.success('Driver deleted')
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
    if (confirm('Are you sure you want to delete driver ' + id + '?')) {
      deleteDriver({ variables: { id } })
    }
  }

  const addDays = (date, days) => {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  document.body.dir = i18n.dir()

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('First Name')}</th>
            <th>{t('Last Name')}</th>
            <th>{t('Reg. Number')}</th>
            <th>{t('Reg. End Date')}</th>
            <th>{t('Reg. Image')}</th>
            <th>{t('Company')}</th>
            <th>{t('Car')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{truncate(driver.id)}</td>
              <td>{truncate(driver.firstName)}</td>
              <td>{truncate(driver.lastName)}</td>
              <td>{truncate(driver.registration)}</td>
              <td>
                <span
                  className={
                    addDays(
                      driver?.registrationDate,
                      REGISTRATION_DAYS_EXPIRATION_LIMIT
                    ) < new Date()
                      ? 'overdue'
                      : ''
                  }
                >
                  {timeTag(driver.registrationDate, i18n.language)}
                </span>
              </td>
              <td>{truncate(driver.registratonImage)}</td>
              <td>{truncate(driver.Company?.name)}</td>
              <td>{truncate(driver.carId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.driver({ id: driver.id })}
                    title={'Show driver ' + driver.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {t('Show')}
                  </Link>
                  <Link
                    to={routes.editDriver({ id: driver.id })}
                    title={'Edit driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    {t('Edit')}
                  </Link>
                  <button
                    type="button"
                    title={'Delete driver ' + driver.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(driver.id)}
                  >
                    {t('Delete')}
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>
              <Trans i18nKey="recordCount">
                There are:{{ totalCount: count }}
              </Trans>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DriversList
