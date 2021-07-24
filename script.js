async function getData() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=15'
    // 'https://www.madwell.com/interview/index.php?f=data'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const gallery = document.getElementById('gallery');

  data.forEach((image) => {
    const html = `
      <figure>
        <img class="image" src="${image.url}" alt="${image.alt}" />
        ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ''}
      </figure>
      `;

    gallery.insertAdjacentHTML('beforeend', html);
  });

  return data;
}

getData();
