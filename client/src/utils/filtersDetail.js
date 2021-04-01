// export const filterByType = () => {
//   const filteredType = women
//     // .filter((woman) => {
//     //   return woman.type !== null && woman.type !== undefined;
//     // })
//     // .filter((woman) => {
//     //   let type = woman.type;
//     //   return typeFilter === type;
//     // });
//     .filter((woman) => {
//       let type = woman.type;
//       if (typeFilter) {
//         return type === typeFilter;
//       }
//     });
//   if (!typeFilter) {
//     return women;
//   }

//   return filteredType;
// };

export const getType = (women) => {
  let typeFilter = women.map((woman) => woman.type);
  typeFilter = typeFilter.filter(
    (el, index) => typeFilter.indexOf(el) === index
  );
  // console.log(typeFilter);
  return typeFilter;
};
export default getType;
