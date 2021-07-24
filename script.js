// fetch('https://api.imgflip.com/get_memes', {
//   method: 'GET',
// })
//   .then((response) => {
//     console.log(response.json());
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function getData() {
  const response = await fetch(
    // 'https://jsonplaceholder.typicode.com/photos?_limit=15'
    'https://www.madwell.com/interview/index.php?f=data'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const gallery = document.getElementById('gallery');

  data.forEach((image) => {
    // const img = document.createElement('img');
    // img.classList.add('image');
    // img.setAttribute('src', image.url);
    // gallery.append(img);

    const html = `
      <img
      class="image"
      src="${image.path}"
      alt="${image.alt}"
      ${image.caption ? `data-caption=${image.caption}` : ''}
      >
      `;

    // <figcaption>MDN Logo</figcaption>
    gallery.insertAdjacentHTML('beforeend', html);
  });

  return data;
}

getData().then((data) => console.log(data));
