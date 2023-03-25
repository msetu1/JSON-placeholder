// Example:1 posts 
const loadPosts = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
        .then(res => res.json()
            .then(data => displayPosts(data)))
};
const displayPosts = (posts) => {
    const postsContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post)
        const postsDiv = document.createElement('div')
        postsDiv.classList.add('post')
        postsDiv.innerHTML = `
        <h3>Id-${post.id}</h3>
        <h4>Title: title${post.title}</h4>
        <p>Body :body${post.body}</p>
        <button>Details</button>
        `;
        postsContainer.appendChild(postsDiv);
    }
}
loadPosts();