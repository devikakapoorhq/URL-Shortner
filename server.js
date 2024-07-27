const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', { useNewUrlParser: true });
mongoose.createConnection('mongodb://localhost/urlShortener', { useNewUrlParser: true });

 app.set('view engine' , 'ejs')
 app.use(express.urlencoded({extended: false}))
   
app.get('/', async (req, res) => {
 const shortUrls = await ShortUrl.find()
  res.render('index', {shortUrls: shortUrls })

})

app.post('/shortUrls', async (req, res) => {
 await ShortUrl.create({full: req.body.fullUrl })

 res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  console.log('Requested short URL:', req.params.shortUrl);  // Log for debugging
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

    if (!shortUrl) {
      console.log('Short URL not found:', req.params.shortUrl);
      return res.sendStatus(404);
    }

    shortUrl.clicks++;
    await shortUrl.save();

    console.log('Redirecting to:', shortUrl.full);
    res.redirect(shortUrl.full);
  } catch (err) {
    console.error('Error in redirect route:', err);
    res.status(500).send('Server Error');
  }
});


app.listen(process.env.PORT || 5000);