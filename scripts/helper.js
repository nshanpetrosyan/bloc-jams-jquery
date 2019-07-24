class Helper {
  play.PauseAndUpdate (song) {
    const duration = player.getDuration();
    $('#time-control .total-time').text(duration);
    player.playPause(song);
  }
}

const helper = new Helper();
