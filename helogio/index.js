function hello() {
    const data = new Date();
    const hr = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();

    var hora_final = hr + ":" + min + ":" + sec;
    var hora = document.getElementById('n1')
    hora.innerHTML = hora_final;


    if (hr >= 18 && hr < 23) {
        console.log(hr);
        document.getElementById('n2').src = "noite.png"
        document.getElementById('texto').innerHTML = ("BOA NOITE")
        document.getElementById('n4').style.background = "rgb(37, 4, 37)"
    } else if (hr >= 23 && hr < 12) {
        document.getElementById('n2').src = "manhã.png"
        document.getElementById('texto').innerHTML = ("BOM DIA")
        document.getElementById('n4').style.background = "white"
    }else{
        document.getElementById('n2').src = "tarde.png"
        document.getElementById('texto').innerHTML = ("BOA TARDE")
        document.getElementById('n4').style.background =  "rgb(223, 173, 81)" ;
        console.log("tarde")
    }
}
    setInterval(hello,500);