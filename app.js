/**
 * this file is start server of fixtures exemple fully-storage package
 * check: README.md
 */

const
    express = require('express'),
    app = express(),
    server = require('http').createServer( app ),
    fullyStorage = require('fully-storage')
;

app.use( '/public', express.static( 'public' ) );

app.set( 'view engine', 'ejs' );

app.get('/', ( request, response ) => {

    const articles = [];

    const docsname = fullyStorage.getDocsList('articles');

    docsname.forEach( docname => {

        const article = fullyStorage.getDocByDocname( docname );

        articles.push( article );

    } );

    response.render('index', {
        articles: articles
    } );

} );

server.listen( 3001, () => {

    console.log(
        `HTTP server running at: http://localhost:3001/`
    );

} );
