const mysql = require( 'mysql2' );
const DATASOURCE = require( '../config/Datasource.json' )
module.exports = class ProductsDao{
    constructor() {
        this.table = `PRODUCTS`;
        this.connection = mysql.createConnection( DATASOURCE );

        //Conectamos con la base de datos
        this.connection.connect(err => {
            if( err ){
                console.error(err);
                return;
            }
            console.log( 'Conexión a la base de datos establecida' );
        });
    }

    findAll(){
        const QUERY = `SELECT * FROM ${this.table}`;
        const DATA = [];
        const RESULT = this.connection.promise()
            .execute( QUERY, DATA )
            .then( ([rows, fields]) => rows );

        this.connection.end();
        return RESULT;
    }

    findById( id ){
        const QUERY = `SELECT * FROM ${this.table} WHERE id = ?`;
        const DATA = [ id ];
        const RESULT = this.connection.promise()
            .execute( QUERY, DATA )
            .then( ([rows, fields]) => rows.length == 1 ? rows[0] : Promise.reject(new Error()) );

        this.connection.end();
        return RESULT;
    }

    insert( product ){
        //Data
        const NAME = product.name != undefined ? product.name : null;
        const DESCRIPTION = product.description != undefined ? product.description : null;
        const PRICE = product.price != undefined ? product.price : null;
        const IMAGE = product.image != undefined ? product.image : null;

        //Query
        const QUERY = `INSERT INTO ${this.table} ( name, description, price, image ) VALUES ( ?, ?, ?, ? )`;
        const DATA = [ NAME, DESCRIPTION, PRICE, IMAGE ];
        const RESULT = this.connection.promise()
            .execute( QUERY, DATA )
            .then( ([rows, fields]) => rows );

        this.connection.end();
        return RESULT;
    }

    update( id, product ){
        let propsToUpdate = ``;
        let data = [];

        if( product.name != undefined ){
            propsToUpdate = `${propsToUpdate} name = ?`;
            data.push( product.name );
        }

        if( product.description != undefined ){
            propsToUpdate = `${propsToUpdate}, description = ?`;
            data.push( product.description );
        }

        if( product.price != undefined ){
            propsToUpdate = `${propsToUpdate}, price = ?`;
            data.push( product.price );
        }

        if( product.image != undefined ){
            propsToUpdate = `${propsToUpdate}, image = ?`;
            data.push( product.image );
        }

        const QUERY = `UPDATE ${this.table} SET ${propsToUpdate} WHERE id = ?`
        data.push( id );
        const RESULT = this.connection.promise()
            .execute( QUERY, data )
            .then( ([rows, fields]) => rows );

        this.connection.end();
        return RESULT;
    }

    uploadImage( id, image ){

        //Query
        const QUERY = `UPDATE ${this.table} SET image = ? WHERE id = ?`;
        const DATA = [ image, id ];
        const RESULT = this.connection.promise()
            .execute( QUERY, DATA )
            .then( ([rows, fields]) => rows );

        this.connection.end();
        return RESULT;
    }

    delete( id ){
        const QUERY = `DELETE FROM ${this.table} WHERE id = ?`;
        const DATA = [ id ];
        const RESULT = this.connection.promise()
            .execute( QUERY, DATA )
            .then( ([rows, fields]) => rows );

        this.connection.end();
        return RESULT;
    }
}