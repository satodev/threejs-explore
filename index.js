const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./'))


app.get('/', function(req, res){
     res.sendFile('index.html');
});

app.listen(port, ()=> console.log(`server launched on port ${port}`));