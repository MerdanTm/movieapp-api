const mongoose = require('mongoose');
module.exports = () =>
{
    mongoose.connect('mongodb+srv://Merdan-Tm:MrDn1975@cluster0.qfv3s.mongodb.net/AppData?retryWrites=true&w=majority',
     {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
}