let rand = document.getElementById("rand")

fetch('https://randomuser.me/api/?results=20')
.then((response) => response.json())
.then((data) => {
    for(let i = 0; i < data.results.length; i++){
 rand.innerHTML += 
 
    `
   
    <div class="col col-12 col-sm-12 col-md-6 col-lg-3 ">
    <div  id="res">
    <img id="img" src=" ${data.results[i].picture.large}"> 
        <div id="details">
        <p>Name: ${data.results[i].name.title}
        ${data.results[i].name.first}
        ${data.results[i].name.last}
        </p>
        <p>Email: ${data.results[i].email}</p>
        <p>Age: ${data.results[i].dob.age}</p>
        <p>Address: ${data.results[i].location.street.number}
        ${data.results[i].location.street.name}
        </p>
        <p>Phone Number: ${data.results[i].phone}</p>
        <p>Password: ${data.results[i].login.password}</p>
        </div>
        </div>
    </div>`
    }
 
})