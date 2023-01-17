export const schema = gql`
  type CarBrand {
    id: Int!
    name: String!
    heName: String
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    CarModel: [CarModel]!
  }

  input CarBrandOrderBy {
    id: Sort
    name: Sort
    heName: Sort
  }

  enum Sort {
    asc
    desc
  }

  type CarBrandSet {
    carBrands: [CarBrand!]!
    count: Int!
  }

  type Query {
    carBrands(
      orderBy: CarBrandOrderBy
      filter: String
      page: Int
      limit: Int
    ): CarBrandSet @skipAuth
    carBrand(id: Int!): CarBrand @requireAuth
  }

  input CreateCarBrandInput {
    name: String!
    heName: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateCarBrandInput {
    name: String
    heName: String
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCarBrand(input: CreateCarBrandInput!): CarBrand! @requireAuth
    updateCarBrand(id: Int!, input: UpdateCarBrandInput!): CarBrand!
      @requireAuth
    deleteCarBrand(id: Int!): CarBrand! @requireAuth
  }
`
