const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    async function GetCatPics(){
        const resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
            method: 'GET'
        });
        
        const data = await resp.arrayBuffer()
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

    var cat1 = GetCatPics();
    var cat1_Name = GetCatNames();
    var cat2 = GetCatPics();
    var cat2_Name = GetCatNames();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            cat1: cat1,
            cat2: cat2,
            names: [cat1_Name, cat2_Name]
         }
    };
}