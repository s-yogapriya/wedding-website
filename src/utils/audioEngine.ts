// Wedding Background Music Player for /audio/wedding-music.mp3

class WeddingAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private audioSrc: string = '/audio/wedding-music.mp3';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (this.audio) return;
    this.audio = new Audio(this.audioSrc);
    this.audio.loop = true; // Continuous loop mode
    this.audio.preload = 'auto';
    this.audio.volume = 0.6;

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
    });

    this.audio.addEventListener('ended', () => {
      // Fallback manual loop in case loop attribute is interrupted on some mobile browsers
      if (this.isPlaying && this.audio) {
        this.audio.currentTime = 0;
        this.audio.play().catch(() => {});
      }
    });
  }

  public play(): Promise<void> {
    this.initAudio();
    if (!this.audio) return Promise.resolve();

    this.audio.muted = this.isMuted;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch((error) => {
          console.warn('Audio play prevented or waiting for user interaction:', error);
          this.isPlaying = false;
        });
    }

    return Promise.resolve();
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public toggleMute(): boolean {
    this.initAudio();
    if (!this.audio) return true;

    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;

    if (!this.isMuted && !this.isPlaying) {
      this.play();
    }

    return this.isMuted;
  }

  public getPlayingState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  public setVolume(vol: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, vol));
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
