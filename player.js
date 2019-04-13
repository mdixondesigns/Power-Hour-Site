// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Globabl vars
var video_count = 0; // Current position in PH
var video_total = current_hour.length; // Total videos in PH (should be 60)
var next_video_time = 60; // Seconds before video switches (should be 60)

// Creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "390",
		width: "640",
		videoId: current_hour[video_count][0],
		playerVars: { autoplay: 0, controls: 1, start: current_hour[video_count][1] },
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange,
			onError: onErrorMessage
		}
	});
}

function onPlayerReady(event) {
	//ERR Does not play video...
	event.target.playVideo();
	document.getElementById("playlist").appendChild(populateList(current_hour));

	setInterval(update, 100);
}

function onPlayerStateChange(event) {}

function stopVideo() {
	player.stopVideo();
}

function nextVideo() {
	video_count++;
	if (video_count < video_total) {
		var current_video = current_hour[video_count][0];
		var current_video_start = current_hour[video_count][1];
		player.loadVideoById(current_video, current_video_start);
	} else {
		stopVideo();
	}
}

function update() {
	var dur = player.getDuration();
	var sec = Math.floor(dur % 60);
	if (sec < 10) {
		sec = "0" + sec.toString();
	}
	var min = Math.floor(dur / 60);

	var url = player.getVideoUrl();

	var state = player.getPlayerState();
	var status = "";
	if (state == -1) {
		status = "Unstarted";
	} else if (state == 0) {
		status = "Ended";
	} else if (state == 1) {
		status = "Playing";
	} else if (state == 2) {
		status = "Paused";
	} else if (state == 3) {
		status = "Buffering";
	} else if (state == 5) {
		status = "Cued";
	}

	var time = Math.floor(player.getCurrentTime());
	var elapsed = time - current_hour[video_count][1];

	if (elapsed >= next_video_time) {
		nextVideo();
	}

	log.innerHTML = "";
	log.innerHTML = "Video #: " + (video_count + 1);
	//log.innerHTML += "Video duration: " + min + ":" + sec;
	//log.innerHTML += "<br>Current time: " + time;
	//log.innerHTML += "<br>Elapsed Time: " + elapsed;
	//log.innerHTML += "<br>Time Remaining: " + (next_video_time - elapsed);
	//log.innerHTML += "<br>Video URL: " + url;
	log.innerHTML +=
		"<br>Video Status: <span class='" +
		status.toLowerCase() +
		"'>" +
		status +
		"</span>";

	progress.value = elapsed;
}

function onErrorMessage() {
	nextVideo();
}

function populateList(array) {
	// Create the list element:
	var list = document.createElement("ol");

	for (var i = 0; i < array.length; i++) {
		// Create the list item:
		var item = document.createElement("li");

		item.dataset.vid = i;
		// Set its contents:
		item.appendChild(document.createTextNode("Video " + i));
		// Add it to the list:
		list.appendChild(item);
	}

	// Finally, return the constructed list:
	return list;
}

function goToVideo(num) {
	video_count = num;

	var current_video = current_hour[video_count][0];
	var current_video_start = current_hour[video_count][1];
	player.loadVideoById(current_video, current_video_start);
}

document.addEventListener(
	"click",
	function(event) {
		if (event.target.dataset.vid != "") {
			goToVideo(event.target.dataset.vid);
		}
	},
	false
);
