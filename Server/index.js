const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.listen(4000, () => {
    console.log("haha server go brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
});

app.get('/downloadVideo', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="Video.mp4"');
    ytdl(URL, {
        format: 'mp4',
        }).pipe(res);
    });

app.get('/downloadAudio', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename= "Audio.mp3"');
    ytdl(URL, {
        filter: "audioonly",
        }).pipe(res);
});

/* app.get("/getInfo", (req, res) => {
    var URL = req.query.URL;
    ytdl.getBasicInfo(URL).then(data => {
       res.send(data.playerResponse.videoDetails.lengthSeconds);
    });
}); */