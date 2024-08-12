document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/books')

    .then(res => res.json())
    .then(data =>{ 
        data.forEach(bookObject=>{
            // console.log(bookObject)
            const listUl = document.getElementById('list')
            const bookLi = document.createElement('li')
            bookLi.innerText = bookObject.title
            listUl.append(bookLi)
            // console.log(bookLi)


         bookLi.addEventListener('click', (e)=>{
// console.log(bookLi)
const showPanel = document.getElementById('show-panel')
const bookImg = document.createElement('img')
bookImg.src = bookObject.img_url
showPanel.append(bookImg)

const bookTitle = document.createElement('h2')
bookTitle.textContent = bookObject.title
showPanel.append(bookTitle)
// 

const subTitle = document.createElement('h3')
subTitle.textContent = bookObject.subtitle 
showPanel.append(subTitle)

const author = document.createElement('h3')
author.textContent = bookObject.author
showPanel.append(author)

const bookDescrip = document.createElement('p')
bookDescrip.textContent = bookObject.description
showPanel.append(bookDescrip)


bookObject.users.forEach(userObject =>{
    const userNames = document.createElement('li')
    userNames.textContent = userObject.username
    // console.log(bookObject.users)
showPanel.append(userNames)



})

const body = document.querySelector('body')
const likeButton =document.createElement('button')
likeButton.innerText = 'LIKE'
body.append(likeButton)

likeButton.addEventListener('click', (e)=>{
    // console.log(bookObject.users)
    fetch(`http://localhost:3000/books/${bookObject.id}`, {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            users: [...bookObject.users,{"id":1, "username":"pouros"}]

            
        })

})
.then(res => res.json())
.then(data =>  {
    const showPanel = document.getElementById('show-panel')
    const name = document.createElement('li')
    name.innerText = data.users[data.users.length - 1].username
    // console.log(data.users[data.users.length - 1].username)
    showPanel.append(name)

    
})
    
 })
})
})
})




    })
   
  
 

