const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')

const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

const currentTimeEl= document.getElementById('current-time')
const durationEl= document.getElementById('duration')

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Object 
const songs = [
    {
        name: 'ibolipa-1',
        displayName: 'Mahni-1',
        artist: 'Artist-1',
    },
    { name: 'israil-1' ,
      displayName: 'Mahni-2' ,
      artist: 'Artist-2' ,
    },
    {name: 'maral-1',
    displayName: 'Mahni-3' ,
    artist: 'Artist-3' ,
},

    {
        name: 'uzeyir-1' ,
    displayName: 'Mahni-4' , 
    artist: 'Artist-4' ,
},
]


let isPlaying = false


function playSong(){
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause' )
    music.play()

}

function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    music.pause()
}

// ternary operator
//callback
playBtn.addEventListener('click', () => (isPlaying  ? pauseSong() : playSong()))


function loadSong(mahni){
    title.textContent =mahni.displayName
    artist.textContent = mahni.artist
    music.src = `./music/${mahni.name}.mp3`
}

let songIndex = 0

function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)