const why_feel_form = document.querySelector('#add-why');

//Saving Data
why_feel_form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('myDiary').add({
        why_feel : why_feel_form.whyFeelThis.value
    });
    why_feel_form.whyFeelThis.value = '';
})