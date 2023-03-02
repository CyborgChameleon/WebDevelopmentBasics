
/*this part helps page self identify where they are in the website */

let oneFolderUp="../"
let subLvlFromRoot;
if (parent.window.location.href.indexOf("github")==-1){
    subLvlFromRoot=parent.window.location.href.split("/").length-4;
    
}else{
    subLvlFromRoot=parent.window.location.href.split("/").length-5;
}


/* 
this part imports data from navigation.json file 
But you still dont understand how this works 
so come back and understand this part when you're done learning js basics

https://youtu.be/vn3tm0quoqE
https://youtu.be/mw5i_QGDomw
https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable
https://dmitripavlutin.com/fetch-with-json/
https://jsononline.net/json-validator 

more navigation features
https://www.w3schools.com/csS/tryit.asp?filename=trycss_navbar_vertical_responsive
https://www.w3schools.com/csS/tryit.asp?filename=trycss_navbar_horizontal_responsive
https://www.w3schools.com/csS/tryit.asp?filename=trycss_navbar_sticky
https://www.w3schools.com/csS/tryit.asp?filename=trycss_dropdown_navbar
*/
async function loadlocaldata(){
    let navigationJsonUrl="./.".repeat(subLvlFromRoot)+"./database/json/navigation.json"
    return (await fetch(navigationJsonUrl)).json();
 };
 var navigation= {};
 try{
     navigation=await loadlocaldata();
 } catch (e){
     console.log("Error!");
     console.log(e);
 }



//this edit Logo relative url
let indexURL="<a href=\""+oneFolderUp.repeat(subLvlFromRoot)+"index.html\">CYBORG CHAMELEON</a>";
document.getElementById("logo").innerHTML=indexURL;



//header Navigation

document.getElementById("headerNavigationDirectory").innerHTML=navigation.headerNavigationList
.map(
    (page) =>
    
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");



// side navigation

document.getElementById("sideNavigationDirectory").innerHTML=navigation.sideNavigationList
.map(
    (page) =>
    `<li><a href="`+oneFolderUp.repeat(subLvlFromRoot)+`${page.location}">${page.title}</a></li>`
)
.join("");




//footer

document.getElementById("footer").innerHTML=
`<div>`+
    `<h4>My Other Websites</h4>`+
    
    navigation.footerNavigationList
    .map(
        (page) =>
        `<a href="${page.location}">${page.title}<br></a>`
    )
    .join("")
+
`</div>`
;



/*update the css file address*/
document.getElementById("cssFileUpdate").setAttribute("href",oneFolderUp.repeat(subLvlFromRoot)+"css/style.css");
/*try to switch getElementById with getElementsByTagName */
