import Company from 'src/components/Company/Company'

export const QUERY = gql`
  query FindCompanyById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Company not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ company }) => {
  return <Company company={company} />
}
