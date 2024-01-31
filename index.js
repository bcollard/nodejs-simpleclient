const { parse } = require('url');
const fetch = require('node-fetch');

const endpoint = process.env.ENDPOINT || 'https://httpbin.org/headers';



(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const parsedURL = parse(endpoint);
  const headers = parsedURL.headers || {};

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers,
    });
    const data = await response.text();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
})();

setInterval(() => {
  console.log('waiting...');
}, 10000);