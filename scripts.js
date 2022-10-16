// SELECTORS

const postList = document.getElementById("postList");

// FETCH

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
            // createBox(post);
          });
    })
}

fetchPosts();