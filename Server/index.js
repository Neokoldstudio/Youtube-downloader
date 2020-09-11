const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
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