const mongoose = require('mongoose');
mongoose.set({strictQuery: false})
mongoose.connect('mongodb+srv://admin:Aayush888999@cluster0.6jypw5v.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => {
    console.log('Connection sucessfull on database');
}).catch(error => {
    console.log(error)
})  