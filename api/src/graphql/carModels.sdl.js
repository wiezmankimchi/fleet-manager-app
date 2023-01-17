export const schema = gql`
  type CarModel {
    id: Int!
    name: String!
    heName: String
    carBrandId: Int!
    createdAt: DateTime!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
    CarBrand: CarBrand!
  }

  input CarModelsOrderBy {
    id: Sort
    name: Sort
    heName: Sort
  }

  enum Sort {
    asc
    desc
  }

  type CarModelSet {
    carModels: [CarModel!]!
    count: Int!
  }

  type Query {
    carModels(
      orderBy: CarModelsOrderBy
      filter: String
      page: Int
      limit: Int
    ): CarModelSet @skipAuth
    carModel(id: Int!): CarModel @requireAuth
  }

  input CreateCarModelInput {
    name: String!
    heName: String
    carBrandId: Int!
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  input UpdateCarModelInput {
    name: String
    heName: String
    carBrandId: Int
    updateAt: DateTime
    createdBy: Int
    updatedBy: Int
  }

  type Mutation {
    createCarModel(input: CreateCarModelInput!): CarModel! @requireAuth
    updateCarModel(id: Int!, input: UpdateCarModelInput!): CarModel!
      @requireAuth
    deleteCarModel(id: Int!): CarModel! @requireAuth
  }
`
