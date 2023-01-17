import { useTranslation } from 'react-i18next'

import { SelectField } from '@redwoodjs/forms'

// export const beforeQuery = (props) => {
//   return {
//     variables: props,
//     fetchPolicy: 'cache-and-network',
//   }
// }

export const QUERY = () => {
  const { i18n } = useTranslation()
  return gql`
        query FindCarBrands {
          carBrands(limit:999,orderBy: { ${
            i18n.dir() == 'rtl' ? 'heName' : 'name'
          }: asc }) {
            carBrands{
            id
            name
            heName
            createdAt
            updateAt
            createdBy
            updatedBy
            }
          }
        }
      `
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <SelectField
      name="carBrandId"
      className="rw-input"
      errorClassName="rw-input rw-input-error"
      placeholder="Select Car Brand"
      disabled
    >
      <option key={0} value={''}>
        {t('No Values. Create One...')}
      </option>
    </SelectField>
  )
}

export const Failure = ({ error }) => {
  return <div className="rw-cell-error">{error?.message}</div>
}

export const Success = ({ carBrands, carBrandId }) => {
  const { t, i18n } = useTranslation()
  return (
    <SelectField
      name="carBrandId"
      className="rw-input"
      defaultValue={carBrandId || 0}
      errorClassName="rw-input rw-input-error"
      placeholder="Select Car Brand"
      validation={{
        required: true,
        valueAsNumber: true,
        validate: {
          matchesInitialValue: (value) => {
            return (
              value !== t('Please select an option') || t('Select an Option')
            )
          },
        },
      }}
    >
      <option>{t('Please select an option')}</option>
      {carBrands.carBrands.map((carBrand) => {
        return (
          <option key={carBrand?.id} value={carBrand?.id}>
            {i18n.dir() == 'rtl' ? carBrand?.heName : carBrand?.name}
          </option>
        )
      })}
    </SelectField>
  )
}
