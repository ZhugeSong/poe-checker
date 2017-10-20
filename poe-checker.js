(function() {
"use strict";

const https = require("https");
const config = require("./config");

for(let username in config.toCheck) {
	const charactersToList = config.toCheck[username];

	if(config.toCheck.hasOwnProperty(username)) {
		const req = https.request(
			{
				hostname: "www.pathofexile.com",
				path: `/character-window/get-characters?accountName=${username}`,
				method: "GET",
			},
			(resp) => {
				console.log(`\n${username}:`);

				if(resp.statusCode == 200) {
					resp.on('data', (d) => {
						const characters = JSON.parse(d);

						for(let i in characters) {
							const character = characters[i];

							if(charactersToList.length <= 0 || charactersToList.indexOf(character.name) >= 0) {
								console.log(`${character.name} (${character.class} ${character.level})`);
							}
						}
					});
				} else {
					console.log(`Couldn't read characters: ${resp.statusCode} ${resp.statusMessage}`);
				}
			}
		).on("error", (e) => {
			console.error(e);
		});

		req.end();
	}
}

})();
