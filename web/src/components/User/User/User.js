import { useTranslation, Trans } from 'react-i18next'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const User = ({ user }) => {
  const { t, i18n } = useTranslation()
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  document.body.dir = i18n.dir()
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            <Trans i18nKey="userMessagesUnread1">
              User {{ userID: user.id }} Detail
            </Trans>
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>{t('User Name')}</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>{t('Email')}</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>{t('First Name')}</th>
              <td>{user.firstname}</td>
            </tr>
            <tr>
              <th>{t('Last Name')}</th>
              <td>{user.lastname}</td>
            </tr>
            <tr>
              <th>{t('Role')}</th>
              <td>{formatEnum(user.role)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.id)}
        >
          {t('Delete')}
        </button>
      </nav>
    </>
  )
}

export default User
