export const schema = gql`
  type Driver {
    id: Int!
    lastName: String!
    firstName: String!
    registration: String
    registrationDate: DateTime
    registratonImage: String
    companyId: Int!
    carId: Int!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    Car: Car!
    Company: Company!
  }

  input DriverOrderBy {
    id: Sort
    firstName: Sort
    lastName: Sort
    registrationDate: Sort
  }

  enum Sort {
    asc
    desc
  }

  type DriverSet {
    drivers: [Driver!]!
    count: Int!
  }

  type Query {
    drivers(
      orderBy: DriverOrderBy
      filter: String
      page: Int
      limit: Int
    ): DriverSet @requireAuth
    driver(id: Int!): Driver @requireAuth
  }

  input CreateDriverInput {
    lastName: String!
    registration: String
    registrationDate: DateTime
    registratonImage: String
    companyId: Int!
    carId: Int!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    firstName: String!
  }

  input UpdateDriverInput {
    lastName: String
    registration: String
    registrationDate: DateTime
    registratonImage: String
    companyId: Int
    carId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    firstName: String
  }

  type Mutation {
    createDriver(input: CreateDriverInput!): Driver! @requireAuth
    updateDriver(id: Int!, input: UpdateDriverInput!): Driver! @requireAuth
    deleteDriver(id: Int!): Driver! @requireAuth
  }
`
