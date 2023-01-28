import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { SelectField, useForm } from '@redwoodjs/forms'

export const QUERY = gql`
  query FindCompanies($page: Int, $limit: Int, $orderBy: CompaniesOrderBy) {
    companies(page: $page, limit: $limit, orderBy: $orderBy) {
      count
      companies {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ companies, defaultValue }) => {
  const { t } = useTranslation()
  const { setValue } = useForm()

  useEffect(() => {
    setTimeout(() => {
      setValue('companyId', defaultValue)
    }, 2000)
  }, [setValue])

  return (
    <>
      <SelectField
        multiple={false}
        name="companyId"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        defaultValue={defaultValue}
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
        <option key={0} value={0}>
          {t('Please select an option')}
        </option>
        {companies.companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </SelectField>
    </>
  )
}
