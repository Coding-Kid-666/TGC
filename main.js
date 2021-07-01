function letgo(){
    optionsw = document.getElementById("lol");
    selected = optionsw.options[optionsw.selectedIndex].text;
    uname = document.getElementById("name").value;
    msg = document.getElementById("features").value;
    wname = document.getElementById("sitename").value;

    document.getElementById("mailme").href = "mailto:spirals150@gmail.com?subject=Website/App request&body= Hello! I am " + uname + ". I wanted you to make me a "+ selected +" named " + wname + ". The "+ selected +" should have features like:" + msg + ". Thank you!";
}