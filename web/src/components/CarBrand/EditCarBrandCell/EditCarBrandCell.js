import { Trans, useTranslation } from 'react-i18next'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarBrandForm from 'src/components/CarBrand/CarBrandForm'

export const QUERY = gql`
  query EditCarBrandById($id: Int!) {
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
const UPDATE_CAR_BRAND_MUTATION = gql`
  mutation UpdateCarBrandMutation($id: Int!, $input: UpdateCarBrandInput!) {
    updateCarBrand(id: $id, input: $input) {
      id
      name
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

export const Success = ({ carBrand }) => {
  const { t, i18n } = useTranslation()
  const [updateCarBrand, { loading, error }] = useMutation(
    UPDATE_CAR_BRAND_MUTATION,
    {
      onCompleted: () => {
        toast.success('CarBrand updated')
        navigate(routes.carBrands())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCarBrand({ variables: { id, input } })
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          <Trans i18nKey="EditCarBrnadID">
            Edit Car Brand {{ carBrandID: carBrand?.id }}
          </Trans>
        </h2>
      </header>
      <div className="rw-segment-main">
        <CarBrandForm
          carBrand={carBrand}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
