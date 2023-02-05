const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const productsController = require( './src/product/ProductController' );
const PORT = 80;

//EXPRESS INITIALIZE
const app = express();
app.use( express.json() );
app.use( bodyParser.urlencoded({ extended: false }));

//CORS
app.use(( req, res, next ) => {
    res.header( `Access-Control-Allow-Origin`, `*` );
    res.header( `Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept` );
    res.header( `Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE` );
    res.header( `Allow`, `GET, POST, PUT, DELETE` );
    next();
});

//ENDPOINTS
app.use( '/product', productsController );

//START
app.listen( PORT, () => {
    console.log( `La API REST se ha iniciado en el puerto ${PORT}`);
});
