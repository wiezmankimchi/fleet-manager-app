import Driver from 'src/components/Driver/Driver'

export const QUERY = gql`
  query FindDriverById($id: Int!) {
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
      Company {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Driver not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ driver }) => {
  return <Driver driver={driver} />
}
