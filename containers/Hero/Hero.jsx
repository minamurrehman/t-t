import React, { useRef, useState } from "react";
import styles from "./Hero.module.scss";

import { BiPause, BiPlay } from "react-icons/bi";
import { VscUnmute, VscMute } from "react-icons/vsc";

const Hero = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  const [isMouse, setIsMouse] = useState(false);

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
        autoPlay
        ref={videoRef}
        onMouseOver={() => setIsMouse(true)}
        onMouseOut={() => setIsMouse(false)}
      />
      {!isPlaying ? (
        <BiPlay
          size={80}
          onMouseEnter={() => setIsMouse(true)}
          onClick={() => videoHandler("play")}
          className={`${styles.playButton} ${isMouse ? "block" : "hidden"}`}
        />
      ) : (
        <BiPause
          size={80}
          onMouseEnter={() => setIsMouse(true)}
          onClick={() => videoHandler("pause")}
          className={`${styles.playButton} ${isMouse ? "block" : "hidden"}`}
        />
      )}
      <div className={styles.muteButton}>
        {isMute ? (
          <VscMute size={24} onClick={() => videoHandler("unmute")} />
        ) : (
          <VscUnmute size={24} onClick={() => videoHandler("mute")} />
        )}
      </div>
    </div>
  );
};

export default Hero;
