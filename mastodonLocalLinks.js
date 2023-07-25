//Here is the annotated code

let myserver="tech.lgbt"; //change this to the name of your server
["account","status"].forEach((c)=>{
    //^some pages use account__display-name, others use status__display-name. This handles both.
    for (let a of document.getElementsByClassName(c+"__display-name")){//find every profile link on the page
	let link = a.getAttribute("href"); //get the url of that link
	if(!link.includes(myserver)){
            //^ignore urls that already mention my server; don't want to change them (or re-change them)
	    a.setAttribute("href",link.replace(/https:..([^\/]+)\/([^\/]+)/,`https://${myserver}/$2@$1`));
	    //^take a link like https://mastodon/whomever and rewrite it to https://myserver/whomever@mastodon.
	    a.style.color="cyan";//change the color of the link to cyan
	}
    }
});


/*
  To make into a bookmarklet, create a bookmark in your  browser and paste this into the URL:

  javascript: (()=>{myserver="tech.lgbt";["account","status"].forEach((c)=>{for (a of document.getElementsByClassName(c+"__display-name")){L = a.getAttribute("href");if(!L.includes(myserver)){a.setAttribute("href",L.replace(/https:..([^\/]+)\/([^\/]+)/,`https://${myserver}/$2@$1`));a.style.color="cyan";}}})})();

*/
