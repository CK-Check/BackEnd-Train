require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const githubData = {
    "login": "CK-Check",
    "id": 152788127,
    "node_id": "U_kgDOCRtcnw",
    "avatar_url": "https://avatars.githubusercontent.com/u/152788127?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/CK-Check",
    "html_url": "https://github.com/CK-Check",
    "followers_url": "https://api.github.com/users/CK-Check/followers",
    "following_url": "https://api.github.com/users/CK-Check/following{/other_user}",
    "gists_url": "https://api.github.com/users/CK-Check/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/CK-Check/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/CK-Check/subscriptions",
    "organizations_url": "https://api.github.com/users/CK-Check/orgs",
    "repos_url": "https://api.github.com/users/CK-Check/repos",
    "events_url": "https://api.github.com/users/CK-Check/events{/privacy}",
    "received_events_url": "https://api.github.com/users/CK-Check/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-12-03T12:57:01Z",
    "updated_at": "2024-12-06T06:48:54Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send('cgk3000');
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at youtube</h1>');
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chetan Kotangale</h2>");
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})