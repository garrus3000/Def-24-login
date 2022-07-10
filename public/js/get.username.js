fetch("/getUserName")
    .then(response => response.json())
    .then(data => {
        userName = data.user;
        document.getElementById("userName").innerHTML = userName;
    })
    .catch(error => console.log(error));