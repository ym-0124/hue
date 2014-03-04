var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var displayError = function(err){
    console.error(err);
};

var hostName = "192.168.11.7",
    userName = "newdeveloper",
    api;

api = new HueApi(hostName, userName);

// --------------------------
// Using a promise
//api.getFullState().then(displayResult).done();

api.setLightState(1, {"on":true}).then(displayResult).fail(displayError).done();
// --------------------------
// Using a callback
//api.getFullState(function(err, config) {
//	if (err) throw err;
//	displayResult(config);
//    });

