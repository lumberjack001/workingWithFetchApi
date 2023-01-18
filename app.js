const getPosts = document.querySelector('button');
let posts = document.querySelector('#posts')

getPosts.addEventListener('click', e =>{
    e.preventDefault()
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res =>{
        return res.json()
    })    
    .then(data =>{
        console.log(data)
        for(let i = 0; i<21; i++){

            let title = document.createElement('h5')
            let  text = document.createElement('p')
            title.innerText = data[i].title
            text.innerText = data[i].body
            posts.append(title,text)
        }
    })
    .catch(e =>{
        console.log(e)
    })
})