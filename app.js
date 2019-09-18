const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Go Shopping", "Study Dutch", "Do LC-Assignment"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
 app.get("/", function(req, res) {

      let today = new Date();
      
      let options = {
          weekday: "long",
          day: "numeric",
          month: "long"
      };

      let day = today.toLocaleDateString("en-US", options);

      res.render("list", {listTitle: day, newListItems: items});
      });
      app.post("/", function(req, res){
            let item = req.body.newItem;
          
            items.push(item);
            res.redirect("/");
           });

    app.get("/login", (req, res) => {
      request.get('', {}, (error, response) => {
        if (err) {
          console.log(err);
          return;
        } 
        const login = JSON.parse(response.body);
        console.log(login)
      })
      res.render('login', {login: email.password.result});
    })
      

 app.listen(3000, function(){
   console.log("Server is running on port 3000.")
 });