const loadUsers = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
};
const displayUsers = (users) => {
    users.forEach(user => {
        console.log(user)
        const usersContainer = document.getElementById('user-container')
        const usersDiv = document.createElement('div')
        usersDiv.classList.add('user')
        usersDiv.innerHTML = `
        <h3>ID :${user.id}</h3>
        <h4>Name :${user.name}</h4>
        <p>Email :${user.email}</p>
        `;
        usersContainer.appendChild(usersDiv)
    })
}
loadUsers();