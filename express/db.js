var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://eemm1:E15062002m@cluster0.ck5wi.mongodb.net/react', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;