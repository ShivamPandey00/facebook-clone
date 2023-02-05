
const form = document.querySelector('#post-form');
const postsContainer = document.querySelector('#posts');

form.addEventListener('submit', e => {
  e.preventDefault();

  const text = form.querySelector('#post-text').value;
  if (!text) return;

  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = text;
  postsContainer.appendChild(post);

  form.reset();
});

