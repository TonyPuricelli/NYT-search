// takes in parameters from NYT database and returns cleaned up data object with null keys removed
export default params =>
  Object.keys(params)
    .filter(key => params[key])
    .reduce((acc, curr) => {
      acc[curr] = params[curr];
      return acc;
    }, {});