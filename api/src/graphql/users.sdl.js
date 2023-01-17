export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String
    firstname: String
    lastname: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    role: Role!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    users(orderBy: LinkOrderByInput): [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    email: String
    firstname: String
    lastname: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    role: Role!
    createdAt: DateTime!
    createdBy: Int
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
  }

  input UpdateUserInput {
    username: String
    email: String
    firstname: String
    lastname: String
    hashedPassword: String
    salt: String
    resetToken: String
    role: Role
    updateAt: DateTime
    updatedBy: Int
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
  input LinkOrderByInput {
    id: Sort
    name: Sort
    email: Sort
  }

  enum Sort {
    asc
    desc
  }
`
