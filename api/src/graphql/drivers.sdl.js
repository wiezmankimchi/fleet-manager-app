export const schema = gql`
  type Driver {
    id: Int!
    lastName: String!
    registration: String
    registrationDate: DateTime
    registratonImage: String
    companyId: Int
    carId: Int
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    firstName: String!
    Company: Company
    Car: Car
  }
  enum Sort {
    asc
    desc
  }

  input DriverOrderBy {
    id: Sort
    firstname: Sort
    lastName: Sort
  }

  type DriversSet {
    drivers: [Driver!]!
    count: Int!
  }

  type Query {
    drivers(
      orderBy: DriverOrderBy
      filter: String
      page: Int
      limit: Int
    ): DriversSet @requireAuth
    driver(id: Int!): Driver @requireAuth
  }

  input CreateDriverInput {
    lastName: String!
    registration: String
    registrationDate: DateTime
    registratonImage: String
    companyId: Int
    carId: Int
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
