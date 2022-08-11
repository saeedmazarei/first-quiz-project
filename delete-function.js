//delete posts
function deleteFunction(id) {
    deletePostUrl += id;
    fetch(deletePostUrl, {method: 'DELETE'})
    .then(() => {
        alert('post Deleted');
        deletePostUrl = 'https://jsonplaceholder.typicode.com/posts/';
    })
  }
