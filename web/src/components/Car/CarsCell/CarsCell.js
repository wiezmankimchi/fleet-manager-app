import { Link, routes } from '@redwoodjs/router'

import Cars from 'src/components/Car/Cars'

export const QUERY = gql`
  query FindCars {
    cars {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cars yet. '}
      <Link to={routes.newCar()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ cars }) => {
  return <Cars cars={cars} />
}
