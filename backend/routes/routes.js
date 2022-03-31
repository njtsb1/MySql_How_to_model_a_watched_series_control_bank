module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Welcome to the series and movies catalog'})
    })

    server.get('/movies', (require, response) => {
        const sql = '';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("movies: ", res);
            response.json(res)
        })
    })
};