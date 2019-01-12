const request = require("request");

const exampleURL =
  "https://data.brreg.no/enhetsregisteret/api/enheter/?page=0&size=100";

exports.handler = (evt, ctx, callback) => {
  // TODO: use isun to filter the list
  const companiesWithUrl = companies => {
    return companies
      .filter(c => c.hasOwnProperty("hjemmeside"))
      .map(c => {
        return { name: c.navn, website: c.hjemmeside };
      });
  };

  request.get(exampleURL, (e, r) => {
    if (e) {
      callback(null, { statusCode: 400, body: e.toString() });
    } else {
      const parsedData = JSON.parse(r.body);
      const comps = companiesWithUrl(parsedData._embedded.enheter);
      callback(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        statusCode: 200,
        body: JSON.stringify(comps)
      });
    }
  });
};
