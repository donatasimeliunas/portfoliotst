// components/VideoPlayer.tsx
'use client'
import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

type SubtitleTrack = {
  src: string;
  srclang: string;
  label: string;
  default?: boolean;
};

type VideoPlayerProps = {
  src: string;
  subtitles?: SubtitleTrack[];
};

export default function VideoPlayer({ src, subtitles = [] }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<videojs.Player>();

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        fluid: true,
        preload: 'auto',
        sources: [{ src, type: 'application/x-mpegURL' }],
      });
    }
    return () => {
      playerRef.current?.dispose();
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" playsInline>
        {subtitles.map(({ src, srclang, label, default: isDefault }, index) => (
          <track
            key={index}
            kind="subtitles"
            src={src}
            srcLang={srclang}
            label={label}
            default={isDefault}
          />
        ))}
      </video>
    </div>
  );
}
