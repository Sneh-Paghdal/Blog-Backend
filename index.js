const app = require('./app.js');
const db = require('./config/db.js');

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Blog App");
    console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});