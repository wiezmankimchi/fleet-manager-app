import CarModel from 'src/components/CarModel/CarModel'

export const QUERY = gql`
  query FindCarModelById($id: Int!) {
    carModel: carModel(id: $id) {
      id
      name
      heName
      carBrandId
      createdAt
      updateAt
      createdBy
      updatedBy
      CarBrand {
        id
        name
        heName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CarModel not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ carModel }) => {
  return <CarModel carModel={carModel} />
}
