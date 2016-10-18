// ARRAY of WORDS //

var songs = ["truckin", "touch\xa0of\xa0grey", "sugar\xa0magnolia", "casey\xa0jones", "uncle\xa0johns\xa0band", "friend\xa0of\xa0the\xa0devil", "franklin\xa0tower", "estimated\xa0prophet", "eyes\xa0of\xa0the\xa0world", "box\xa0of\xa0rain", "us\xa0blues", "the\xa0golden\xa0road", "one\xa0more\xa0saturday\xa0night", "fire\xa0on\xa0the\xa0mountain", "the\xa0music\xa0never\xa0stopped", "hell\xa0in\xa0a\xa0bucket", "ripple"];

// CHOOSES WORD and RETURNS //
exports.chooseSong = function(){
	var randNum = Math.floor((Math.random()*songs.length)+1);
	return songs[randNum];
}

