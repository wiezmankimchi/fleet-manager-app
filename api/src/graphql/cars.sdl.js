export const schema = gql`
  type Car {
    id: Int!
    registration: String!
    registrationDate: DateTime!
    carModelId: Int!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    Driver: [Driver]!
  }

  type Query {
    cars: [Car!]! @requireAuth
    car(id: Int!): Car @requireAuth
  }

  input CreateCarInput {
    registration: String!
    registrationDate: DateTime!
    carModelId: Int!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateCarInput {
    registration: String
    registrationDate: DateTime
    carModelId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
