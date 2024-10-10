//synchronous/blocking
const url = "https://jsonplaceholder.typicode.com/users";
//async 
//Promises - fulfilled, rejected,pending
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

//The async await
const getUsers = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getUsers();

//Request methods 
//get-means to retrieve data
//, post-simply means you are creating a data ,
// patch-means you are updating a data
//, delete-removing data example - removing an instagram post of a twitter post
// put- updating  (total overhaul)example-changing a facebook profile in Nigeria to a USA profile(for work)