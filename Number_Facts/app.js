let BASE_URL = "http://numbersapi.com";

// 1.

let fav_num = 7;
async function numFact() {
    let res = await axios.get(`${BASE_URL}/${fav_num}/?json`);
    console.log(res);
}
// 2.

let fav_nums = [1, 2, 3];
async function getNums(){
let res = await axios.get(`${BASE_URL}/${fav_nums}?json`)
    console.log(res);
}
// 3.

async function numFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => axios.get(`${BASE_URL}/${fav_num}?json`))
      );

    facts.forEach(facts => {
        $('body').append(`<p>${facts.data.text}</p>`);
      });
    }