import React, { useRef, useState } from "react";
import styles from "./Hero.module.scss";

import { BiPause, BiPlay } from "react-icons/bi";
import { VscUnmute, VscMute } from "react-icons/vsc";

const Hero = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(true);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setIsPlaying(false);
    } else if (control === "mute") {
      videoRef.current.muted = true;
      setIsMute(true);
    } else if (control === "unmute") {
      videoRef.current.muted = false;
      setIsMute(false);
    }
  };
  return (
    <div className={styles.container}>
      <video
        src="/video.mp4"
        className={styles.heroVideo}
        poster="/hero.png"
        muted
        ref={videoRef}
      />
      {!isPlaying ? (
        <BiPlay
          size={80}
          onClick={() => videoHandler("play")}
          className={styles.playButton}
        />
      ) : (
        <BiPause
          size={80}
          onClick={() => videoHandler("pause")}
          className={styles.playButton}
        />
      )}
      {isMute ? (
        <VscMute
          size={24}
          onClick={() => videoHandler("unmute")}
          className={styles.muteButton}
        />
      ) : (
        <VscUnmute
          size={24}
          onClick={() => videoHandler("mute")}
          className={styles.muteButton}
        />
      )}
    </div>
  );
};

export default Hero;
