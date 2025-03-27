// Fetch API

fetch("API.txt")
.then(response =>
{
    if(!response.ok){
        throw new Error('Network is not Responding')
    }
    return response.json();
})
.then(data=>console.log(data))
.catch(error => console.error(error));