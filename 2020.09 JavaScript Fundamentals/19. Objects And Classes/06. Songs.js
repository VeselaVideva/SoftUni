function songs(array) {
    let n = array.shift();
    let typeList = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let songs of array) {
        let [type, name, time] = songs.split('_');

        if (typeList === type || typeList === 'all') {
            console.log(name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
// DownTown
// Kiss
// Smooth Criminal

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
// Andalouse

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
// Replay
// Photoshop