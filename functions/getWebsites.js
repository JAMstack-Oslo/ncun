const request = require('request');
const brregAPIurl = 'https://data.brreg.no/enhetsregisteret/api/enheter/?page=0&size=100';

exports.handler = (evt,ctx,callback) => {

    checkIfUsingNetlify = () => {
        // Return only companies using netlify
    }
    companiesWithUrl = (companies) => {
        console.log(companies.length);
        // Return only companies with url
        return companies.filter(c => {
            return c.hasOwnProperty('hjemmeside')
        }).map(c => {
            return {name: c.navn, website: c.hjemmeside}
        });
    }
    // Static params - 100 companies
    /*const find = new Promise(function(resolve,reject) {
        request.get(brregAPIurl, (e,r) => {
            if(e) {
                console.error(e);
                reject(e)
            } else {
                const parsedData = JSON.parse(r.body);
                resolve(parsedData._embedded.enheter)
            }
        })
    })
    find.then(function(companies) {
        console.log("Companies ",companies.length);
        cb(null, {
            statusCode: 200,
            body: JSON.stringify({'message':'Hello World!'}):
        })
    })
    find.catch(e => {
        console.error('Error called ',e);
        cb(null,{statusCode: 500, body: e});
    })

    find();*/

    
    request.get(brregAPIurl, (e,r) => {
        if(e) {
            console.error(e);
            //reject(e)
            callback(e);
        } else {
            const parsedData = JSON.parse(r.body);
            const comps = companiesWithUrl(parsedData._embedded.enheter);

            console.log("Comps ",comps.length)

            callback(null, {
                statusCode: 200,
                body: JSON.stringify(comps)
            })
        }
    })

}