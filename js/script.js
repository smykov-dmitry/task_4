var cancel = document.querySelector('.cancel-button');
var save = document.querySelector('.save-button');
var addModal = document.querySelector('.add-button');
var modal = document.querySelector('.modal');
var data = document.getElementById('data');
var clear = document.querySelector('.clear-button');

function deleteRow(elem) {
    var div = elem.parentNode.parentNode;
    data.removeChild(div);
}

function makeDone(elem) {
    if(elem.checked) {
        elem.parentNode.parentNode.style.borderColor = '#ee0000';
        elem.parentNode.parentNode.style.textDecoration = 'line-through';
        elem.parentNode.parentNode.style.marginLeft = '2vh';
    }
    else {
        elem.parentNode.parentNode.style.borderColor = '#555555';
        elem.parentNode.parentNode.style.textDecoration = 'none';
        elem.parentNode.parentNode.style.marginLeft = '0';
    }
}

clear.onclick = function() {
    data.innerHTML = '';
}

addModal.onclick = function () {
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
}

cancel.onclick = function () {
    modal.style.display = 'none';
}

save.onclick = function () {
    var d = document.getElementById('date');
    var v_d = d.value;
    var t = document.getElementById('title');
    var v_t = t.value;
    var div = document.createElement('div');
    div.className = "task-row";
    div.innerHTML = "<div class=\"check-column\">\n" +
        "                    <input type=\"checkbox\" onclick='makeDone(this);'>\n" +
        "                </div>\n" +
        "                <div class=\"data-column\">\n" +
        "                    <p>" + v_d + "</p>\n" +
        "                </div>\n" +
        "                <div class=\"name-column\">\n" +
        "                    <p>" + v_t + "</p>\n" +
        "                </div>\n" +
        "                <div class=\"delete-column\">\n" +
        "                    <button onclick='deleteRow(this);'>Delete</button>\n" +
        "                </div>";
    data.appendChild(div);
    modal.style.display = 'none';
}
