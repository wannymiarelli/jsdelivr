ej.addCulture( "ha-Latn", {
	name: "ha-Latn",
	englishName: "Hausa (Latin)",
	nativeName: "Hausa",
	language: "ha-Latn",
	numberFormat: {
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "₦"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["Lahadi","Litinin","Talata","Laraba","Alhamis","Juma'a","Asabar"],
				namesAbbr: ["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],
				namesShort: ["L","L","T","L","A","J","A"]
			},
			months: {
				names: ["Janairu","Fabrairu","Maris","Afrilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktoba","Nuwamba","Disamba",""],
				namesAbbr: ["Jan","Fab","Mar","Afr","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis",""]
			},
			AM: ["Safe","safe","SAFE"],
			PM: ["Yamma","yamma","YAMMA"],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd, MMMM dd, yyyy",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				M: "d MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});