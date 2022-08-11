//comment

let commentUrl = 'https://jsonplaceholder.typicode.com/posts/';
function commentFunction (id) {
    const ull = commentUrl + id + '/comments';
    fetch(ull)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let modal = document.getElementById("myModal");
        let modalTable = document.getElementById('comment-table');
        modal.style.display = "block";
        let span = document.querySelector('span');
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        let commenTab = document.getElementById('comment-section');
        let commenTable = '';
        for(let i = 0; i < data.length; i++) {
            
            commenTable += 
                `<div id="comment">
                    <div class="span" id="name-span">Name</div>
                    <div class="comment-box" id="name-content">${data[i].name}</div><br>
                    <div class="span" id="email-span">Email</div>
                    <div class="comment-box" id="email-content">${data[i].email}</div><br>
                    <div class="span" id="comment-span">Comment</div>
                    <div class="comment-box" id="comment-content">${data[i].body}</div>
                 </div><br><br>`;
            commenTab.innerHTML = (commenTable);
            
        }
        
})
}