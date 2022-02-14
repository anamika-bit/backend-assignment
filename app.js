const express = require('express');
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()


app.use(express.json());

//Import routes
const postsRoute = require('./Routes/postsRouter');

//Routes
app.get('/',(req,res)=>{
    res.send('Invoice');
});



app.use('/api/posts', postsRoute);


//404 error middleware
app.use((req,res) => {
    res.status(404).json({message : "Page Not Found"})
})

//start server
const port = process.env.PORT || 3000

const startServer = async(port) => {
    await connectDB()

    app.listen(port, ()=> console.log(`Server started on http://localhost:${port}`))
}

app.listen(port)