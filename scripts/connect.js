//Getting the Data
const diaryList = document.querySelector('#diarylist');
// create element and render 
function renderDiary(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().why_feel;

    li.appendChild(name);
    diaryList.appendChild(li);
}
db.collection('myDiary').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderDiary(doc);
    })
})

const form = document.querySelector('#form');
//Saving Data
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('myDiary').add({
        why_feel : form.whyFeelThis.value,
        feel_often: form.feelThisOften.value,
        what_changed: form.whatChanged.value,
        change_pos_neg: form.changePosNeg.value,
        want_change: form.wantToChange.value
    });
    //form.whyFeelThis.value = '';
    //form.feelThisOften.value = '';
    //form.whatChanged.value = '';
    //form.changePosNeg.value = '';
    //form.wantToChange.value = '';
});
