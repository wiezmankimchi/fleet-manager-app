import { useTranslation } from 'react-i18next'

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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return <div>{t('Driver not found')}</div>
}
export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ driver }) => {
  return <Driver driver={driver} />
}
