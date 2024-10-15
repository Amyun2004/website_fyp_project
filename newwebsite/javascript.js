const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
    player.addEventListener('play', () => {
        const description = player.nextElementSibling; // Get the next sibling which is the description
        description.style.display = 'block'; // Show the description
    });

    player.addEventListener('pause', () => {
        const description = player.nextElementSibling; // Get the next sibling which is the description
        description.style.display = 'none'; // Hide the description when audio is paused
    });

    player.addEventListener('ended', () => {
        const description = player.nextElementSibling; // Get the next sibling which is the description
        description.style.display = 'none'; // Hide the description when audio ends
    });
});
