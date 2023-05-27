import Plyr from 'plyr';

const player = new Plyr('#player', {
  seekTime: 5,
 
  controls: [
    'play-large', // The large play button in the center
    'restart', // Restart playback
    'rewind', // Rewind by the seek time (default 10 seconds)
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'settings', // Settings menu
    'airplay', // Airplay (currently Safari only)
    'fullscreen',
  ]
});
const players = Plyr.setup('.js-player');


