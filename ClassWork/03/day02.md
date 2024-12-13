assignment 
create a todolist app in js having the features
    - able to add an item to the list 
    - able to delete an item from the list
    - edit an item 


    web Tech

    req res http


    req res cycle

    sends a req to the server
    server receives req

server process the req typically using an app or program
serve returns a response to the client 
client receives the response data and display it


client -- browser -- makes the req 

callback 
brower the will display data (200, 404, 500)


1xx informational response – the request was received, continuing process
2xx successful – the request was successfully received, understood, and accepted
3xx redirection – further action needs to be taken in order to complete the request
4xx client error – the request contains bad syntax or cannot be fulfilled
5xx server error – the server failed to fulfil an apparently valid request


promise 
pending
resolved
rejected


var Promise = new Promise (resolve, rejected)

.then (()=>{ 
do something when it is success 
}).then (()+>{
    do something when it is rejected
}).catch ((=>{
    do something in thec catch 
}))


will receive data 
will not receive data
will get error

var promise = new promise (get)


async 
await
syntactical sugar for promises

Promise(resolve, reject)

async --- async execution
await -- wait for the result of the execution of the method
async and await wraps the promises, Async and await result  in a promise 

