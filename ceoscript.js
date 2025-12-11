const headerArray = ["Wipe your feet before entering", "Viewer discretion is advised", "Don't let the door hit you on the way in",
					"Winner of the esteemed Gold X Award in 2004", "Infinity out of 10 dentists recommend", "Please keep your hands and feet in the ride at all times",
					"State your business immediately", "This message will self destruct in 2 seconds", 
					"MESSAGE REDACTED FOR EXPLICIT CONTENT", "If you see all these messages, you'll be rewarded handsomely"]; 
const blogTxt = '';

const projTxt = '{"projects":[{"name":"Tall Order", "desc":"My first Godot game. Can you catch all the falling ingredients? Just be sure not to get anything rotten in the mix.;I was the sole developer of this project, handling the programming, art and sound effects.", "tools":["Godot", "GDScript"], "image":"imgs/project_imgs/Tall Order.png", "link":"https://github.com/CE-0/Tall-Order", "id":"tall-order"}, {"name":"Grave Danger", "desc":"A submission to the Pixel Game Jam (May 11 - May 20) that I developed in a team. Grow as many plants as you can in this garden that hides a deadly secret.", "tools":["Godot", "GDScript"], "image":"imgs/project_imgs/Grave Danger.png", "link":"https://the-shelley.itch.io/grave-danger", "id":"grave-danger"}, {"name":"Wave Mage", "desc":"A submission to the 2025 Game Off (November 1 - December 1) that I developed as part of a team. As a medieval wizard, use and manipulate the power of sound waves to ward off vicious monsters.", "tools":["Godot", "GDScript", "JSON"], "image":"imgs/project_imgs/Wave Mage.png", "link":"https://pancholope321.itch.io/wave-mage", "id":"wave-mage"}]}';

//const projTxt = '{"projects":[{"name":"Tall Order", "desc":"My first Godot game. Can you catch all the falling ingredients? Just be sure not to get anything rotten in the mix.", "image":"imgs/project_imgs/Tall Order.png", "link":"https://github.com/CE-0/Tall-Order", "id":"tall-order"}, {"name":"Grave Danger", "desc":"A submission to the Pixel Game Jam (May 11 - May 20) that I developed in a team. Grow as many plants as you can in this garden that hides a deadly secret.", "image":"imgs/project_imgs/Grave Danger.png", "link":"https://the-shelley.itch.io/grave-danger", "id":"grave-danger"}]}';

const linkTxt = '{"links": [{"name":"Github", "image":"imgs/link_imgs/GitHub logo.jpg", "url":"https://github.com/CE-0"}, {"name":"itch.io", "image":"imgs/link_imgs/Itch-io logo.png", "url":"https://ce-0.itch.io/"}, {"name":"Wordpress", "image":"imgs/link_imgs/Wordpress.png", "url":"https://quartertowin.wordpress.com/"}]}';

const jsonProjects = JSON.parse(projTxt); 

const jsonLinks = JSON.parse(linkTxt);

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function loadList() {
	let path = window.location.pathname;
	let page = path.split("/").pop(); 
	
	switch (page) {
		case "projects.html":
			for (let i = 0; i < jsonProjects.projects.length; i++) {
				let dsc = ""; 
				let tools = `<p class="sitetext">Tools: `;
				let dscArr = jsonProjects.projects[i].desc.split(";");
				for (let j = 0; j < dscArr.length; j++) {
					dsc += `<p class="sitetext">${dscArr[j]}</p>`
				}
				for (let k = 0; k < jsonProjects.projects[i].tools.length; k++) {
					tools += `${jsonProjects.projects[i].tools[k]}` 
					if (k != jsonProjects.projects[i].tools.length-1) {
						tools += `, `
					}
				}
				tools += `</p>`
				document.getElementsByClassName("projectList")[0].innerHTML += `<h2 id="${jsonProjects.projects[i].id}">${jsonProjects.projects[i].name}</h2> <img src="${jsonProjects.projects[i].image}" width="400" height="400"> ${dsc} <br> ${tools} <br> <a href="${jsonProjects.projects[i].link}" target="_blank">Find it here</a> <hr>`;
			} 
		break;
		
		case "links.html":
			for (let j = 0; j < jsonLinks.links.length; j += 2) {
				document.getElementsByClassName("listOLinks")[0].innerHTML += `<tr>`;
				let txt = `<td><a href="${jsonLinks.links[j].url}" target="_blank"><img src="${jsonLinks.links[j].image}" width="100" height="100"></a> <p class="sitetext">${jsonLinks.links[j].name}</p></td>`;
				try {
					txt += `<td><a href="${jsonLinks.links[j+1].url}" target="_blank"><img src="${jsonLinks.links[j+1].image}" width="100" height="100"></a> <p class="sitetext">${jsonLinks.links[j+1].name}</p></td>`;
				}
				catch (err) {
				} 
				finally { 
					document.getElementsByClassName("listOLinks")[0].innerHTML += txt;
					document.getElementsByClassName("listOLinks")[0].innerHTML += `</tr>`;
				}
			} 
		break;
	}
}

//document.getElementsByClassName("listOLinks")[0].innerHTML = `<a href="${jsonLinks.links[0].url}" target="_blank"><img src="${jsonLinks.links[0].image}" width="100" height="100"></a> <p class="sitetext">${jsonLinks.links[0].name}</p> <hr>`;					 

document.getElementById("header").innerHTML = headerArray[getRandomInt(headerArray.length)]; 

document.getElementsByClassName("navbar")[0].innerHTML = "<a href=\"skills.html\">SKILLS</a> &emsp; <a href=\"projects.html\">PROJECTS</a> &emsp; <a href=\"links.html\">CONTACT/LINKS</a> &emsp;";

loadList();

/*if (document.getElementsByClassName("navbar")[0] == null) {
	document.getElementsByClassName("projectList")[0].innerHTML = `<a href="${jsonLinks.links[i].url}" target="_blank"><img src="${jsonLinks.links[i].image}" width="300" height="300"></a> <p class="sitetext">${jsonLinks.links[i].name}</p> <hr>`;
}*/








