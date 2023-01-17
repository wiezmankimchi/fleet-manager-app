import { useTranslation } from 'react-i18next'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyForm from 'src/components/Company/CompanyForm'

const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompanyMutation($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`

const NewCompany = () => {
  const { t, i18n } = useTranslation()
  const [createCompany, { loading, error }] = useMutation(
    CREATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Company created')
        navigate(routes.companies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCompany({ variables: { input } })
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">{t('New Company')}</h2>
      </header>
      <div className="rw-segment-main">
        <CompanyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCompany
