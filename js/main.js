// function loadJSON(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if (xhr.readyState===4 && xhr.status=="200") {
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send();
// }
//
// loadJSON('data/data.json', function(text){
//   var data=JSON.parse(text);

function loadJSON(url) {
  return new Promise((resolve, reject) => {
    return fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    })
  })
}

var myPromise = loadJSON("data/data.json");
myPromise.then(data => {


  console.log(data);
  profileData(data.profiles);
});
var mainDiv=document.querySelector(".main");
function profileData(pro){

for(var i=0; i<pro.length; i++){
  var subDiv=document.createElement("div");
  subDiv.classList.add("subdiv");
  mainDiv.appendChild(subDiv);
  var images=document.createElement("img");
  images.src=pro[i].image;
  subDiv.appendChild(images)
  var name=document.createElement("h2");
  name.textContent=pro[i].name;
  var mail=document.createElement("h5");
  mail.textContent=pro[i].mail;
  var label=document.createElement("h3");
  label.textContent=pro[i].label;
  var company=document.createElement("h3");
  company.textContent=pro[i].company;
  var link=document.createElement("a");
  link.href="resume.html?id="+pro[i].id;
  link.textContent="View Profile";
  subDiv.appendChild(name);
  subDiv.appendChild(mail);
  subDiv.appendChild(label);
  subDiv.appendChild(company);
  subDiv.appendChild(link);
}
}
