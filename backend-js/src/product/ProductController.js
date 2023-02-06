const express = require( 'express' );
const multer = require( 'multer' );
const ProductsDao = require( './ProductsDao' );

const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });
const upload = multer({ dest: './uploads' });

router.get( `/`, ( req, res ) => {
    const productsDao = new ProductsDao();
    productsDao.findAll( res )
        .then( result => res.json( result ))
        .catch( error => res.status( 500 ).send( `Error al obtener los productos` ));
});

router.get( `/:id`, ( req, res ) => {
    const ID = req.params.id;
    const productsDao = new ProductsDao();
    productsDao.findById( ID )
        .then( result => res.json( result ))
        .catch( error => res.status( 500 ).send( `Error al obtener el producto con id: ${ID}` ));
});

router.post( `/`, upload.single( 'image' ), ( req, res ) => {
    const filetypes = /jpeg|jpg|png/;
    const isImageExists = req.file != undefined;
    const isAcceptMimetype = isImageExists ? filetypes.test( req.file.mimetype ) : false;
    const isAccepExtension = isImageExists ? filetypes.test( req.file.originalname.toLowerCase() ) : false;
    const path = isImageExists ? req.file.path : undefined;

    if( !isImageExists || (isAcceptMimetype && isAccepExtension) ) {
        const DATA = {
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price,
            "image": path,
        }
        const productsDao = new ProductsDao();
        productsDao.insert( DATA )
            .then(result => res.json(result))
            .catch(error => res.status(500).send( `Error al guardar el producto con los siguientes datos: ${DATA}` ));
    }
    else{
        res.status( 400 ).send( `Solo se admiten imágenes` );
    }
});

router.put( `/:id`, upload.single( 'image' ), ( req, res ) => {
    const filetypes = /jpeg|jpg|png/;
    const isImageExists = req.file != undefined;
    const isAcceptMimetype = isImageExists ? filetypes.test( req.file.mimetype ) : false;
    const isAccepExtension = isImageExists ? filetypes.test( req.file.originalname.toLowerCase() ) : false;
    const path = isImageExists ? req.file.path : undefined;

    if( !isImageExists || (isAcceptMimetype && isAccepExtension) ) {
        const ID = req.params.id;
        const DATA = {
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price,
            "image": path,
        }
        const productsDao = new ProductsDao();
        productsDao.update( ID, DATA )
            .then(result => res.json(result))
            .catch(error => res.status(500).send( `Error al actualizar el producto con id: ${ID} con los siguientes datos: ${DATA}` ));
    }
    else{
        res.status( 400 ).send( `Solo se admiten imágenes` );
    }
});

router.delete( `/:id`, ( req, res ) => {
    const ID = req.params.id;
    const productsDao = new ProductsDao();
    productsDao.delete( ID )
        .then( result => res.json( result ))
        .catch( error => res.status( 500 ).send( `Error al eliminar el producto con id: ${ID}` ));
});

module.exports = router;