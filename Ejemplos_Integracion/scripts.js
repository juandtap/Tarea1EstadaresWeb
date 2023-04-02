function changeColor() {

    let colorfondo = document.querySelector('body')

    if (colorfondo.style.backgroundColor === null) {

        colorfondo.style.backgroundColor = 'lightgray';

    } else if (colorfondo.style.backgroundColor == 'lightgray') {

        colorfondo.style.backgroundColor = 'rgb(46, 46, 47)';

    } else {

        colorfondo.style.backgroundColor = 'lightgray';
    }


}

function showAlert(name) {
    var myMessage = "Bienvenido "+name
    alert (myMessage);
}

