async function getData() {
  const response = await fetch(
    'https://www.madwell.com/interview/index.php?f=data'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const gallery = document.getElementById('gallery');

  data.forEach((image) => {
    const html = `
      <figure>
        <img class="image" src="${image.path}" alt="${image.alt}" />
        ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ''}
      </figure>
      `;

    gallery.insertAdjacentHTML('beforeend', html);
  });

  return data;
}

getData();
