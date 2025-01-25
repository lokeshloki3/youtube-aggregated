var player;

// YouTube API initialization
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'inWWhr5tnEA',
        playerVars: {
            start: 71,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("YouTube player is ready!");
}

function onPlayerStateChange(event) {
    console.log("Player state changed: " + event.data);
}

var completedVideos = 1; 
var totalVideos = 4;

function updateProgressBar() {
    var progressPercentage = (completedVideos / totalVideos) * 100;
    document.querySelector('.progress').style.width = progressPercentage + '%';

    document.querySelector('.progress-tracker p').textContent = `${Math.round(progressPercentage)}% Complete`;}

// Handle checkbox
var checkboxes = document.querySelectorAll('.video-list input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            completedVideos++;
        } else {
            completedVideos--;
        }
        updateProgressBar();
    });
});

// Initial progress update (in case some videos are already checked)
updateProgressBar();

// AI-Generated Summary
var videoSummary = "This video introduces the concept of Web Security and its importance. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut inventore sequi modi obcaecati ullam numquam ut animi accusantium eius laboriosam itaque, voluptatem sunt qui ipsam corrupti. Rem, totam ratione.";
document.getElementById('video-summary').textContent = videoSummary;

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });
});
