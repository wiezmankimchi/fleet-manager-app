import Car from 'src/components/Car/Car'

export const QUERY = gql`
  query FindCarById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Car not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ car }) => {
  return <Car car={car} />
}
