
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tes")
.then(()=> {
    console.log('mongodb connected');
})
.catch(err => {
    console.error('mongodb error:', err);
})

const article = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    dateTime: {
        type: Date
    }
})

const user = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
})

const articleSchema = mongoose.model('Articlesdatas', article);
const userSchema = mongoose.model('Usersdatas', user);

module.exports = {
    User: userSchema,
    Article: articleSchema
}






//buat model atau collection
// artinya collection articlesdata bakal pake schema dari articleSchema
// module.exports = new mongoose.model('ArticlesData', articleSchema);
// module.exports = new mongoose.model('UsersData', userSchema);