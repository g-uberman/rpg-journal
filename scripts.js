// SELECTORS

const postList = document.getElementById("postList");

// FETCH

const createBox = function (post) {
    const postBox = document.createElement("div")
    const postTitle = document.createElement("h3")
    postTitle.innerText = post.title;
    postBox.append(postTitle);
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
            console.log(post);
            console.log("test");
            createBox(post);
          });
    })
}

fetchPosts();