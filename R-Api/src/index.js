const customExpress = require('./Config/customExpress');

const app = customExpress();

app.listen(3333, ()=> {
    console.log("🦜 Ara")
});