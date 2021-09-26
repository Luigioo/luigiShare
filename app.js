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
        nameElem.innerHTML = data.name;
    })

});

function updateName(e){
    const db = firebase.firestore();
    const myPost = db.collection('jojo').doc('muda');
    myPost.update({name: e.target.value});
}