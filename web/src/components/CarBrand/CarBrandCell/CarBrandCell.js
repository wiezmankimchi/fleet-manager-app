import CarBrand from 'src/components/CarBrand/CarBrand'

export const QUERY = gql`
  query FindCarBrandById($id: Int!) {
    carBrand: carBrand(id: $id) {
      id
      name
      heName
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Car Brand not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carBrand }) => {
  return <CarBrand carBrand={carBrand} />
}
