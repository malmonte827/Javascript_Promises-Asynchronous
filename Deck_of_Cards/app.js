let BASE_URL = "https://deckofcardsapi.com/api/deck";

// 1.

async function getCard() {
    let res = await axios.get(`${BASE_URL}/new/draw/?count=1`);
    let card = res.data.cards[0];
    console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
}

// 2.

async function getTwoCards() {
    let res = await axios.get(`${BASE_URL}/new/draw/?count=1`);
    c1 = res.data.cards[0];
    deckId = res.data.deck_id;
    let res2 = await axios.get(`${BASE_URL}/new/draw/?count=1`);
    c2 = res2.data.cards[0];
    [c1, c2].forEach((card) => {
        console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
    });
}

// 3.
async function setupGame() {
    let deckId = null;
    let $btn = $("button");
    let $cardImg = $(".card-img");

    let res = await axios.get(`${BASE_URL}/new/shuffle/`)
        deckId = res.data.deck_id;

    $btn.on("click", async function () {
        let res = await axios.get(`${BASE_URL}/${deckId}/draw`)
        let card = res.data.cards[0].image;
        $cardImg.append(`<img src="${card}"></img>`);
        });
    };
setupGame()

