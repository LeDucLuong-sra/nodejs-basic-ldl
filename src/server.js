import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
const app = express();
const port = process.env.PORT|| 8080;
//phuong an backup port bi underfined;
configViewEngine(app);
app.get('/', (req, res) => {
  res.render('test/index.ejs')
})
app.get('/about', (req, res) => {
    res.send('HDay la mot cong khac ')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})