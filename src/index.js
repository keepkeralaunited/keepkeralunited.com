require('./index.pug')
require('./faq.pug')
require('./blog/index.html')
require('./js/script.js')
require('./favicon.ico')

// load lazy loaded images
require.context('./img/faces/jpg', /\.jpg/)
require.context('./img/faces/webp', /\.webp/)

// load all blog posts
require.context('./blog/posts/', false, /\.pug$/)
