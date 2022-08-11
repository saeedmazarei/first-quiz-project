//edit post
const postTitle = document.getElementById('title');
const postBody = document.getElementById('article');
const wrtName = document.getElementById('writter-name');
function editFunction(id)  {
    window.location = '#form-section';
    postTitle.value = postsArray[0][id-1].title
    postBody.value = postsArray[0][id-1].body;
    wrtName.value = postsArray[0][id-1].userId;
}
