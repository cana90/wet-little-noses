/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDog = /* GraphQL */ `
  mutation CreateDog(
    $input: CreateDogInput!
    $condition: ModelDogConditionInput
  ) {
    createDog(input: $input, condition: $condition) {
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
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
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
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
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
export const createDogItem = /* GraphQL */ `
  mutation CreateDogItem(
    $input: CreateDogItemInput!
    $condition: ModelDogItemConditionInput
  ) {
    createDogItem(input: $input, condition: $condition) {
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
export const updateDogItem = /* GraphQL */ `
  mutation UpdateDogItem(
    $input: UpdateDogItemInput!
    $condition: ModelDogItemConditionInput
  ) {
    updateDogItem(input: $input, condition: $condition) {
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
export const deleteDogItem = /* GraphQL */ `
  mutation DeleteDogItem(
    $input: DeleteDogItemInput!
    $condition: ModelDogItemConditionInput
  ) {
    deleteDogItem(input: $input, condition: $condition) {
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
