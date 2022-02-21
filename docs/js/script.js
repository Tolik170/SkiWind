const postTextarea = document.querySelector('.box__content textarea');
const postsBody = document.querySelector('.posts__main__body');
const postsContent = document.querySelector('.posts__postContent');
let storageElements = []


const addNewPost = () => {
    if (postTextarea.value === '') {
        alert('enter some text')
    }
    else {
        const newPostsContent = postsContent.cloneNode(true)

        const postText = newPostsContent.querySelector('.item-posts__text').innerHTML = postTextarea.value;
        postTextarea.value = '';

        const postDate = newPostsContent.querySelector('.item-posts__date');
        postDate.innerHTML = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`;

        const postAuthor = newPostsContent.querySelector('.author-block__username').innerHTML = `authorName`;

        storageElements.unshift(newPostsContent.outerHTML);
        localStorage.setItem('post', JSON.stringify(storageElements))
        postsBody.prepend(newPostsContent);

    }

}
const postBtn = document.querySelector('.box__content button').addEventListener('click', addNewPost)

const storagePost = localStorage.getItem('post')
if (storagePost) {
    let storagePostCopy = postsContent.cloneNode(true);
    storagePostCopy.innerHTML = JSON.parse(storagePost);
    postsBody.prepend(storagePostCopy)
    //postsBody.innerHTML = //JSON.parse(localStorage.getItem('post'))
}
