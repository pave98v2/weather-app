const express = require("express");
const app = express();

app.get("/getWeather", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
/*
let apiKey = $OPENWEATHER_API_KEY;
        let lat = "";
        let long = "";
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+
        '&lon='+long+'&appid='+apiKey)
          .then(response => {
            this.setState({
              data: response.data,
              loading: false,
            });
          })
          .catch(error => {
            this.setState({
              error: error,
              loading: false,
            });
          }); */