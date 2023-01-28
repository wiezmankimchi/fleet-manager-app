import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DriverForm from 'src/components/Driver/DriverForm'

export const QUERY = gql`
  query EditDriverById($id: Int!) {
    driver: driver(id: $id) {
      id
      lastName
      registration
      registrationDate
      registratonImage
      companyId
      carId
      createdAt
      updateAt
      createdBy
      updatedBy
      firstName
    }
  }
`
const UPDATE_DRIVER_MUTATION = gql`
  mutation UpdateDriverMutation($id: Int!, $input: UpdateDriverInput!) {
    updateDriver(id: $id, input: $input) {
      id
      lastName
      registration
      registrationDate
      registratonImage
      companyId
      carId
      createdAt
      updateAt
      createdBy
      updatedBy
      firstName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ driver }) => {
  const [updateDriver, { loading, error }] = useMutation(
    UPDATE_DRIVER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Driver updated')
        navigate(routes.drivers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDriver({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Driver {driver?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DriverForm
          driver={driver}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
