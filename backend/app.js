const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/yachna", (req, res) => {
    res.json({ message: "Hello from yachna!" });
});
app.get("/view", (req, res) => {
    res.json({ message: "Hello from yachna!" });

});



app.listen(3001,()=>{
    console.log('on port 3001')
})