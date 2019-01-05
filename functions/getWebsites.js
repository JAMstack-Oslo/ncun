const request = require('request');
const brregAPIurl = 'https://data.brreg.no/enhetsregisteret/api/enheter/?page=0&size=100';

exports.handler = (evt,ctx,cb) => {
    // Static params
    request.get(brregAPIurl, (e,r) => {
        if(e) {
            cb(e)
            throw Error(e);
        } else {
            console.log(typeof r.body)
            cb(null, {
                statusCode: 200,
                body: r.body
            })
            //return r
        }
    })
}