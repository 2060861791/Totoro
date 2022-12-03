window.onload = function () {
    var tfrow = document.getElementById('tfhover').rows.length;
    var tbRow = [];
    for (var i = 0; i < tfrow; i++) {
        tbRow[i] = document.getElementById('tfhover').rows[i];
        tbRow[i].onmouseover = function () {
            this.style.backgroundColor = 'rgb(255 218 218 / 43%)';
        };
        tbRow[i].onmouseout = function () {
            this.style.backgroundColor = '#ffffff';
        };
    }
};