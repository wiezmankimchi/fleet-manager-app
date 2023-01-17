import { useTranslation, Trans } from 'react-i18next'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyForm from 'src/components/Company/CompanyForm'

export const QUERY = gql`
  query EditCompanyById($id: Int!) {
    company: company(id: $id) {
      id
      name
      address1
      address2
      city
      zipcode
      country
      createdAt
      updateAt
      createdBy
      updatedBy
    }
  }
`
const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompanyMutation($id: Int!, $input: UpdateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
      id
      name
      address1
      address2
      city
      zipcode
      country
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

export const Success = ({ company }) => {
  const { t, i18n } = useTranslation()
  const [updateCompany, { loading, error }] = useMutation(
    UPDATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Company updated')
        navigate(routes.companies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCompany({ variables: { id, input } })
  }
  document.body.dir = i18n.dir()

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          {t('Edit Company ')}
          {company?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CompanyForm
          company={company}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
