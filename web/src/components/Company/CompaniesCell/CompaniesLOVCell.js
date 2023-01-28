import { useTranslation } from 'react-i18next'

import { SelectField } from '@redwoodjs/forms'

import LOVSelectField from 'src/components/LOVSelectField/LOVSelectField'

export const beforeQuery = ({ page = 1, limit = 10 }) => {
  return {
    variables: { page: page, limit: limit },
  }
}
export const QUERY = gql`
  query FindCompanies($page: Int, $limit: Int, $orderBy: CompaniesOrderBy) {
    companies(page: $page, limit: $limit, orderBy: $orderBy) {
      count
      companies {
        id
        name
        # address1
        # address2
        # city
        # zipcode
        # country
        # createdAt
        # updateAt
        # createdBy
        # updatedBy
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { t } = useTranslation()
  return (
    <SelectField
      name="companyId"
      className="rw-input"
      errorClassName="rw-input rw-input-error"
      placeholder="Select Company"
      disabled
    >
      <option key={0} value={''}>
        {t('No Values. Create One...')}
      </option>
    </SelectField>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ companies, companyId, name, valueAsNumber }) => {
  const { t, i18n } = useTranslation()
  const defaultValue = companyId

  return (
    <LOVSelectField
      data={companies.companies}
      name={name}
      defaultValue={companyId}
      required={true}
      valueAsNumber={valueAsNumber}
    />
  )
}
