const axios = require('axios');
const cheerio = require('cheerio');

/*const webScraper = async() => {
    const fetchedHTMLfile = await axios.get('https://www.hackerrank.com/domains/algorithms');
    const $$ = cheerio.load(fetchedHTMLfile.data);
    const fetchedquestions = $$('.challenges--list_body .challenge-card');
    fetchedquestions.each((index, element)=>{
        const Title = $$(element).find('.challengecard-title').text();
        const Link = "https://www.hackerrank.com/domains/algorithms"+$$(element).find('a').attr('href');
        console.log('Title : ',Title);
        console.log('Link : ',Link);
    })
    .catch(error=>{
        console.log(error);
    });
}
webScraper();
*/
axios.get('https://www.hackerrank.com/domains/algorithms').then(response =>{
    const fetchedHTMLfile = response.data;
    const $$ = cheerio.load(fetchedHTMLfile);
    const fetchedquestions = $$('.challenges--list_body .challenge-card');
    fetchedquestions.each((index, element)=>{
        const Title = $$(element).find('.challengecard-title').text();
        const Link = "https://www.hackerrank.com/domains/algorithms"+$$(element).find('a').attr('href');
        console.log('Title : ',Title);
        console.log('Link : ',Link);
    })
})

