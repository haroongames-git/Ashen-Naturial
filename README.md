# Ashen Naturial
This is the official repository for Ashen Naturial, owned by **Dragon Holly#0696** and programmed by **HaroonGames#1313**.

# Open-source
This project IS open-source, which means you can help code it! If you find an error, or think that the bot can be improved in anyway, just send a [pull request](https://github.com/haroongames-git/Ashen-Naturial/pulls) and I'll get back to you!

## Clone to your own machine

You can clone the repository to your own machine for testing and development purposes.

1. In your terminal (command prompt), run:
```bat
git clone https://github.com/haroongames-git/Ashen-Naturial.git
```
2. Then, create a file named `.env.js` and put this code in it:
```js
module.exports = {
  TOKEN: 'your-token-goes-here'
}
```
3. In `index.js`, at the top of the file, write
```js
process.env = require('.env')
```

And that's it!
