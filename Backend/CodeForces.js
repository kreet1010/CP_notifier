const axios = require('axios');
const cheerio = require('cheerio');

let url = 'https://codeforces.com/problemset/page/'+pageNo.toString();
    axios.get(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const problems = $('.problems tbody tr');

        problems.each((index, element) => {
          const title = $(element).find('td:eq(1)').text().trim();
          const link = 'https://codeforces.com' + $(element).find('td:eq(0) a').attr('href');
          console.log('Title:', title);
          console.log('Link:', link);
        });
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
/*
for(let pageNo = 1; pageNo<= 89; pageNo++){
    let url = 'https://codeforces.com/problemset/page/'+pageNo.toString();
    axios.get(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const problems = $('.problems tbody tr');

        problems.each((index, element) => {
          const title = $(element).find('td:eq(1)').text().trim();
          const link = 'https://codeforces.com' + $(element).find('td:eq(0) a').attr('href');
          console.log('Title:', title);
          console.log('Link:', link);
        });
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
}*/