import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarForm from 'src/components/Car/CarForm'

export const QUERY = gql`
  query EditCarById($id: Int!) {
    car: car(id: $id) {
      id
      registration
      registrationDate
      carModelId
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`
const UPDATE_CAR_MUTATION = gql`
  mutation UpdateCarMutation($id: Int!, $input: UpdateCarInput!) {
    updateCar(id: $id, input: $input) {
      id
      registration
      registrationDate
      carModelId
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ car }) => {
  const [updateCar, { loading, error }] = useMutation(UPDATE_CAR_MUTATION, {
    onCompleted: () => {
      toast.success('Car updated')
      navigate(routes.cars())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateCar({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Car {car?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CarForm car={car} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
