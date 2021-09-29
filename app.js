let storedName;
document.addEventListener("DOMContentLoaded", event=>{

    const app = firebase.app();
    const db = firebase.firestore();
    const myPost = db.collection('jojo').doc('muda');

    // myPost.get()
    //     .then(doc=>{
    //         const data = doc.data();
    //         document.write(data.jonathan+'<br>');
    //         document.write(data.joseph+'<br>');
    //     });
    myPost.onSnapshot(doc=>{
        const data = doc.data();
        let nameElem = document.getElementById('name');
        storedName = data.name;
        let displayName = storedName;
        // if(displayName.length>8){
        //     displayName = displayName.substring(0,8)+'...';
        // }
        nameElem.innerHTML = displayName;
    })

});

function updateName(e){
    const db = firebase.firestore();
    const myPost = db.collection('jojo').doc('muda');
    myPost.update({name: e.target.value});
}

function goToLink(){
    const url = document.getElementById("name").innerHTML;
    if(!isValidHttpUrl(url)) return;
    window.open(url, '_blank');
}

function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }