require('./index.pug')
require('./faq.pug')
require('./blog/index.html')
require('./js/script.js')
require('./favicon.ico')

require.context('./blog/posts/', false, /\.pug$/)
