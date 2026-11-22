const root = document.documentElement;
const search = document.getElementById('search');
const query = document.getElementById('query');
const feedback = document.getElementById('feedback');
const matches = document.getElementById('matches');
let indexPromise;

function syncComments() {
  const config = { setConfig: { theme: root.dataset.mode } };
  document.querySelector('.giscus-frame')?.contentWindow.postMessage({ giscus: config }, 'https://giscus.app');
}

document.getElementById('mode').addEventListener('click', () => {
  root.dataset.mode = root.dataset.mode === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('kanran-mode', root.dataset.mode); } catch {}
  syncComments();
});
function loadDiscussion(discussion) {
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  Object.assign(script.dataset, discussion.dataset, { theme: root.dataset.mode });
  discussion.append(script);
}

const discussion = document.getElementById('discussion');
if (discussion) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      loadDiscussion(discussion);
    }
  }, { rootMargin: '160px' });
  observer.observe(discussion);
}

async function loadIndex() {
  const response = await fetch(search.dataset.index);
  if (!response.ok) throw new Error('Index unavailable');
  const xml = new DOMParser().parseFromString(await response.text(), 'application/xml');
  if (xml.querySelector('parsererror')) throw new Error('Invalid index');
  return Array.from(xml.querySelectorAll('entry'), entry => {
    const title = entry.querySelector('title').textContent;
    const content = document.createElement('template');
    content.innerHTML = entry.querySelector('content')?.textContent || '';
    const tags = Array.from(entry.querySelectorAll('tag, category'), el => el.textContent).join(' ');
    return { title, url: entry.querySelector('url').textContent, text: [title, content.content.textContent, tags].join(' ').toLowerCase() };
  });
}

async function findMatches() {
  const term = query.value.trim().toLowerCase();
  matches.replaceChildren();
  feedback.textContent = '';
  if (!term) return;
  feedback.textContent = '正在搜索…';
  try {
    indexPromise ??= loadIndex();
    const posts = await indexPromise;
    if (term !== query.value.trim().toLowerCase()) return;
    const found = posts.filter(post => term.split(/\s+/).every(word => post.text.includes(word)));
    feedback.textContent = found.length ? '找到 ' + found.length + ' 篇文章' : '没有找到相关文章';
    matches.replaceChildren(...found.map(post => {
      const link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;
      const item = document.createElement('li');
      item.append(link);
      return item;
    }));
  } catch {
    indexPromise = undefined;
    feedback.textContent = '搜索索引加载失败，请重新输入后再试。';
  }
}

document.getElementById('find').addEventListener('click', () => {
  search.showModal();
  query.focus();
  findMatches();
});
query.addEventListener('input', findMatches);
