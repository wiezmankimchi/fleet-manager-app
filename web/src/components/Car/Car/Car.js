import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($id: Int!) {
    deleteCar(id: $id) {
      id
    }
  }
`

const Car = ({ car }) => {
  const [deleteCar] = useMutation(DELETE_CAR_MUTATION, {
    onCompleted: () => {
      toast.success('Car deleted')
      navigate(routes.cars())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete car ' + id + '?')) {
      deleteCar({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Car {car.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>{t('ID')}</th>
              <td>{car.id}</td>
            </tr>
            <tr>
              <th>Registration</th>
              <td>{car.registration}</td>
            </tr>
            <tr>
              <th>Registration date</th>
              <td>{timeTag(car.registrationDate)}</td>
            </tr>
            <tr>
              <th>Car model id</th>
              <td>{car.carModelId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(car.createdAt)}</td>
            </tr>
            <tr>
              <th>Update at</th>
              <td>{timeTag(car.updateAt)}</td>
            </tr>
            <tr>
              <th>Created by</th>
              <td>{car.createdBy}</td>
            </tr>
            <tr>
              <th>Updated by</th>
              <td>{car.updatedBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCar({ id: car.id })}
          className="rw-button rw-button-blue"
        >
          {t('Edit')}
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(car.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Car
