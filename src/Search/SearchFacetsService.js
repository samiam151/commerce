import products from "../data";

export const facets = ["Color", "Designer"];

export const searchFacets = products.reduce((facetsDictionary, product) => {
  facets.forEach(facet => {
    if (!facetsDictionary[facet]) {
      facetsDictionary[facet] = [];
    }
    if (!facetsDictionary[facet].includes(product[facet])) {
      Boolean(product[facet]) && facetsDictionary[facet].push(product[facet]);
    }
  });
  return facetsDictionary;
}, {});

export const calculateSearchProducts = searchContext => {
  // If there are no active facets, return everything
  let facets = searchContext.activeFacets;
  let facetsWithValues = [];
  for (let facet in facets) {
    let values = facets[facet];
    values.length && facetsWithValues.push({ [facet]: values });
  }
  if (!facetsWithValues.length) return products;

  // Determine which products math the active facets
  // Each product must match at lesat one option in a facet group, per active facet group
  const baseproducts = facetsWithValues.reduce((matchingProducts, facet) => {
    let property = Object.keys(facet)[0];
    matchingProducts.forEach(product => {
      if (!facets[property].includes(product[property])) {
        matchingProducts.delete(product);
      }
    });
    return matchingProducts;
  }, new Set(products));
  return [...baseproducts];
};
