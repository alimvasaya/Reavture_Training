const getUserInfo=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data =await response.json();
    return data;
}

const getUsersData = async () => {
    const data = await getUserInfo(); 
    const UsersList = document.getElementById("Users");

    data.map(user => {
        const h1 = document.createElement("h1");
        const li = document.createElement("li");

        h1.innerHTML =`Name: ${user.name} <br>`
    
        li.innerHTML = `
            Username: ${user.username} <br>
            Email: <a href="mailto:${user.email}">${user.email}</a> <br>
            City: ${user.address.city} <br>
            Geo Location: Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng} <br><br>
        `;
        UsersList.appendChild(h1);
        UsersList.appendChild(li);


        h1.addEventListener("click", () => {
            h1.remove(); 
            li.remove();
        });
    });
};