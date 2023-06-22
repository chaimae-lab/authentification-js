

//pour authentification methode posts
axios.post('https://reqres.in/api/login', 
{
    "email": "charles.morris@reqres.in",
     "password": "pistol",
  })
  .then(function (response) {
    let token = response.data.token;
    //on stocke token in local storage
    localStorage.setItem("token" ,token)
    console.log(response);
    console.log(response.data);
    console.log(response.data.token);

    createNewUser()
  })
  




  ///////////////////////////////////// create new user 



  ////parce que on peut pas faire crud operation c'est on a pas de token (autorization)/alors 9bl il faut faire authentification 
        //alors l'appel de cette function apres l'authentification et l'avoir de token
  function createNewUser(){
    
    let token =localStorage.getItem("token")
    let config = {
        headers: {
           //on stocke token in localStorage
          //token c'est la variable deja declarer qui prend le token de user lidar authentification 
          "Authorization": `Bearer ${token}`,
        }
      }

      
      axios.post('https://reqres.in/api/users', 
{
        "name": "chaimae",
        "job": "teacher",

  })
  .then(function (response) {
    
    console.log(response);
    console.log(response.data);
  })
  
  }