const io = require("socket.io")(4000)
const ytdl = require('ytdl-core');

console.log("Haha server go brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

io.on("connection", (socket) => {
    console.log("Extension go brrrrrr")
    socket.on("disconnect", () => {
        console.log("[INFO] Déco de la fu**ing extension!")
    });

    socket.on('getInfos', (URL) => {
        ytdl.getBasicInfo(URL).then(data => {
            var toSend = {
                length: data.player_response.videoDetails.lengthSeconds,
                name: data.player_response.videoDetails.title
            };
            socket.emit("updateInfos", toSend);
        });
    });
});