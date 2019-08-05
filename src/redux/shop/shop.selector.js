import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])

)  

//this is not working but the upper one is working when we remove curley bracets..why ??

// export const  selectCollection = collectionUrlParam =>{
//     createSelector(
//         [selectCollections],
//         collections =>
//           collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//           )
//       )
// }
