/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDog = /* GraphQL */ `
  subscription OnCreateDog($filter: ModelSubscriptionDogFilterInput) {
    onCreateDog(filter: $filter) {
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
export const onUpdateDog = /* GraphQL */ `
  subscription OnUpdateDog($filter: ModelSubscriptionDogFilterInput) {
    onUpdateDog(filter: $filter) {
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
export const onDeleteDog = /* GraphQL */ `
  subscription OnDeleteDog($filter: ModelSubscriptionDogFilterInput) {
    onDeleteDog(filter: $filter) {
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
export const onCreateDogItem = /* GraphQL */ `
  subscription OnCreateDogItem($filter: ModelSubscriptionDogItemFilterInput) {
    onCreateDogItem(filter: $filter) {
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
export const onUpdateDogItem = /* GraphQL */ `
  subscription OnUpdateDogItem($filter: ModelSubscriptionDogItemFilterInput) {
    onUpdateDogItem(filter: $filter) {
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
export const onDeleteDogItem = /* GraphQL */ `
  subscription OnDeleteDogItem($filter: ModelSubscriptionDogItemFilterInput) {
    onDeleteDogItem(filter: $filter) {
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
