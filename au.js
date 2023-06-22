
let token=""
//pour authentification methode posts
axios.post('https://reqres.in/api/login', 
{
    "email": "charles.morris@reqres.in",
     "password": "pistol",
  })
  .then(function (response) {
    token = response.data.token;
    console.log(response);
    console.log(response.data);
    console.log(response.data.token);
  })
  

  function createNewUser(){

    let config = {
        headers: {
          header1: value,
        }
      }

      
      axios.post('https://reqres.in/api/login', 
{
    "email": "charles.morris@reqres.in",
     "password": "pistol",
  })
  .then(function (response) {
    token = response.data.token;
    console.log(response);
    console.log(response.data);
    console.log(response.data.token);
  })
  
  }