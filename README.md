# Fullstack Challenge 🏅 Space X API

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

-  Create a database free
![second](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/67bad4ab-0832-41ad-919d-6799ed7235fd)

- Click at connect button
![third](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/eec38993-ec03-41c0-bef6-2dfe1a554ddf)

- Click in this option
![fourth](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/e1b558ff-1ea6-4321-a599-d0654b1294e9)

- And finally, get the MONGODB_CONNECTION
![last](https://github.com/Rharuow/Teste-coodesh-frontend/assets/19626398/b43864ed-744a-432a-8bd1-cd260e43353e)
