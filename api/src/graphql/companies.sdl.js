export const schema = gql`
  type Company {
    id: Int!
    name: String!
    address1: String
    address2: String
    city: String!
    zipcode: String!
    country: String!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    Driver: [Driver]!
  }

  input CompaniesOrderBy {
    id: Sort
    name: Sort
  }

  enum Sort {
    asc
    desc
  }

  type CompaniesSet {
    companies: [Company!]!
    count: Int!
  }

  type Query {
    companies(
      orderBy: CompaniesOrderBy
      filter: String
      page: Int
      limit: Int
    ): CompaniesSet @skipAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    address1: String
    address2: String
    city: String!
    zipcode: String!
    country: String!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateCompanyInput {
    name: String
    address1: String
    address2: String
    city: String
    zipcode: String
    country: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
