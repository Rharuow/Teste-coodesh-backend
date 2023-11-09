# Fullstack Challenge 🏅 Space X API

> This is a challenge by <a href="https://coodesh.com/">Coodesh</a>

## Backend teste

### STACK

<a href="https://nodejs.org/en">NodeJs</a> with <a href="https://expressjs.com/pt-br/">express</a> using <a href="https://www.mongodb.com/pt-br">mongodb</a> hosted at <a href="https://cloud.mongodb.com/">Atlas MongoDB</a>.

#### Language

- TypeScript

#### Install and Start

```bash
git clone git@github.com:Rharuow/Teste-coodesh-backend.git && cd ./Teste-coodesh-backend && npm i && npm run dev
```

> **_NOTE:_** .env file must have BASE_URL='http://localhost' and MONGODB_CONNECTION. Create account on <a href="https://www.mongodb.com/atlas/database">atlas db</a> and follow the [ATTACHMENT](#attachment) section to generate your MONGODB_CONNECTION.

- rotas:

<details  open>

<summary>[GET] /</summary>

<p>

Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"

</p>

```json
{
  "message": "Fullstack Challenge 🏅 - Space X API"
}
```

</details>

<details  open>

<summary>[GET] /stats/bar</summary>

<p>

Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"

</p>

```json
{
  "rockets": [
    {
      "_id": "6538412ec4a89dbbda6a559f",
      "id": "5e9d0d95eda69973a809d1ec",
      "name": "Falcon 9",
      "color": "rgb(99, 156, 206)",
      "launches": [
        {
          "year": "2010",
          "success": true,
          "id": "5eb87cddffd86e000604b32f",
          "_id": "6538412ec4a89dbbda6a55a0"
        },
        {
          "year": "2010",
          "success": true,
          "id": "5eb87cdeffd86e000604b330",
          "_id": "6538412ec4a89dbbda6a55a1"
        },
        {
          "year": "2012",
          "success": true,
          "id": "5eb87cdfffd86e000604b331",
          "_id": "6538412ec4a89dbbda6a55a2"
        },
        {
          "year": "2012",
          "success": true,
          "id": "5eb87ce0ffd86e000604b332",
          "_id": "6538412ec4a89dbbda6a55a3"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce1ffd86e000604b333",
          "_id": "6538412ec4a89dbbda6a55a4"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce1ffd86e000604b334",
          "_id": "6538412ec4a89dbbda6a55a5"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce2ffd86e000604b335",
          "_id": "6538412ec4a89dbbda6a55a6"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce3ffd86e000604b336",
          "_id": "6538412ec4a89dbbda6a55a7"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce4ffd86e000604b337",
          "_id": "6538412ec4a89dbbda6a55a8"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce4ffd86e000604b338",
          "_id": "6538412ec4a89dbbda6a55a9"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce5ffd86e000604b339",
          "_id": "6538412ec4a89dbbda6a55aa"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce6ffd86e000604b33a",
          "_id": "6538412ec4a89dbbda6a55ab"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce7ffd86e000604b33b",
          "_id": "6538412ec4a89dbbda6a55ac"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ce8ffd86e000604b33c",
          "_id": "6538412ec4a89dbbda6a55ad"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ceaffd86e000604b33d",
          "_id": "6538412ec4a89dbbda6a55ae"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ceaffd86e000604b33e",
          "_id": "6538412ec4a89dbbda6a55af"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cecffd86e000604b33f",
          "_id": "6538412ec4a89dbbda6a55b0"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cedffd86e000604b340",
          "_id": "6538412ec4a89dbbda6a55b1"
        },
        {
          "year": "2015",
          "success": false,
          "id": "5eb87ceeffd86e000604b341",
          "_id": "6538412ec4a89dbbda6a55b2"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cefffd86e000604b342",
          "_id": "6538412ec4a89dbbda6a55b3"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf0ffd86e000604b343",
          "_id": "6538412ec4a89dbbda6a55b4"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf2ffd86e000604b344",
          "_id": "6538412ec4a89dbbda6a55b5"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf3ffd86e000604b345",
          "_id": "6538412ec4a89dbbda6a55b6"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf5ffd86e000604b346",
          "_id": "6538412ec4a89dbbda6a55b7"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf6ffd86e000604b347",
          "_id": "6538412ec4a89dbbda6a55b8"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf8ffd86e000604b348",
          "_id": "6538412ec4a89dbbda6a55b9"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf9ffd86e000604b349",
          "_id": "6538412ec4a89dbbda6a55ba"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cfaffd86e000604b34a",
          "_id": "6538412ec4a89dbbda6a55bb"
        },
        {
          "year": "2016",
          "success": false,
          "id": "5eb87cfbffd86e000604b34b",
          "_id": "6538412ec4a89dbbda6a55bc"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfdffd86e000604b34c",
          "_id": "6538412ec4a89dbbda6a55bd"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfeffd86e000604b34d",
          "_id": "6538412ec4a89dbbda6a55be"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfeffd86e000604b34e",
          "_id": "6538412ec4a89dbbda6a55bf"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d00ffd86e000604b34f",
          "_id": "6538412ec4a89dbbda6a55c0"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d01ffd86e000604b350",
          "_id": "6538412ec4a89dbbda6a55c1"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d01ffd86e000604b351",
          "_id": "6538412ec4a89dbbda6a55c2"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d03ffd86e000604b352",
          "_id": "6538412ec4a89dbbda6a55c3"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d04ffd86e000604b353",
          "_id": "6538412ec4a89dbbda6a55c4"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d05ffd86e000604b354",
          "_id": "6538412ec4a89dbbda6a55c5"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d06ffd86e000604b355",
          "_id": "6538412ec4a89dbbda6a55c6"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d07ffd86e000604b356",
          "_id": "6538412ec4a89dbbda6a55c7"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d08ffd86e000604b357",
          "_id": "6538412ec4a89dbbda6a55c8"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d09ffd86e000604b358",
          "_id": "6538412ec4a89dbbda6a55c9"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0affd86e000604b359",
          "_id": "6538412ec4a89dbbda6a55ca"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0cffd86e000604b35a",
          "_id": "6538412ec4a89dbbda6a55cb"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0dffd86e000604b35b",
          "_id": "6538412ec4a89dbbda6a55cc"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0effd86e000604b35c",
          "_id": "6538412ec4a89dbbda6a55cd"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0fffd86e000604b35d",
          "_id": "6538412ec4a89dbbda6a55ce"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d10ffd86e000604b35e",
          "_id": "6538412ec4a89dbbda6a55cf"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d11ffd86e000604b35f",
          "_id": "6538412ec4a89dbbda6a55d0"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d14ffd86e000604b361",
          "_id": "6538412ec4a89dbbda6a55d1"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d15ffd86e000604b362",
          "_id": "6538412ec4a89dbbda6a55d2"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d16ffd86e000604b363",
          "_id": "6538412ec4a89dbbda6a55d3"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d16ffd86e000604b364",
          "_id": "6538412ec4a89dbbda6a55d4"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d18ffd86e000604b365",
          "_id": "6538412ec4a89dbbda6a55d5"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d19ffd86e000604b366",
          "_id": "6538412ec4a89dbbda6a55d6"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1affd86e000604b367",
          "_id": "6538412ec4a89dbbda6a55d7"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1bffd86e000604b368",
          "_id": "6538412ec4a89dbbda6a55d8"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1cffd86e000604b369",
          "_id": "6538412ec4a89dbbda6a55d9"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1effd86e000604b36a",
          "_id": "6538412ec4a89dbbda6a55da"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1fffd86e000604b36b",
          "_id": "6538412ec4a89dbbda6a55db"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d20ffd86e000604b36c",
          "_id": "6538412ec4a89dbbda6a55dc"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d22ffd86e000604b36d",
          "_id": "6538412ec4a89dbbda6a55dd"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d23ffd86e000604b36e",
          "_id": "6538412ec4a89dbbda6a55de"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d24ffd86e000604b36f",
          "_id": "6538412ec4a89dbbda6a55df"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d25ffd86e000604b370",
          "_id": "6538412ec4a89dbbda6a55e0"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d26ffd86e000604b371",
          "_id": "6538412ec4a89dbbda6a55e1"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d27ffd86e000604b372",
          "_id": "6538412ec4a89dbbda6a55e2"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d28ffd86e000604b373",
          "_id": "6538412ec4a89dbbda6a55e3"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2affd86e000604b374",
          "_id": "6538412ec4a89dbbda6a55e4"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2bffd86e000604b375",
          "_id": "6538412ec4a89dbbda6a55e5"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2effd86e000604b377",
          "_id": "6538412ec4a89dbbda6a55e6"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d30ffd86e000604b378",
          "_id": "6538412ec4a89dbbda6a55e7"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d31ffd86e000604b379",
          "_id": "6538412ec4a89dbbda6a55e8"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d36ffd86e000604b37b",
          "_id": "6538412ec4a89dbbda6a55e9"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d37ffd86e000604b37c",
          "_id": "6538412ec4a89dbbda6a55ea"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d39ffd86e000604b37d",
          "_id": "6538412ec4a89dbbda6a55eb"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d39ffd86e000604b37e",
          "_id": "6538412ec4a89dbbda6a55ec"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d3bffd86e000604b37f",
          "_id": "6538412ec4a89dbbda6a55ed"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3cffd86e000604b380",
          "_id": "6538412ec4a89dbbda6a55ee"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3dffd86e000604b381",
          "_id": "6538412ec4a89dbbda6a55ef"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3fffd86e000604b382",
          "_id": "6538412ec4a89dbbda6a55f0"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d41ffd86e000604b383",
          "_id": "6538412ec4a89dbbda6a55f1"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d42ffd86e000604b384",
          "_id": "6538412ec4a89dbbda6a55f2"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d43ffd86e000604b385",
          "_id": "6538412ec4a89dbbda6a55f3"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d44ffd86e000604b386",
          "_id": "6538412ec4a89dbbda6a55f4"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d46ffd86e000604b388",
          "_id": "6538412ec4a89dbbda6a55f5"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d45ffd86e000604b387",
          "_id": "6538412ec4a89dbbda6a55f6"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d46ffd86e000604b389",
          "_id": "6538412ec4a89dbbda6a55f7"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4affd86e000604b38b",
          "_id": "6538412ec4a89dbbda6a55f8"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d50ffd86e000604b394",
          "_id": "6538412ec4a89dbbda6a55f9"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed9819a1f30554030d45c29",
          "_id": "6538412ec4a89dbbda6a55fa"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed981d91f30554030d45c2a",
          "_id": "6538412ec4a89dbbda6a55fb"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d47ffd86e000604b38a",
          "_id": "6538412ec4a89dbbda6a55fc"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a1e90059c33cee4a828a",
          "_id": "6538412ec4a89dbbda6a55fd"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2090059c33cee4a828b",
          "_id": "6538412ec4a89dbbda6a55fe"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2bf0059c33cee4a828c",
          "_id": "6538412ec4a89dbbda6a55ff"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2e70059c33cee4a8293",
          "_id": "6538412ec4a89dbbda6a5600"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4cffd86e000604b38d",
          "_id": "6538412ec4a89dbbda6a5601"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4dffd86e000604b38e",
          "_id": "6538412ec4a89dbbda6a5602"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed983aa1f30554030d45c31",
          "_id": "6538412ec4a89dbbda6a5603"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5fb95b3f3a88ae63c954603c",
          "_id": "6538412ec4a89dbbda6a5604"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4effd86e000604b391",
          "_id": "6538412ec4a89dbbda6a5605"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4bffd86e000604b38c",
          "_id": "6538412ec4a89dbbda6a5606"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5f8399fb818d8b59f5740d43",
          "_id": "6538412ec4a89dbbda6a5607"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5eb87d4fffd86e000604b393",
          "_id": "6538412ec4a89dbbda6a5608"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fbfecce54ceb10a5664c80a",
          "_id": "6538412ec4a89dbbda6a5609"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fd386aa7faea57d297c86c1",
          "_id": "6538412ec4a89dbbda6a560a"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5ff6554f9257f579ee3a6c5f",
          "_id": "6538412ec4a89dbbda6a560b"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a5e8f798e2a4d5f979c",
          "_id": "6538412ec4a89dbbda6a560c"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fbfecfe54ceb10a5664c80b",
          "_id": "6538412ec4a89dbbda6a560d"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a718f798e2a4d5f979d",
          "_id": "6538412ec4a89dbbda6a560e"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a8d8f798e2a4d5f979e",
          "_id": "6538412ec4a89dbbda6a560f"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60428aafc041c16716f73cd7",
          "_id": "6538412ec4a89dbbda6a5610"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60428ac4c041c16716f73cd8",
          "_id": "6538412ec4a89dbbda6a5611"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af58b3467846b324215f",
          "_id": "6538412ec4a89dbbda6a5612"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b6aaa5433645e37d03f",
          "_id": "6538412ec4a89dbbda6a5613"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b7daa5433645e37d040",
          "_id": "6538412ec4a89dbbda6a5614"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6079bd1c9a06446e8c61bf76",
          "_id": "6538412ec4a89dbbda6a5615"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b95aa5433645e37d041",
          "_id": "6538412ec4a89dbbda6a5616"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6079bd399a06446e8c61bf77",
          "_id": "6538412ec4a89dbbda6a5617"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af84b3467846b3242161",
          "_id": "6538412ec4a89dbbda6a5618"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af6db3467846b3242160",
          "_id": "6538412ec4a89dbbda6a5619"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5eb87d4effd86e000604b390",
          "_id": "6538412ec4a89dbbda6a561a"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9b6d8f798e2a4d5f979f",
          "_id": "6538412ec4a89dbbda6a561b"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b11eb3467846b324216c",
          "_id": "6538412ec4a89dbbda6a561c"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60e3bf0d73359e1e20335c37",
          "_id": "6538412ec4a89dbbda6a561d"
        },
        {
          "year": "2021",
          "success": true,
          "id": "607a37565a906a44023e0866",
          "_id": "6538412ec4a89dbbda6a561e"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b15eb3467846b324216d",
          "_id": "6538412ec4a89dbbda6a561f"
        },
        {
          "year": "2021",
          "success": true,
          "id": "618faad2563d69573ed8ca9d",
          "_id": "6538412ec4a89dbbda6a5620"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b107b3467846b324216b",
          "_id": "6538412ec4a89dbbda6a5621"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161c94c6db1a92bfba85349",
          "_id": "6538412ec4a89dbbda6a5622"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161c88d6db1a92bfba85348",
          "_id": "6538412ec4a89dbbda6a5623"
        },
        {
          "year": "2021",
          "success": true,
          "id": "61bba806437241381bf7061e",
          "_id": "6538412ec4a89dbbda6a5624"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3afc1b3467846b3242164",
          "_id": "6538412ec4a89dbbda6a5625"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161d2006db1a92bfba85356",
          "_id": "6538412ec4a89dbbda6a5626"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61d5eca1f88e4c5fc91f1eb7",
          "_id": "6538412ec4a89dbbda6a5627"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61bf3e31cd5ab50b0d936345",
          "_id": "6538412ec4a89dbbda6a5628"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61e048bbbe8d8b66799018d0",
          "_id": "6538412ec4a89dbbda6a5629"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6161d32d6db1a92bfba85359",
          "_id": "6538412ec4a89dbbda6a562a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "607a34e35a906a44023e085e",
          "_id": "6538412ec4a89dbbda6a562b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61e048ffbe8d8b66799018d1",
          "_id": "6538412ec4a89dbbda6a562c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc01dae0dc5662b76489a7",
          "_id": "6538412ec4a89dbbda6a562d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0203e0dc5662b76489a8",
          "_id": "6538412ec4a89dbbda6a562e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0224e0dc5662b76489ab",
          "_id": "6538412ec4a89dbbda6a562f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0243e0dc5662b76489ae",
          "_id": "6538412ec4a89dbbda6a5630"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6234908cf051102e1fcedac4",
          "_id": "6538412ec4a89dbbda6a5631"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ad8baf52800c6e919252",
          "_id": "6538412ec4a89dbbda6a5632"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61eefaa89eb1064137a1bd73",
          "_id": "6538412ec4a89dbbda6a5633"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243adcaaf52800c6e919254",
          "_id": "6538412ec4a89dbbda6a5634"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ada6af52800c6e919253",
          "_id": "6538412ec4a89dbbda6a5635"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ade2af52800c6e919255",
          "_id": "6538412ec4a89dbbda6a5636"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62582a6f5988f159024b964b",
          "_id": "6538412ec4a89dbbda6a5637"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62582a855988f159024b964c",
          "_id": "6538412ec4a89dbbda6a5638"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6258290d5988f159024b9644",
          "_id": "6538412ec4a89dbbda6a5639"
        },
        {
          "year": "2022",
          "success": true,
          "id": "625828f25988f159024b9643",
          "_id": "6538412ec4a89dbbda6a563a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62615ebc0ec008379be596fa",
          "_id": "6538412ec4a89dbbda6a563b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae24af52800c6e919258",
          "_id": "6538412ec4a89dbbda6a563c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae0aaf52800c6e919257",
          "_id": "6538412ec4a89dbbda6a563d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6278481757b51b752c5c5a5f",
          "_id": "6538412ec4a89dbbda6a563e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "5fe3af43b3467846b324215e",
          "_id": "6538412ec4a89dbbda6a563f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f08b20413d2695d88711",
          "_id": "6538412ec4a89dbbda6a5640"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243aea5af52800c6e91925c",
          "_id": "6538412ec4a89dbbda6a5641"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f0c920413d2695d88712",
          "_id": "6538412ec4a89dbbda6a5642"
        },
        {
          "year": "2022",
          "success": false,
          "id": "62a9f0e320413d2695d88713",
          "_id": "6538412ec4a89dbbda6a5643"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae40af52800c6e919259",
          "_id": "6538412ec4a89dbbda6a5644"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f0f820413d2695d88714",
          "_id": "6538412ec4a89dbbda6a5645"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f10b20413d2695d88715",
          "_id": "6538412ec4a89dbbda6a5646"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f12820413d2695d88716",
          "_id": "6538412ec4a89dbbda6a5647"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f86420413d2695d88719",
          "_id": "6538412ec4a89dbbda6a5648"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f8b320413d2695d8871b",
          "_id": "6538412ec4a89dbbda6a5649"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b4ff0f55c50e192a4e6b",
          "_id": "6538412ec4a89dbbda6a564a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5200f55c50e192a4e6c",
          "_id": "6538412ec4a89dbbda6a564b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5290f55c50e192a4e6d",
          "_id": "6538412ec4a89dbbda6a564c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b53a0f55c50e192a4e6f",
          "_id": "6538412ec4a89dbbda6a564d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5330f55c50e192a4e6e",
          "_id": "6538412ec4a89dbbda6a564e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f89a20413d2695d8871a",
          "_id": "6538412ec4a89dbbda6a564f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "63161329ffc78f3b8567070b",
          "_id": "6538412ec4a89dbbda6a5650"
        },
        {
          "year": "2022",
          "success": true,
          "id": "63161339ffc78f3b8567070c",
          "_id": "6538412ec4a89dbbda6a5651"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62dd70d5202306255024d139",
          "_id": "6538412ec4a89dbbda6a5652"
        },
        {
          "year": "2022",
          "success": false,
          "id": "63161345ffc78f3b8567070d",
          "_id": "6538412ec4a89dbbda6a5653"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71240531f07b4fdf59bb",
          "_id": "6538412ec4a89dbbda6a5654"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71370531f07b4fdf59bc",
          "_id": "6538412ec4a89dbbda6a5655"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71dd0531f07b4fdf59c1",
          "_id": "6538412ec4a89dbbda6a5656"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71a90531f07b4fdf59be",
          "_id": "6538412ec4a89dbbda6a5657"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71b60531f07b4fdf59bf",
          "_id": "6538412ec4a89dbbda6a5658"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f723d0531f07b4fdf59c4",
          "_id": "6538412ec4a89dbbda6a5659"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71cc0531f07b4fdf59c0",
          "_id": "6538412ec4a89dbbda6a565a"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71820531f07b4fdf59bd",
          "_id": "6538412ec4a89dbbda6a565b"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ba08af52800c6e919270",
          "_id": "6538412ec4a89dbbda6a565c"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f724c0531f07b4fdf59c5",
          "_id": "6538412ec4a89dbbda6a565d"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72000531f07b4fdf59c2",
          "_id": "6538412ec4a89dbbda6a565e"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72580531f07b4fdf59c6",
          "_id": "6538412ec4a89dbbda6a565f"
        },
        {
          "year": "2022",
          "success": false,
          "id": "63161384ffc78f3b8567070e",
          "_id": "6538412ec4a89dbbda6a5660"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ae58af52800c6e91925a",
          "_id": "6538412ec4a89dbbda6a5661"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ae7daf52800c6e91925b",
          "_id": "6538412ec4a89dbbda6a5662"
        }
      ],
      "__v": 0
    },
    {
      "_id": "6538412ec4a89dbbda6a5599",
      "id": "5e9d0d95eda69955f709d1eb",
      "name": "Falcon 1",
      "color": "rgb(255,0,0)",
      "launches": [
        {
          "year": "2006",
          "success": false,
          "id": "5eb87cd9ffd86e000604b32a",
          "_id": "6538412ec4a89dbbda6a559a"
        },
        {
          "year": "2007",
          "success": false,
          "id": "5eb87cdaffd86e000604b32b",
          "_id": "6538412ec4a89dbbda6a559b"
        },
        {
          "year": "2008",
          "success": false,
          "id": "5eb87cdbffd86e000604b32c",
          "_id": "6538412ec4a89dbbda6a559c"
        },
        {
          "year": "2008",
          "success": true,
          "id": "5eb87cdbffd86e000604b32d",
          "_id": "6538412ec4a89dbbda6a559d"
        },
        {
          "year": "2009",
          "success": true,
          "id": "5eb87cdcffd86e000604b32e",
          "_id": "6538412ec4a89dbbda6a559e"
        }
      ],
      "__v": 0
    },
    {
      "_id": "6538412ec4a89dbbda6a5663",
      "id": "5e9d0d95eda69974db09d1ed",
      "name": "Falcon Heavy",
      "color": "rgb(201, 54, 152)",
      "launches": [
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d13ffd86e000604b360",
          "_id": "6538412ec4a89dbbda6a5664"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2dffd86e000604b376",
          "_id": "6538412ec4a89dbbda6a5665"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d35ffd86e000604b37a",
          "_id": "6538412ec4a89dbbda6a5666"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243aec2af52800c6e91925d",
          "_id": "6538412ec4a89dbbda6a5667"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72130531f07b4fdf59c3",
          "_id": "6538412ec4a89dbbda6a5668"
        }
      ],
      "__v": 0
    }
  ],
  "metadata": {
    "2006": [
      {
        "amountLaunches": 1,
        "launch_id": "5eb87cd9ffd86e000604b32a",
        "year": "2006",
        "id": "5e9d0d95eda69955f709d1eb",
        "name": "Falcon 1",
        "color": "rgb(255,0,0)"
      }
    ],
    "2007": [
      {
        "amountLaunches": 1,
        "launch_id": "5eb87cdaffd86e000604b32b",
        "year": "2007",
        "id": "5e9d0d95eda69955f709d1eb",
        "name": "Falcon 1",
        "color": "rgb(255,0,0)"
      }
    ],
    "2008": [
      {
        "amountLaunches": 2,
        "launch_id": "5eb87cdbffd86e000604b32c",
        "year": "2008",
        "id": "5e9d0d95eda69955f709d1eb",
        "name": "Falcon 1",
        "color": "rgb(255,0,0)"
      }
    ],
    "2009": [
      {
        "amountLaunches": 1,
        "launch_id": "5eb87cdcffd86e000604b32e",
        "year": "2009",
        "id": "5e9d0d95eda69955f709d1eb",
        "name": "Falcon 1",
        "color": "rgb(255,0,0)"
      }
    ],
    "2010": [
      {
        "amountLaunches": 2,
        "launch_id": "5eb87cddffd86e000604b32f",
        "year": "2010",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2012": [
      {
        "amountLaunches": 2,
        "launch_id": "5eb87cdfffd86e000604b331",
        "year": "2012",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2013": [
      {
        "amountLaunches": 3,
        "launch_id": "5eb87ce1ffd86e000604b333",
        "year": "2013",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2014": [
      {
        "amountLaunches": 6,
        "launch_id": "5eb87ce3ffd86e000604b336",
        "year": "2014",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2015": [
      {
        "amountLaunches": 7,
        "launch_id": "5eb87ce8ffd86e000604b33c",
        "year": "2015",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2016": [
      {
        "amountLaunches": 9,
        "launch_id": "5eb87cf0ffd86e000604b343",
        "year": "2016",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2017": [
      {
        "amountLaunches": 18,
        "launch_id": "5eb87cfdffd86e000604b34c",
        "year": "2017",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2018": [
      {
        "amountLaunches": 20,
        "launch_id": "5eb87d10ffd86e000604b35e",
        "year": "2018",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      },
      {
        "amountLaunches": 1,
        "launch_id": "5eb87d13ffd86e000604b360",
        "year": "2018",
        "id": "5e9d0d95eda69974db09d1ed",
        "name": "Falcon Heavy",
        "color": "rgb(201, 54, 152)"
      }
    ],
    "2019": [
      {
        "amountLaunches": 11,
        "launch_id": "5eb87d28ffd86e000604b373",
        "year": "2019",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      },
      {
        "amountLaunches": 2,
        "launch_id": "5eb87d2dffd86e000604b376",
        "year": "2019",
        "id": "5e9d0d95eda69974db09d1ed",
        "name": "Falcon Heavy",
        "color": "rgb(201, 54, 152)"
      }
    ],
    "2020": [
      {
        "amountLaunches": 26,
        "launch_id": "5eb87d3cffd86e000604b380",
        "year": "2020",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2021": [
      {
        "amountLaunches": 31,
        "launch_id": "5eb87d4fffd86e000604b393",
        "year": "2021",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      }
    ],
    "2022": [
      {
        "amountLaunches": 60,
        "launch_id": "61d5eca1f88e4c5fc91f1eb7",
        "year": "2022",
        "id": "5e9d0d95eda69973a809d1ec",
        "name": "Falcon 9",
        "color": "rgb(99, 156, 206)"
      },
      {
        "amountLaunches": 2,
        "launch_id": "6243aec2af52800c6e91925d",
        "year": "2022",
        "id": "5e9d0d95eda69974db09d1ed",
        "name": "Falcon Heavy",
        "color": "rgb(201, 54, 152)"
      }
    ]
  }
}
```

</details>

<details  open>

<summary>[GET] /stats/pie</summary>

<p>

Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"

</p>

```json
{
  "rockets": [
    {
      "_id": "6538412ec4a89dbbda6a5599",
      "id": "5e9d0d95eda69955f709d1eb",
      "name": "Falcon 1",
      "color": "rgb(255,0,0)",
      "launches": [
        {
          "year": "2006",
          "success": false,
          "id": "5eb87cd9ffd86e000604b32a",
          "_id": "6538412ec4a89dbbda6a559a"
        },
        {
          "year": "2007",
          "success": false,
          "id": "5eb87cdaffd86e000604b32b",
          "_id": "6538412ec4a89dbbda6a559b"
        },
        {
          "year": "2008",
          "success": false,
          "id": "5eb87cdbffd86e000604b32c",
          "_id": "6538412ec4a89dbbda6a559c"
        },
        {
          "year": "2008",
          "success": true,
          "id": "5eb87cdbffd86e000604b32d",
          "_id": "6538412ec4a89dbbda6a559d"
        },
        {
          "year": "2009",
          "success": true,
          "id": "5eb87cdcffd86e000604b32e",
          "_id": "6538412ec4a89dbbda6a559e"
        }
      ],
      "__v": 0
    },
    {
      "_id": "6538412ec4a89dbbda6a559f",
      "id": "5e9d0d95eda69973a809d1ec",
      "name": "Falcon 9",
      "color": "rgb(99, 156, 206)",
      "launches": [
        {
          "year": "2010",
          "success": true,
          "id": "5eb87cddffd86e000604b32f",
          "_id": "6538412ec4a89dbbda6a55a0"
        },
        {
          "year": "2010",
          "success": true,
          "id": "5eb87cdeffd86e000604b330",
          "_id": "6538412ec4a89dbbda6a55a1"
        },
        {
          "year": "2012",
          "success": true,
          "id": "5eb87cdfffd86e000604b331",
          "_id": "6538412ec4a89dbbda6a55a2"
        },
        {
          "year": "2012",
          "success": true,
          "id": "5eb87ce0ffd86e000604b332",
          "_id": "6538412ec4a89dbbda6a55a3"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce1ffd86e000604b333",
          "_id": "6538412ec4a89dbbda6a55a4"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce1ffd86e000604b334",
          "_id": "6538412ec4a89dbbda6a55a5"
        },
        {
          "year": "2013",
          "success": true,
          "id": "5eb87ce2ffd86e000604b335",
          "_id": "6538412ec4a89dbbda6a55a6"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce3ffd86e000604b336",
          "_id": "6538412ec4a89dbbda6a55a7"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce4ffd86e000604b337",
          "_id": "6538412ec4a89dbbda6a55a8"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce4ffd86e000604b338",
          "_id": "6538412ec4a89dbbda6a55a9"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce5ffd86e000604b339",
          "_id": "6538412ec4a89dbbda6a55aa"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce6ffd86e000604b33a",
          "_id": "6538412ec4a89dbbda6a55ab"
        },
        {
          "year": "2014",
          "success": true,
          "id": "5eb87ce7ffd86e000604b33b",
          "_id": "6538412ec4a89dbbda6a55ac"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ce8ffd86e000604b33c",
          "_id": "6538412ec4a89dbbda6a55ad"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ceaffd86e000604b33d",
          "_id": "6538412ec4a89dbbda6a55ae"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87ceaffd86e000604b33e",
          "_id": "6538412ec4a89dbbda6a55af"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cecffd86e000604b33f",
          "_id": "6538412ec4a89dbbda6a55b0"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cedffd86e000604b340",
          "_id": "6538412ec4a89dbbda6a55b1"
        },
        {
          "year": "2015",
          "success": false,
          "id": "5eb87ceeffd86e000604b341",
          "_id": "6538412ec4a89dbbda6a55b2"
        },
        {
          "year": "2015",
          "success": true,
          "id": "5eb87cefffd86e000604b342",
          "_id": "6538412ec4a89dbbda6a55b3"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf0ffd86e000604b343",
          "_id": "6538412ec4a89dbbda6a55b4"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf2ffd86e000604b344",
          "_id": "6538412ec4a89dbbda6a55b5"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf3ffd86e000604b345",
          "_id": "6538412ec4a89dbbda6a55b6"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf5ffd86e000604b346",
          "_id": "6538412ec4a89dbbda6a55b7"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf6ffd86e000604b347",
          "_id": "6538412ec4a89dbbda6a55b8"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf8ffd86e000604b348",
          "_id": "6538412ec4a89dbbda6a55b9"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cf9ffd86e000604b349",
          "_id": "6538412ec4a89dbbda6a55ba"
        },
        {
          "year": "2016",
          "success": true,
          "id": "5eb87cfaffd86e000604b34a",
          "_id": "6538412ec4a89dbbda6a55bb"
        },
        {
          "year": "2016",
          "success": false,
          "id": "5eb87cfbffd86e000604b34b",
          "_id": "6538412ec4a89dbbda6a55bc"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfdffd86e000604b34c",
          "_id": "6538412ec4a89dbbda6a55bd"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfeffd86e000604b34d",
          "_id": "6538412ec4a89dbbda6a55be"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87cfeffd86e000604b34e",
          "_id": "6538412ec4a89dbbda6a55bf"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d00ffd86e000604b34f",
          "_id": "6538412ec4a89dbbda6a55c0"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d01ffd86e000604b350",
          "_id": "6538412ec4a89dbbda6a55c1"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d01ffd86e000604b351",
          "_id": "6538412ec4a89dbbda6a55c2"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d03ffd86e000604b352",
          "_id": "6538412ec4a89dbbda6a55c3"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d04ffd86e000604b353",
          "_id": "6538412ec4a89dbbda6a55c4"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d05ffd86e000604b354",
          "_id": "6538412ec4a89dbbda6a55c5"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d06ffd86e000604b355",
          "_id": "6538412ec4a89dbbda6a55c6"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d07ffd86e000604b356",
          "_id": "6538412ec4a89dbbda6a55c7"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d08ffd86e000604b357",
          "_id": "6538412ec4a89dbbda6a55c8"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d09ffd86e000604b358",
          "_id": "6538412ec4a89dbbda6a55c9"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0affd86e000604b359",
          "_id": "6538412ec4a89dbbda6a55ca"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0cffd86e000604b35a",
          "_id": "6538412ec4a89dbbda6a55cb"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0dffd86e000604b35b",
          "_id": "6538412ec4a89dbbda6a55cc"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0effd86e000604b35c",
          "_id": "6538412ec4a89dbbda6a55cd"
        },
        {
          "year": "2017",
          "success": true,
          "id": "5eb87d0fffd86e000604b35d",
          "_id": "6538412ec4a89dbbda6a55ce"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d10ffd86e000604b35e",
          "_id": "6538412ec4a89dbbda6a55cf"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d11ffd86e000604b35f",
          "_id": "6538412ec4a89dbbda6a55d0"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d14ffd86e000604b361",
          "_id": "6538412ec4a89dbbda6a55d1"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d15ffd86e000604b362",
          "_id": "6538412ec4a89dbbda6a55d2"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d16ffd86e000604b363",
          "_id": "6538412ec4a89dbbda6a55d3"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d16ffd86e000604b364",
          "_id": "6538412ec4a89dbbda6a55d4"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d18ffd86e000604b365",
          "_id": "6538412ec4a89dbbda6a55d5"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d19ffd86e000604b366",
          "_id": "6538412ec4a89dbbda6a55d6"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1affd86e000604b367",
          "_id": "6538412ec4a89dbbda6a55d7"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1bffd86e000604b368",
          "_id": "6538412ec4a89dbbda6a55d8"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1cffd86e000604b369",
          "_id": "6538412ec4a89dbbda6a55d9"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1effd86e000604b36a",
          "_id": "6538412ec4a89dbbda6a55da"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d1fffd86e000604b36b",
          "_id": "6538412ec4a89dbbda6a55db"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d20ffd86e000604b36c",
          "_id": "6538412ec4a89dbbda6a55dc"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d22ffd86e000604b36d",
          "_id": "6538412ec4a89dbbda6a55dd"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d23ffd86e000604b36e",
          "_id": "6538412ec4a89dbbda6a55de"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d24ffd86e000604b36f",
          "_id": "6538412ec4a89dbbda6a55df"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d25ffd86e000604b370",
          "_id": "6538412ec4a89dbbda6a55e0"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d26ffd86e000604b371",
          "_id": "6538412ec4a89dbbda6a55e1"
        },
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d27ffd86e000604b372",
          "_id": "6538412ec4a89dbbda6a55e2"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d28ffd86e000604b373",
          "_id": "6538412ec4a89dbbda6a55e3"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2affd86e000604b374",
          "_id": "6538412ec4a89dbbda6a55e4"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2bffd86e000604b375",
          "_id": "6538412ec4a89dbbda6a55e5"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2effd86e000604b377",
          "_id": "6538412ec4a89dbbda6a55e6"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d30ffd86e000604b378",
          "_id": "6538412ec4a89dbbda6a55e7"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d31ffd86e000604b379",
          "_id": "6538412ec4a89dbbda6a55e8"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d36ffd86e000604b37b",
          "_id": "6538412ec4a89dbbda6a55e9"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d37ffd86e000604b37c",
          "_id": "6538412ec4a89dbbda6a55ea"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d39ffd86e000604b37d",
          "_id": "6538412ec4a89dbbda6a55eb"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d39ffd86e000604b37e",
          "_id": "6538412ec4a89dbbda6a55ec"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d3bffd86e000604b37f",
          "_id": "6538412ec4a89dbbda6a55ed"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3cffd86e000604b380",
          "_id": "6538412ec4a89dbbda6a55ee"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3dffd86e000604b381",
          "_id": "6538412ec4a89dbbda6a55ef"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d3fffd86e000604b382",
          "_id": "6538412ec4a89dbbda6a55f0"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d41ffd86e000604b383",
          "_id": "6538412ec4a89dbbda6a55f1"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d42ffd86e000604b384",
          "_id": "6538412ec4a89dbbda6a55f2"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d43ffd86e000604b385",
          "_id": "6538412ec4a89dbbda6a55f3"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d44ffd86e000604b386",
          "_id": "6538412ec4a89dbbda6a55f4"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d46ffd86e000604b388",
          "_id": "6538412ec4a89dbbda6a55f5"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d45ffd86e000604b387",
          "_id": "6538412ec4a89dbbda6a55f6"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d46ffd86e000604b389",
          "_id": "6538412ec4a89dbbda6a55f7"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4affd86e000604b38b",
          "_id": "6538412ec4a89dbbda6a55f8"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d50ffd86e000604b394",
          "_id": "6538412ec4a89dbbda6a55f9"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed9819a1f30554030d45c29",
          "_id": "6538412ec4a89dbbda6a55fa"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed981d91f30554030d45c2a",
          "_id": "6538412ec4a89dbbda6a55fb"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d47ffd86e000604b38a",
          "_id": "6538412ec4a89dbbda6a55fc"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a1e90059c33cee4a828a",
          "_id": "6538412ec4a89dbbda6a55fd"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2090059c33cee4a828b",
          "_id": "6538412ec4a89dbbda6a55fe"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2bf0059c33cee4a828c",
          "_id": "6538412ec4a89dbbda6a55ff"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ef6a2e70059c33cee4a8293",
          "_id": "6538412ec4a89dbbda6a5600"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4cffd86e000604b38d",
          "_id": "6538412ec4a89dbbda6a5601"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4dffd86e000604b38e",
          "_id": "6538412ec4a89dbbda6a5602"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5ed983aa1f30554030d45c31",
          "_id": "6538412ec4a89dbbda6a5603"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5fb95b3f3a88ae63c954603c",
          "_id": "6538412ec4a89dbbda6a5604"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4effd86e000604b391",
          "_id": "6538412ec4a89dbbda6a5605"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5eb87d4bffd86e000604b38c",
          "_id": "6538412ec4a89dbbda6a5606"
        },
        {
          "year": "2020",
          "success": true,
          "id": "5f8399fb818d8b59f5740d43",
          "_id": "6538412ec4a89dbbda6a5607"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5eb87d4fffd86e000604b393",
          "_id": "6538412ec4a89dbbda6a5608"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fbfecce54ceb10a5664c80a",
          "_id": "6538412ec4a89dbbda6a5609"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fd386aa7faea57d297c86c1",
          "_id": "6538412ec4a89dbbda6a560a"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5ff6554f9257f579ee3a6c5f",
          "_id": "6538412ec4a89dbbda6a560b"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a5e8f798e2a4d5f979c",
          "_id": "6538412ec4a89dbbda6a560c"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fbfecfe54ceb10a5664c80b",
          "_id": "6538412ec4a89dbbda6a560d"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a718f798e2a4d5f979d",
          "_id": "6538412ec4a89dbbda6a560e"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9a8d8f798e2a4d5f979e",
          "_id": "6538412ec4a89dbbda6a560f"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60428aafc041c16716f73cd7",
          "_id": "6538412ec4a89dbbda6a5610"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60428ac4c041c16716f73cd8",
          "_id": "6538412ec4a89dbbda6a5611"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af58b3467846b324215f",
          "_id": "6538412ec4a89dbbda6a5612"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b6aaa5433645e37d03f",
          "_id": "6538412ec4a89dbbda6a5613"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b7daa5433645e37d040",
          "_id": "6538412ec4a89dbbda6a5614"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6079bd1c9a06446e8c61bf76",
          "_id": "6538412ec4a89dbbda6a5615"
        },
        {
          "year": "2021",
          "success": true,
          "id": "605b4b95aa5433645e37d041",
          "_id": "6538412ec4a89dbbda6a5616"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6079bd399a06446e8c61bf77",
          "_id": "6538412ec4a89dbbda6a5617"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af84b3467846b3242161",
          "_id": "6538412ec4a89dbbda6a5618"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3af6db3467846b3242160",
          "_id": "6538412ec4a89dbbda6a5619"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5eb87d4effd86e000604b390",
          "_id": "6538412ec4a89dbbda6a561a"
        },
        {
          "year": "2021",
          "success": true,
          "id": "600f9b6d8f798e2a4d5f979f",
          "_id": "6538412ec4a89dbbda6a561b"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b11eb3467846b324216c",
          "_id": "6538412ec4a89dbbda6a561c"
        },
        {
          "year": "2021",
          "success": true,
          "id": "60e3bf0d73359e1e20335c37",
          "_id": "6538412ec4a89dbbda6a561d"
        },
        {
          "year": "2021",
          "success": true,
          "id": "607a37565a906a44023e0866",
          "_id": "6538412ec4a89dbbda6a561e"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b15eb3467846b324216d",
          "_id": "6538412ec4a89dbbda6a561f"
        },
        {
          "year": "2021",
          "success": true,
          "id": "618faad2563d69573ed8ca9d",
          "_id": "6538412ec4a89dbbda6a5620"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3b107b3467846b324216b",
          "_id": "6538412ec4a89dbbda6a5621"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161c94c6db1a92bfba85349",
          "_id": "6538412ec4a89dbbda6a5622"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161c88d6db1a92bfba85348",
          "_id": "6538412ec4a89dbbda6a5623"
        },
        {
          "year": "2021",
          "success": true,
          "id": "61bba806437241381bf7061e",
          "_id": "6538412ec4a89dbbda6a5624"
        },
        {
          "year": "2021",
          "success": true,
          "id": "5fe3afc1b3467846b3242164",
          "_id": "6538412ec4a89dbbda6a5625"
        },
        {
          "year": "2021",
          "success": true,
          "id": "6161d2006db1a92bfba85356",
          "_id": "6538412ec4a89dbbda6a5626"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61d5eca1f88e4c5fc91f1eb7",
          "_id": "6538412ec4a89dbbda6a5627"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61bf3e31cd5ab50b0d936345",
          "_id": "6538412ec4a89dbbda6a5628"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61e048bbbe8d8b66799018d0",
          "_id": "6538412ec4a89dbbda6a5629"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6161d32d6db1a92bfba85359",
          "_id": "6538412ec4a89dbbda6a562a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "607a34e35a906a44023e085e",
          "_id": "6538412ec4a89dbbda6a562b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61e048ffbe8d8b66799018d1",
          "_id": "6538412ec4a89dbbda6a562c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc01dae0dc5662b76489a7",
          "_id": "6538412ec4a89dbbda6a562d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0203e0dc5662b76489a8",
          "_id": "6538412ec4a89dbbda6a562e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0224e0dc5662b76489ab",
          "_id": "6538412ec4a89dbbda6a562f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61fc0243e0dc5662b76489ae",
          "_id": "6538412ec4a89dbbda6a5630"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6234908cf051102e1fcedac4",
          "_id": "6538412ec4a89dbbda6a5631"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ad8baf52800c6e919252",
          "_id": "6538412ec4a89dbbda6a5632"
        },
        {
          "year": "2022",
          "success": true,
          "id": "61eefaa89eb1064137a1bd73",
          "_id": "6538412ec4a89dbbda6a5633"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243adcaaf52800c6e919254",
          "_id": "6538412ec4a89dbbda6a5634"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ada6af52800c6e919253",
          "_id": "6538412ec4a89dbbda6a5635"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ade2af52800c6e919255",
          "_id": "6538412ec4a89dbbda6a5636"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62582a6f5988f159024b964b",
          "_id": "6538412ec4a89dbbda6a5637"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62582a855988f159024b964c",
          "_id": "6538412ec4a89dbbda6a5638"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6258290d5988f159024b9644",
          "_id": "6538412ec4a89dbbda6a5639"
        },
        {
          "year": "2022",
          "success": true,
          "id": "625828f25988f159024b9643",
          "_id": "6538412ec4a89dbbda6a563a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62615ebc0ec008379be596fa",
          "_id": "6538412ec4a89dbbda6a563b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae24af52800c6e919258",
          "_id": "6538412ec4a89dbbda6a563c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae0aaf52800c6e919257",
          "_id": "6538412ec4a89dbbda6a563d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6278481757b51b752c5c5a5f",
          "_id": "6538412ec4a89dbbda6a563e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "5fe3af43b3467846b324215e",
          "_id": "6538412ec4a89dbbda6a563f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f08b20413d2695d88711",
          "_id": "6538412ec4a89dbbda6a5640"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243aea5af52800c6e91925c",
          "_id": "6538412ec4a89dbbda6a5641"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f0c920413d2695d88712",
          "_id": "6538412ec4a89dbbda6a5642"
        },
        {
          "year": "2022",
          "success": false,
          "id": "62a9f0e320413d2695d88713",
          "_id": "6538412ec4a89dbbda6a5643"
        },
        {
          "year": "2022",
          "success": true,
          "id": "6243ae40af52800c6e919259",
          "_id": "6538412ec4a89dbbda6a5644"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f0f820413d2695d88714",
          "_id": "6538412ec4a89dbbda6a5645"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f10b20413d2695d88715",
          "_id": "6538412ec4a89dbbda6a5646"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f12820413d2695d88716",
          "_id": "6538412ec4a89dbbda6a5647"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f86420413d2695d88719",
          "_id": "6538412ec4a89dbbda6a5648"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f8b320413d2695d8871b",
          "_id": "6538412ec4a89dbbda6a5649"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b4ff0f55c50e192a4e6b",
          "_id": "6538412ec4a89dbbda6a564a"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5200f55c50e192a4e6c",
          "_id": "6538412ec4a89dbbda6a564b"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5290f55c50e192a4e6d",
          "_id": "6538412ec4a89dbbda6a564c"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b53a0f55c50e192a4e6f",
          "_id": "6538412ec4a89dbbda6a564d"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62f3b5330f55c50e192a4e6e",
          "_id": "6538412ec4a89dbbda6a564e"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62a9f89a20413d2695d8871a",
          "_id": "6538412ec4a89dbbda6a564f"
        },
        {
          "year": "2022",
          "success": true,
          "id": "63161329ffc78f3b8567070b",
          "_id": "6538412ec4a89dbbda6a5650"
        },
        {
          "year": "2022",
          "success": true,
          "id": "63161339ffc78f3b8567070c",
          "_id": "6538412ec4a89dbbda6a5651"
        },
        {
          "year": "2022",
          "success": true,
          "id": "62dd70d5202306255024d139",
          "_id": "6538412ec4a89dbbda6a5652"
        },
        {
          "year": "2022",
          "success": false,
          "id": "63161345ffc78f3b8567070d",
          "_id": "6538412ec4a89dbbda6a5653"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71240531f07b4fdf59bb",
          "_id": "6538412ec4a89dbbda6a5654"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71370531f07b4fdf59bc",
          "_id": "6538412ec4a89dbbda6a5655"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71dd0531f07b4fdf59c1",
          "_id": "6538412ec4a89dbbda6a5656"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71a90531f07b4fdf59be",
          "_id": "6538412ec4a89dbbda6a5657"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71b60531f07b4fdf59bf",
          "_id": "6538412ec4a89dbbda6a5658"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f723d0531f07b4fdf59c4",
          "_id": "6538412ec4a89dbbda6a5659"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71cc0531f07b4fdf59c0",
          "_id": "6538412ec4a89dbbda6a565a"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f71820531f07b4fdf59bd",
          "_id": "6538412ec4a89dbbda6a565b"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ba08af52800c6e919270",
          "_id": "6538412ec4a89dbbda6a565c"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f724c0531f07b4fdf59c5",
          "_id": "6538412ec4a89dbbda6a565d"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72000531f07b4fdf59c2",
          "_id": "6538412ec4a89dbbda6a565e"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72580531f07b4fdf59c6",
          "_id": "6538412ec4a89dbbda6a565f"
        },
        {
          "year": "2022",
          "success": false,
          "id": "63161384ffc78f3b8567070e",
          "_id": "6538412ec4a89dbbda6a5660"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ae58af52800c6e91925a",
          "_id": "6538412ec4a89dbbda6a5661"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243ae7daf52800c6e91925b",
          "_id": "6538412ec4a89dbbda6a5662"
        }
      ],
      "__v": 0
    },
    {
      "_id": "6538412ec4a89dbbda6a5663",
      "id": "5e9d0d95eda69974db09d1ed",
      "name": "Falcon Heavy",
      "color": "rgb(201, 54, 152)",
      "launches": [
        {
          "year": "2018",
          "success": true,
          "id": "5eb87d13ffd86e000604b360",
          "_id": "6538412ec4a89dbbda6a5664"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d2dffd86e000604b376",
          "_id": "6538412ec4a89dbbda6a5665"
        },
        {
          "year": "2019",
          "success": true,
          "id": "5eb87d35ffd86e000604b37a",
          "_id": "6538412ec4a89dbbda6a5666"
        },
        {
          "year": "2022",
          "success": false,
          "id": "6243aec2af52800c6e91925d",
          "_id": "6538412ec4a89dbbda6a5667"
        },
        {
          "year": "2022",
          "success": false,
          "id": "633f72130531f07b4fdf59c3",
          "_id": "6538412ec4a89dbbda6a5668"
        }
      ],
      "__v": 0
    }
  ],
  "metadata": {
    "success": 181,
    "fails": 24,
    "rocketsTotal": 3
  }
}
```

</details>

<details  open>

<summary>[GET] /launches</summary>

<p>

Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"

</p>

```json
{
  "results": [
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a558c",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "Transporter-6",
      "date_utc": "2022-12-01T00:00:00.000Z",
      "date_unix": 1669852800,
      "date_local": "2022-11-30T19:00:00-05:00",
      "date_precision": "month",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a558d"
        }
      ],
      "id": "633f72580531f07b4fdf59c6",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a5588",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4502f509092b78566f87",
      "auto_update": true,
      "name": "SWOT",
      "date_utc": "2022-12-05T00:00:00.000Z",
      "date_unix": 1670198400,
      "date_local": "2022-12-04T16:00:00-08:00",
      "date_precision": "day",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5589"
        }
      ],
      "id": "633f724c0531f07b4fdf59c5",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a5580",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "ispace Mission 1 & Rashid",
      "date_utc": "2022-11-22T00:00:00.000Z",
      "date_unix": 1669075200,
      "date_local": "2022-11-21T19:00:00-05:00",
      "date_precision": "day",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5581"
        }
      ],
      "id": "633f723d0531f07b4fdf59c4",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon Heavy",
        "id": "5e9d0d95eda69974db09d1ed"
      },
      "_id": "6538412cc4a89dbbda6a5592",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4502f509094188566f88",
      "auto_update": true,
      "name": "Viasat-3 & Arcturus",
      "date_utc": "2022-12-01T00:00:00.000Z",
      "date_unix": 1669852800,
      "date_local": "2022-11-30T19:00:00-05:00",
      "date_precision": "month",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5593"
        },
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5594"
        },
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5595"
        }
      ],
      "id": "633f72130531f07b4fdf59c3",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a558a",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "SES-18 & SES-19",
      "date_utc": "2022-11-01T00:00:00.000Z",
      "date_unix": 1667260800,
      "date_local": "2022-10-31T20:00:00-04:00",
      "date_precision": "month",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a558b"
        }
      ],
      "id": "633f72000531f07b4fdf59c2",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a557a",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "Hotbird 13G",
      "date_utc": "2022-11-03T03:24:00.000Z",
      "date_unix": 1667445840,
      "date_local": "2022-11-02T23:24:00-04:00",
      "date_precision": "hour",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a557b"
        }
      ],
      "id": "633f71dd0531f07b4fdf59c1",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a5582",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4502f509094188566f88",
      "auto_update": true,
      "name": "CRS-26",
      "date_utc": "2022-11-18T22:00:00.000Z",
      "date_unix": 1668808800,
      "date_local": "2022-11-18T17:00:00-05:00",
      "date_precision": "hour",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5583"
        }
      ],
      "id": "633f71cc0531f07b4fdf59c0",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a557e",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "Eutelsat 10B",
      "date_utc": "2022-11-15T00:00:00.000Z",
      "date_unix": 1668470400,
      "date_local": "2022-11-14T19:00:00-05:00",
      "date_precision": "day",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a557f"
        }
      ],
      "id": "633f71b60531f07b4fdf59bf",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": null,
          "large": null
        },
        "reddit": {
          "campaign": null,
          "launch": null,
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": null,
        "youtube_id": null,
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a557c",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "Galaxy 31 (23R) & 32 (17R)",
      "date_utc": "2022-11-08T00:00:00.000Z",
      "date_unix": 1667865600,
      "date_local": "2022-11-07T19:00:00-05:00",
      "date_precision": "day",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a557d"
        }
      ],
      "id": "633f71a90531f07b4fdf59be",
      "__v": 0
    },
    {
      "links": {
        "patch": {
          "small": "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
          "large": "https://images2.imgbox.com/e3/cc/hN96PmST_o.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": null,
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": "https://youtu.be/wcq7xiTOPRg",
        "youtube_id": "wcq7xiTOPRg",
        "article": null,
        "wikipedia": null
      },
      "rocket": {
        "name": "Falcon 9",
        "id": "5e9d0d95eda69973a809d1ec"
      },
      "_id": "6538412cc4a89dbbda6a5584",
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "net": false,
      "window": null,
      "success": null,
      "failures": [],
      "details": null,
      "crew": [],
      "ships": [],
      "capsules": [],
      "payloads": [],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "name": "Starlink 4-37 (v1.5)",
      "date_utc": "2022-11-01T00:00:00.000Z",
      "date_unix": 1667260800,
      "date_local": "2022-10-31T20:00:00-04:00",
      "date_precision": "month",
      "upcoming": true,
      "cores": [
        {
          "core": null,
          "flight": null,
          "gridfins": null,
          "legs": null,
          "reused": null,
          "landing_attempt": null,
          "landing_success": null,
          "landing_type": null,
          "landpad": null,
          "_id": "6538412cc4a89dbbda6a5585"
        }
      ],
      "id": "633f71820531f07b4fdf59bd",
      "__v": 0
    }
  ],
  "totalDocs": 205,
  "totalPages": 21,
  "page": 1,
  "hasNext": true,
  "hasPrev": false
}
```

</details>

<h1 id="attachment">ATTACHMENT</h1>

- <a href="https://cloud.mongodb.com/">Here<a> Click at database
  ![frist](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/f7dc5574-d6ce-458a-b1c4-2d231a21aed4)

- Create a database free
  ![second](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/67bad4ab-0832-41ad-919d-6799ed7235fd)

- Click at connect button
  ![third](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/eec38993-ec03-41c0-bef6-2dfe1a554ddf)

- Click in this option
  ![fourth](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/e1b558ff-1ea6-4321-a599-d0654b1294e9)

- And finally, get the MONGODB_CONNECTION
  ![last](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/b43864ed-744a-432a-8bd1-cd260e43353e)

### Reviews

#### root/src/app.ts

- [x] Sanitize params and add comments.
- [ ] Add tests for this file

#### root/src/utils/getDataFromSpaceXAPI.ts

**Optimization and performance**

- [x] Save in memory the last launch registred at mongodb and verify that the launch alredy exists.
- [x] Add tests for this file.

#### root/src/utils/generateColor.ts

- [x] Isolate colors calculation algorithms
- [x] Add tests for this file.
- [x] Add comments for this file.

#### root/src/utils/seed.ts

- [x] Isolate fetch data to handle the results of API Space X.
- [x] Try and catch for fetching data from API Space X.
- [x] Create Rocket on isolated function to create a Rocket type.
- [x] Create Launch on isolated function to create a Launch type.
- [x] Map instead of reduce.
- [x] Map instead of foreach.
- [x] Create test for this file.
- [x] Using bulkWrite of mongoose.
- [x] Memory management to reduce API Space X calls.
- [x] Layer Service
- [x] Layer Serializer
- [x] Layer Repository
- [x] Almost 100% of the test coverage (some lines executed in the production)
