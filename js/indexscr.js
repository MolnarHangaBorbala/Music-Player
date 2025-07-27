const clientId = '9fa0398c';
const searchBtn = document.getElementById('searchBtnId');
const searchInput = document.getElementById('inputId');
const results = document.getElementById('results');
const audioPlayer = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const currentTime = document.getElementById('currentTime');
const trackTime = document.getElementById('trackTime');
const vinyl = document.getElementById('vinylId');
const volumeBar = document.getElementById('volumeBar');

volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
        vinyl.style.animationPlayState = 'running';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
        vinyl.style.animationPlayState = 'paused';
    }
});

audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '▶';
    vinyl.style.animationPlayState = 'paused';
});

// Update play/pause button when audio ends
audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime;
    const duration = audio.duration;
    seekBar.value = (current / duration) * 100;

    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60).toString().padStart(2, '0');

    const minutes1 = Math.floor(duration / 60);
    const seconds1 = Math.floor(duration % 60).toString().padStart(2, '0');

    currentTime.textContent = `${minutes}:${seconds}`;
    trackTime.textContent = `${minutes1}:${seconds1}`;
});

// Update seek bar when audio is loaded
seekBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (seekBar.value / 100) * duration;
});

// Handle search button click
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (!query) return;

    results.innerHTML = 'Searching...';
    results.style.display = 'block';

    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=10&namesearch=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            results.innerHTML = '';

            if (data.results.length === 0) {
                results.innerHTML = 'No results found.';
                return;
            }

            data.results.forEach(track => {
                const trackDiv = document.createElement('div');
                trackDiv.classList.add('track');

                trackDiv.innerHTML = `
                    <div class="trackDiv1" data-url="${track.audio}" data-name="${track.name}" data-artist="${track.artist_name}">
                        <div class="trackLeft">
                            <img src="${track.image}" alt="${track.name}">
                        </div>
                        <div class="trackRight">
                            <strong>${track.name}</strong><br/>
                            <em>${track.artist_name}</em>
                        </div>
                    </div>`;
                results.appendChild(trackDiv);
            });
        })
        .catch(err => {
            console.error(err);
            results.innerHTML = 'Error fetching tracks.';
        });
});

// Handle click on search results to play audio
results.addEventListener('click', e => {
    playPauseBtn.textContent = '⏸';
    playPauseBtn.disabled = false;
    vinyl.style.animationPlayState = 'running';

    const target = e.target.closest('.trackDiv1');
    if (!target) return;

    const audioUrl = target.dataset.url;
    const title = target.dataset.name;
    const artist = target.dataset.artist;

    audioPlayer.src = audioUrl;
    audioPlayer.play();
    nowPlaying.innerHTML = `
            <b>Now Playing:</b>
            <div id="scrollCont">
                <p id="scrollText"><strong>${title}</strong> <em> by ${artist}</em></p>
            </div>`;
    results.style.display = 'none';

    setTimeout(() => {
        const container = document.getElementById('scrollCont');
        const text = document.getElementById('scrollText');

        if (text.scrollWidth <= container.clientWidth) {
            text.style.animation = 'none';
            text.style.paddingLeft = '0';
        } else {
            text.style.animation = 'scroll-left 10s linear infinite';
            text.style.paddingLeft = '100%';
        }
    }, 100);
});