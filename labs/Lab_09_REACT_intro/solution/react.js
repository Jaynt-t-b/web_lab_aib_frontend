let count = 0;
let posts = [];
let tags = [];

function increase() {
  count++;
  console.log(`Счет: ${count}`);
}

function decrease() {
  if (count > 0) {
    count--;
  }
  console.log(`Счет: ${count}`);
}

function addPost(username, text) {
  const post = {
    username,
    text,
    likes: 0,
    tags: [],
  };
  posts.push(post);
}

function likePost(index) {
  if (posts[index]) {
    posts[index].likes++;
    console.log(`Пост ${index} получил лайк. Всего лайков: ${posts[index].likes}`);
  }
}

function deletePost(index) {
  if (posts[index]) {
    posts.splice(index, 1);
    console.log(`Пост ${index} удален.`);
  }
}

function addTagToPost(index, tag) {
  if (posts[index]) {
    posts[index].tags.push(tag);
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
    console.log(`Тег ${tag} добавлен к посту ${index}.`);
  }
}

function filterPostsByTag(tag) {
  const filteredPosts = posts.filter(post => post.tags.includes(tag));
  console.log(`Посты с тегом ${tag}:`, filteredPosts);
}
