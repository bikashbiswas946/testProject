const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/ChattingProject';
const url = 'mongodb+srv://hibikash:bikash11@cluster0.1amkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
.then(() => console.log('  Db connected SuccessFull'))
.catch((err) => console.log(err, 'Database Not Connected'))
