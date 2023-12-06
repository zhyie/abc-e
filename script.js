let editor = document.querySelector("#editor");
let output = document.querySelector("#output");

// pass options to ace.edit
ace.edit(editor, {
    theme: "ace/theme/twilight",
    mode: "ace/mode/java",
    selectionStyle: "text",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});


// run the code
function runCode() {
    
}
