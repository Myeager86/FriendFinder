const path = require("path");

const friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends.friendArray);
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
    
        console.log(newFriend);
        friends.friendArray.push(newFriend);
    
        res.json(newFriend);
    
    });
};
