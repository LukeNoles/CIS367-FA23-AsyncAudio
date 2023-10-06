const player = document.querySelector('.player')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#name')
const cover =document.querySelector('#cover')
const songs = ['Aidan', 'ParanormalIsReal', 'BestPart']

let songIndex = 2

loadSong(songs[songIndex])

function loadSong(song)
{
    title.innerText = song
    audio.src = `songs/${song}.mp3`
    cover.src = `albumart/${song}.jpg`
}

function playSong() {
    player.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    player.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length -1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])
    playSong()
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('ended', nextSong);