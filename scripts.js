// SELECTORS

const postList = document.getElementById("postList");

// FETCH

const createBox = function (post) {
    const postBox = document.createElement("div")
    const postTitle = document.createElement("h3")
    const postDescription = document.createElement("p")

    postTitle.innerText = post.id + ". " + post.title;
    postDescription.innerText = post.body;

    postBox.append(postTitle);
    postBox.append(postDescription);
    postList.append(postBox);
}

const fetchPosts = function () {
    fetch('https://dummyjson.com/posts', {
    method: "GET"})
    .then((result) => result.json())
    .then((result) => {
        const posts = result?.posts || [];
        console.log(result);
        posts.forEach((post) => {
            createBox(post);
          });
    })
}

fetchPosts();