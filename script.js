document.addEventListener('DOMContentLoaded', function() {
    console.log("added listener")
    document.getElementById('myButton').addEventListener('click', updateContent);
});

function updateContent() {
    document.getElementById('dynamic-content').innerHTML = 'This content was updated by JavaScript!';
}