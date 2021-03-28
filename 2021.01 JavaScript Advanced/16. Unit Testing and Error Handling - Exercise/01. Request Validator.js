function requestValidator(request) {
    let possibleMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriRegex = /^[a-zA-Z0-9.]+$|^\*$/g
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    let message = /^[^<>\\&'"]*$/g

    if (!request.hasOwnProperty('method') || !possibleMethods.includes(request.method)){
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!request.hasOwnProperty('uri') || !request.uri.match(uriRegex)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!request.hasOwnProperty('version') || !version.includes(request.version)){
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!request.hasOwnProperty('message') || !request.message.match(message)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return request;
}

console.log(requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
));
// {
//   method: 'GET',
//   uri: 'svn.public.catalog',
//   version: 'HTTP/1.1',
//   message: ''
// }

console.log(requestValidator({
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
));
// Invalid request header: Invalid Method