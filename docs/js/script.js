const addNewPost = () => {
const postsBody = document.querySelector('.posts__main__body');
const postsContent = document.querySelector('.posts__postContent');
const newPostsContent = postsContent.cloneNode(true)

const postTextarea = document.querySelector('.box__content textarea');
const postText = newPostsContent.querySelector('.item-posts__text').innerHTML = postTextarea.value;
postTextarea.value = '';

const postDate = newPostsContent.querySelector('.item-posts__date');
postDate.innerHTML = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`;

const postAuthor = newPostsContent.querySelector('.author-block__username').innerHTML = `authorName`;


postsBody.prepend(newPostsContent);

}
const postBtn = document.querySelector('.box__content button').addEventListener('click', addNewPost)

