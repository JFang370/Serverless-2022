const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    async function GetCatPics() {
        let resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
            method: 'GET'
        });
        
        let data = await resp.arrayBuffer()
        // we need to receive it as a buffer since this is an image we are receiving from the API
        // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

        var base64data = Buffer.from(data).toString('base64')
        //put what you want to turn into base64 inside "originaldata"
        //"originaldata" will be encoded in base64.

        return base64data 
    }

    function GetCatNames(){
        var names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
        var random_value = Math.floor(names.length * Math.random())
        var resultName = names[random_value]

        return resultName
    }

    var firstCat = await GetCatPics();
    var name1 = GetCatNames();
    var secondCat = await GetCatPics();
    var name2 = GetCatNames();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            cat1: firstCat,
            cat2: secondCat,
            names: [name1, name2]
         }
    };
}