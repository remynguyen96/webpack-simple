export const YoutubeApi = ({ loadYT, element = 'youtube-video', autoplay= 0, controls= 0, showinfo= 0, videoId= 'NUKKzdVy0EI', onPlayerReady= null, onPlayerStateChange= null }) => {
  return loadYT.then((youtube) => {
    new youtube.Player(element, {
      width: 400,
      height: 400,
      videoId,
      playerVars: {
        autoplay,
        controls,
        showinfo,
        modestbranding: 1,
        playlist: videoId,
        disablekb: 1,
        rel: 0,
        loop: 1,
        fs: 0,
        iv_load_policy: 3,
        autohide: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      }
    });
  });
};
