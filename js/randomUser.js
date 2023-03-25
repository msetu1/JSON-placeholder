const loadUser = () => {
    const url = `https://randomuser.me/api/?results=10`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results))
};
const displayUser = (users) => {
    users.forEach(user => {
        console.log(user)
        const userContainer = document.getElementById('users-container')
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>Name :</h3>
        <p>Email : ${user.email}</p>
        <p>User Location :${user.location.city} ${user.location.country}</p>
        `;
        userContainer.appendChild(userDiv)
    })
}
loadUser()