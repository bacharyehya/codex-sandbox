const https = require('https');

const url = 'https://official-joke-api.appspot.com/random_joke';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const joke = JSON.parse(data);
      console.log(`${joke.setup}\n${joke.punchline}`);
    } catch (err) {
      console.error('Failed to parse joke response:', err.message);
      process.exitCode = 1;
    }
  });
}).on('error', (err) => {
  console.error('Failed to fetch joke:', err.message);
  process.exitCode = 1;
});
