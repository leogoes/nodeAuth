const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://leo:1234@cluster0-msob2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('it works')
}).catch((erro) => {
    console.log('Erro: ' + erro);
})