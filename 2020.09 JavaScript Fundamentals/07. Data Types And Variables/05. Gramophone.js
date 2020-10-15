function gramophone(band, album, song) {
    let fullRotation = 2.5; //seconds
    let songDuration = (album.length * band.length) * song.length / 2;
    let totalRotations = songDuration / fullRotation;

    console.log(`The plate was rotated ${Math.ceil(totalRotations)} times.`);
 }

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');