'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var classname = document.body.className;
    if(classname == "light-theme") {
        this.textcontent= "Dark";
    }
    else{
        this.textcontent = "light";
    }
    console.log ('current class name:' + classname);
});
