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
})

//Getting the Data