// express-vercel-test/api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Vercel Express!');
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Express test successful!' });
});

// Vercel에서 서버리스 함수로 작동하려면 app을 export 해야 해.
module.exports = app;

// 주의: Vercel 환경에서는 app.listen()이 필요 없어!
// Vercel이 알아서 이 Express 앱을 요청과 연결해 줄 거야.
// 만약 로컬에서 이 파일을 직접 실행해서 테스트하고 싶다면
// 아래 주석을 풀고 "npm run start"로 실행하면 돼.
/*
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
