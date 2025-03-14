const headerArray = ["Wipe your feet before entering", "Viewer discretion is advised", "Don't let the door hit you on the way in",
					"Winner of the esteemed Gold X Award in 2004", "5 out of 10 dentists recommend", "Please keep your hands and feet in the ride at all times",
					"State your business immediately", "This message will self destruct in 2 seconds", 
					"MESSAGE REDACTED FOR EXPLICIT CONTENT", "If you see all these messages, you'll be rewarded handsomely"]; 
const blogTxt = '';

const projTxt = '{"projects":[{"name":"Tall Order", "desc":"My first Godot game. Can you catch all the falling ingredients? Just be sure not to get anything rotten in the mix.", "image":"imgs/project_imgs/Tall Order.png", "link":"https://github.com/CE-0/Tall-Order"}]}';

const linkTxt = '{"links": [{"name":"Github", "image":"imgs/link_imgs/GitHub logo.jpg", "url":"https://github.com/CE-0"}, {"name":"itch.io", "image":"imgs/link_imgs/Itch.io logo.png", "url":"https://ce-0.itch.io/"}]'

const jsonProjects = JSON.parse(projTxt); 

const jsonLinks = JSON.parse(linkTxt);

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
					 
document.getElementById("header").innerHTML = headerArray[getRandomInt(headerArray.length)]; 

for (let i = 0; i < jsonProjects.projects.length; i++) {
	document.getElementsByClassName("projectList")[0].innerHTML = `<h2>${jsonProjects.projects[i].name}</h2> <img src="${jsonProjects.projects[i].image}" width="400" height="400"> <p class="sitetext">${jsonProjects.projects[i].desc}</p> <a href="${jsonProjects.projects[i].link}" target="_blank">Find it here</a> <hr>`
} 

for (let i = 0; i < jsonLinks.links.length; i++) {
	document.getElementsByClassName("linkList")[0].innerHTML = `<a href="${jsonLinks.links[i].url}" target="_blank"><img src="${jsonLinks.links[i].image}"></a> <p class="sitetext">${jsonLinks.links[i].name}</p> <hr>`
} 

