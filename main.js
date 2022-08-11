let postUrl = 'https://jsonplaceholder.typicode.com/posts';
let deletePostUrl = 'https://jsonplaceholder.typicode.com/posts/';
const postTable = document.getElementById('t-body');
const postsArray = [];


//show post in table
fetch(postUrl)
.then(response => {
    return response.json();
})
.then(data => {
        postsArray.push(data);
        let trTable = '';
        for(let i = 0; i < data.length; i++){
            trTable+= `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${map1.get(data[i].userId)}</td>
                    <td>
                        <button value="${data[i].id}" id="${data[i].id}" class="button" onclick='deleteFunction(id)'>Delete</button>
                        <button value="${data[i].id}" id="${data[i].id}" class="button" onclick='commentFunction(id)'>comments</button>
                        <button value="${data[i].id}" id="${data[i].id}" class="button" onclick='editFunction(id)'>Edit</button>
                    </td>
                </tr>`;
            postTable.innerHTML = (trTable);
        
    }
})


