let getWrittertUrl = 'https://jsonplaceholder.typicode.com/users';
let formValue = document.querySelector('form');
let writterName = document.getElementById('writter-name');

//get writter name using async function
const map1 = new Map();
const getWritter = async() => {
    try {
        const response = await fetch(getWrittertUrl);
        console.log(response);
         if(response.ok) {
            const jsResponse = await response.json();
            for(let i = 0; i < jsResponse.length; i++) {
                let options = document.createElement("option");
                options.value = jsResponse[i].id;
                options.text = jsResponse[i].name;
                writterName.appendChild(options);

                //save list of writter in a map for using later
                map1.set(jsResponse[i].id, jsResponse[i].name);
            }
         }
         else throw new Error('request failed');
        }
        catch(err) {
            console.log(err)
        }
        }
getWritter();



//submit and post data
const submitButton = document.getElementById('send-post');
submitButton.addEventListener('click', (e) =>{ 
    e.preventDefault();
    const prePayLoad = new FormData(formValue);
    const payLoad = new URLSearchParams(prePayLoad);
    if(postTitle.value === '') {
        alert('title can not be empty')
        return 0;
    }
    else if(postBody.value === '') {
        alert('Body can not be empty')
        return 0;
    }
    else

    fetch(postUrl, {
        method: 'POST',
        body: payLoad,
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        alert('Post send');
    })
    .catch(err => {
        console.log(err);
    })
    
})


