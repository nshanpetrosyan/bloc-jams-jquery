class Helper {
  playPauseAndUpdate (song) {
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text( totalTime );    
    player.playPause(song);
  }
}

const helper = new Helper();
