// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Power Hour video playlist (id, start time)
var current_hour = [
	// Disney
	// ["IgY6vI_EDbM",	0],
	// ["hoUH9b6xHyg",	71],
	// ["62qtrR2eCu4",	27],
	// ["HJy8kdNNrvI",	0],
	// ["HI0x0KYChq4",	52],
	// ["xHYvpXe75b8",	64],
	// ["3jQIIXuhsC8",	43],
	// ["89U_vyP3To0",	50],
	// ["XToT1yur4XA",	37],
	// ["P618JSRpX2U",	43],
	// ["KAuQTZ3Btfk",	25],
	// ["XgOCTN14nzA",	54],
	// ["DLRKUCXzfHM",	19],
	// ["VTkJNetaL9c",	30],
	// ["IRsrP_ktr1g",	23],
	// ["KATAokMjLis",	12],
	// ["H9_a3KaP74E",	89],
	// ["tTUZswZHsWQ",	0],
	// ["gCGTBjzgWBI",	40],
	// ["CLnADKgurvc",	10],
	// ["bcUFYQpr-uc",	0],
	// ["tTuwo_TqlhQ",	0],
	// ["olUShJ1BQv4",	2],
	// ["QzvvQ7HOW44",	13],
	// ["zPUe7O3ODHQ",	25],
	// ["aO0abpVd5UI",	28],
	// ["O9MvdMqKvpU",	0],
	// ["yg8116aeD7E",	0],
	// ["JUq8i_NGytE",	0],
	// ["TrRbB-qUJfY",	8],
	// ["R8rnMc22AG8",	0],
	// ["SbCl6m4gDR0",	12],
	// ["ZhHixX-AZl4",	12],
	// ["t6Ol7VsZGk4",	10],
	// ["Shk0JoGcZ60",	26],
	// ["fr4xUhPkywQ",	3],
	// ["lHNFowhuwrE",	12],
	// ["5P3vp-sOwps",	62],
	// ["TVcLIfSC4OE",	0],
	// ["yOL-EJZjmp0",	0],
	// ["1k1t8zeIA6o",	49],
	// ["arHv0Iu4vSA",	0],
	// ["mIwa9sPFT5I",	17],
	// ["2Kj8Geuxs60",	6],
	// ["KA6V6OWohbY",	27],
	// ["D-P-aO0PgD0",	83],
	// ["gkhOc6iXN6U",	11],
	// ["IXGgDIj5KvA",	0],
	// ["flBrQ5GT-Kc",	75],
	// ["LcxYwwIL5zQ",	4],
	// ["f2finUM4Y1Q",	18],
	// ["l8UFnc85-xM",	0],
	// ["L0MK7qz13bU",	64],
	// ["hu39Q647m-4",	34],
	// ["pnZbiKKydWU",	2],
	// ["XtAKg9HknmY",	17],
	// ["fLebq8q1hS4",	25],
	// ["4EHpbZ6LHpw",	11],
	// ["VuJTqmpBnI0",	58],
	// ["y5dpfFfcQ3E",	0]
	// Philly
	["U1crmn8kwMw", 8],
	["ormnL7n-bPg", 15],
	["-3psYajGSaM", 61],
	["yTThyQPoXxY", 130],
	["py5a999-rqA", 33],
	["ERr2gqqM4i8", 10],
	["GKX9rmeMgUU", 10440],
	["Kr0tTbTbmVA", 50],
	["A4DNXBkfksI", 44],
	["HI7kWmkW7VU", 0],
	["LqVxaRiekac", 0],
	["WvDlGGSsof8", 35],
	["Iw052JysoM8", 213],
	["XqnGeSFhKV4", 60],
	["Tll9jQHvOfU", 140],
	["_YYmfM2TfUA", 103],
	["TuIM9pWRPBo", 14],
	["B1EWwfXwhy4", 246],
	["1nCqRmx3Dnw", 8],
	["1Op1zr5g-30", 0],
	["MF0XuGSSTLo", 40],
	["JPsjV6lnqYY", 68],
	["tc7Kx468fiY", 20],
	["NJA6JZ_TKaw", 24],
	["fcziw7helVg", 165],
	["ZP1QEA954yA", 68],
	["DZd2fEfgNvA", 43],
	["F64l1Pe471w", 7],
	["YjZR1Rjj_p0", 186],
	["EErSKhC0CZs", 0],
	["9GZIfOXKE70", 18],
	["nzTSadgkhkk", 30],
	["_yAk5u2vhDM", 0],
	["AKRCOAVtXgU", 10],
	["ZPuYJXHYhsY", 103],
	["RC-e5vs6NeY", 0],
	["wHSH-NpCQOw", 64],
	["gEKK3GVd150", 15],
	["Rciee-oQLoI", 0],
	["S8gfqs1-NuE", 90],
	["-OcsUs2VdxY", 261],
	["ndJ8EnqR02w", 2760],
	["4VMOkpm3eoA", 82],
	["UhQyZFrYNzw", 115],
	["WmiVkFyy7pU", 18],
	["4zdIpXJlM8A", 90],
	["eMBguPuKPi4", 0],
	["6bMmhKz6KXg", 30],
	["i78BZfqyQB0", 60],
	["PN08Tr0oOT4", 2],
	["9Z4f2_Vznx4", 30],
	["uxNrYRMrkl8", 77],
	["shLqsow3jyU", 60],
	["Rv1kHn0minE", 0],
	["iXRxic7gzRE", 0],
	["o7jF5nAQYBg", 0],
	["NksyfysBnAU", 90],
	["eGDBR2L5kzI", 0],
	["rqLp4XdVk80", 225]
];

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
