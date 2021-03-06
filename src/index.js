require('./index.pug')
require('./faq.pug')
require('./uae.pug')
require('./giveaway.pug')
require('./blog/index.pug')
require('./js/script.js')
require('./favicon.ico')

// load lazy loaded images
// require.context('./img/faces/jpg/', /\.jpg$/)
// require.context('./img/faces/webp/', /\.webp$/)

require('./img/faces/jpg/1.jpg')
require('./img/faces/jpg/2.jpg')
require('./img/faces/jpg/3.jpg')
require('./img/faces/jpg/4.jpg')
require('./img/faces/jpg/5.jpg')
require('./img/faces/jpg/6.jpg')
require('./img/faces/jpg/7.jpg')
require('./img/faces/jpg/8.jpg')
require('./img/faces/jpg/9.jpg')
require('./img/faces/jpg/10.jpg')
require('./img/faces/jpg/11.jpg')
require('./img/faces/jpg/12.jpg')

require('./img/faces/webp/1.webp')
require('./img/faces/webp/2.webp')
require('./img/faces/webp/3.webp')
require('./img/faces/webp/4.webp')
require('./img/faces/webp/5.webp')
require('./img/faces/webp/6.webp')
require('./img/faces/webp/7.webp')
require('./img/faces/webp/8.webp')
require('./img/faces/webp/9.webp')
require('./img/faces/webp/10.webp')
require('./img/faces/webp/11.webp')
require('./img/faces/webp/12.webp')

require('./blog/img/the-why-of-keep-kerala-united.jpg')
require('./blog/img/the-why-of-keep-kerala-united.webp')

require('./blog/img/help.jpg')
require('./blog/img/help.webp')

require('./blog/img/education and covid.jpg')
require('./blog/img/education and covid.webp')

// load all blog posts
require.context('./blog/posts/', false, /\.pug$/)
