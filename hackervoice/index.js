module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var password = req.query.password;
    context.log(password)

    let your_response = ""
    if (password === "letmein"){
        your_response = "Access granted."
    }
    else{
        your_response = "Access denied."
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: your_response
    };
}