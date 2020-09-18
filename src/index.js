require('./index.html')
require('./blog/index.html')
require('./js/script.js')
require('./favicon.ico')

require.context('./blog/posts/', false, /\.pug$/)
