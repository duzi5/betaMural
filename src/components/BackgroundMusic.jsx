import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.volume = 0.5; // Defina o volume desejado (0 a 1)
    audioElement.loop = true; // Reprodução em loop

    // Inicia a reprodução quando o componente é montado
    audioElement.play();

    // Pausa a reprodução quando o componente é desmontado
    return () => {
      audioElement.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} src="music2.mp3"  />
  );
}

export default BackgroundMusic;


