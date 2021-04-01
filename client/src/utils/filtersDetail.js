export const getType = (women) => {
  let typeFilter = women.map((woman) => woman.type);
  typeFilter = typeFilter.filter(
    (el, index) => typeFilter.indexOf(el) === index
  );
  // console.log(typeFilter);
  return typeFilter;
};

export const getMaterial = (women) => {
  let materialFilter = women.map((woman) => woman.material);
  materialFilter = materialFilter.filter(
    (el, index) => materialFilter.indexOf(el) === index
  );
  // console.log(materialFilter);
  return materialFilter;
};
