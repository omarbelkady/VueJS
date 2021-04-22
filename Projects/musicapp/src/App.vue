<template>
  <div id="app">
    <header>
        <h1>My Music</h1>
    </header>
    <main>

      <section>
        <h2 class="song-title">
          {{ current.title }} -
          <span>{{ current.artist }} </span>
        </h2>
              {{/*creating some controls*/}}
              <div class="controls">
                <button class="prev" @click="previous">Previous</button>
                <button class="play" v-if="!isPlaying" @click="play">Play</button>
                <button class="pause" v-else @click="pause">Pause</button>
                <button class="next" @click="next">Next</button>
              </div>
      </section>
      <section class="playlist">
        <h3>My Playlist</h3>
        <button v-for="mysong in songs" :key="mysong.src" @click="play(mysong)" :class="(mysong.src == current.src) ? 'song playing': 'song' ">
              {{ mysong.title }} - {{ mysong.artist }}
        </button>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    //returning an object of my state aka this is the same thing in react as useState hook
    return{
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'D.U.C.',
          artist: 'Booba',
          src: require('./assets/duc.mp3')
        },
        {
          title: 'Overdrive',
          artist: 'Hippie Sabotage',
          src: require('./assets/overdrive.mp3')
        },
        {
          title: 'Rodeo',
          artist: 'Lil Nas X',
          src: require('./assets/rodeo.mp3')
        }

      ],
      player: new Audio()
    }
  },
  methods: {
    play(mysong){
      if(typeof mysong.src != "undefined")
      {
        this.current = mysong;

        this.player.src= this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function(){
        this.index++;
        

        if(this.index > this.songs.length - 1 ){
          this.index = 0;
        }

        this.current = this.songs[this.index];

        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    
    },

    pause(){
      this.player.pause();
      this.isPlaying = false;
    },

    next(){
      this.index++;

      if(this.index > this.songs.length - 1 ){
        this.index = 0;
      }

      this.current = this.songs[this.index];

      this.play(this.current);
    },
    previous(){
      this.index--;

      if(this.index < 0){
        this.index = this.songs.length -1;
      }

      this.current = this.songs[this.index];

      this.play(this.current);
    }
  },
  created(){
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.play();
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p{
  font-family: sans-serif;
}
/*
button{
  border-radius:10px;
  padding: 2px;
  margin: 4px;
}
*/



.song-title{
  color: #212121;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-title span{
  font-weight: 400;
  font-style: italic
}

.controls{
  display: flex;
  justify-content: center;
  padding: 30px 15px;
  align-items: center;
}

header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #FFF; 
}

main{
  width: 100%;
  max-width: 768px; 
  padding: 25px;
}

button{
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.play, .pause{
  font-weight: 700;
  font-size: 20px;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: blue;
  background-color: #CC2E5D;
}

.next, .prev{
  font-weight: 700;
  font-size: 16px;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 8px;
  color: blue;
  background-color: #1fbb50;
}

.playlist{
  padding: 0px 30px;
}

.playlist h3{
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.playlist .song{
  display: block; /*from crammed to every song on one line*/
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor:pointer;
}

.playlist .song:hover{
  color: #FF5858;
}

.playlist .song .playing{
  color: #FFF;
  background-image: linear-gradient(to right, #000046, #1cb5e0);
}

button:hover{
  opacity: 0.8;
}
</style>
