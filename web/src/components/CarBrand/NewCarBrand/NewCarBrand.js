import { useTranslation } from 'react-i18next'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CarBrandForm from 'src/components/CarBrand/CarBrandForm'

const CREATE_CAR_BRAND_MUTATION = gql`
  mutation CreateCarBrandMutation($input: CreateCarBrandInput!) {
    createCarBrand(input: $input) {
      id
    }
  }
`

const NewCarBrand = () => {
  const { t, i18n } = useTranslation()
  const { isAuthenticated, currentUser } = useAuth()
  const [createCarBrand, { loading, error }] = useMutation(
    CREATE_CAR_BRAND_MUTATION,
    {
      onCompleted: () => {
        toast.success('CarBrand created')
        navigate(routes.carBrands())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.createdBy = isAuthenticated ? currentUser.id : 1
    createCarBrand({ variables: { input } })
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          {t('New Car Brand')}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CarBrandForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCarBrand
