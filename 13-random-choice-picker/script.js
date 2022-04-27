const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // console.log(input);
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  // console.log(tags);
  
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  // console.log(123);
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = picRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = picRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function picRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
