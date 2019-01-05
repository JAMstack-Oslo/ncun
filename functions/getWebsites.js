const request = require('request');
const brregAPIurl = 'https://data.brreg.no/enhetsregisteret/api/enheter/?page=0&size=100';

exports.handler = (evt,ctx,cb) => {
    checkIfUsingNetlify = () => {
        // Return only companies using netlify
    }
    companiesWithUrl = (companies) => {
        console.log(companies.length);
        // Return only companies with url
        return companies.filter(c => {
            return c.hasOwnProperty('hjemmeside')
        });
    }
    // Static params - 100 companies
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

            /*
            //console.log(typeof r.body)
            const parsedData = JSON.parse(r.body);
            //console.log('Parsed data ',parsedData._embedded.enheter);
            cb(null, {
                statusCode: 200,
                body: parsedData
            })
            */

            /*
            const parseCompanies = new Promise(function(resolve,reject) {
                let companies = companiesWithUrl(parsedData);
                resolve(companies)
                reject(!companies)
            }).then(function(comps) {
                cb(null, {
                    statusCode: 200,
                    body: comps
                })
            }).catch(e => {
                //reject(e)
                throw Error(e)
            });

            parseCompanies();*/

            /*
            companiesWithUrl(parsedData._embedded.enheter, function(error, result) {
                if(error) {
                    console.error(error);
                } else {
                    console.log(result);
                }
            });*/
            

            /*async function serveCompanies(comps) {
                console.log('calling');
                const companies = companiesWithUrl(comps);
                cb(null, {
                    statusCode: 200,
                    body: companies
                })
            }

            serveCompanies(parsedData._embedded.enheter);*/
        }
    })
}