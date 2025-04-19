/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
      id
      name
      image
      age
      breed
      description
      category
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        age
        breed
        description
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDogItem = /* GraphQL */ `
  query GetDogItem($id: ID!) {
    getDogItem(id: $id) {
      id
      name
      price
      purchased
      dogID
      createdAt
      updatedAt
      dogItemsId
      __typename
    }
  }
`;
export const listDogItems = /* GraphQL */ `
  query ListDogItems(
    $filter: ModelDogItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        purchased
        dogID
        createdAt
        updatedAt
        dogItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const dogItemsByDogID = /* GraphQL */ `
  query DogItemsByDogID(
    $dogID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDogItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dogItemsByDogID(
      dogID: $dogID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        purchased
        dogID
        createdAt
        updatedAt
        dogItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
