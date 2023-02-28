/* Boton Modo Noche
 * Tambien podria haber puesto 
 document.querySelectorAll(".hs1").forEach(a=>a.style.color = '#EFEFEF');
 */
document.getElementById('btn1').addEventListener('click', function () {
    document.body.style.backgroundColor = '#404341';
    document.body.style.color = '#A3EBFF';

    let elementosh3 = document.getElementsByClassName('hS1');
    for (let i = 0; i < elementosh3.length; i++) {
        elementosh3[i].style.color = '#7DFFB4'
    }

    let elementoPulS1 = document.getElementsByClassName('pulS1');
    for (let u = 0; u < elementoPulS1.length; u++) {
        elementoPulS1[u].style.color = '#EFEFEF'
    }

    //cambiar de color ul con id 'ulS1'
    document.getElementById('ulS1').style.color = '#F9F60A';

    //cambiar de color borde de imagen con id 'imagenS1' background-color: #1BF02B;
    document.getElementById('imagenS1').style.borderColor = '#393F68';

    //cambiar de color de parrafo con id 'pS1'
    document.getElementById('pS1').style.color = '#FFBDFA';

    //cambiar de color de fondo de boton con id 'cita1'
    document.getElementById('cita1').style.backgroundColor = '#7CFFEF';
});

/*Boton Modo Dia*/
document.getElementById('btn2').addEventListener('click', function () {
    document.body.style.backgroundColor = '#EAFABA';
    document.body.style.color = '#000000';

    let elementosh3 = document.getElementsByClassName('hS1');
    for (let i = 0; i < elementosh3.length; i++) {
        elementosh3[i].style.color = '#006400'
    }

    let elementoPulS1 = document.getElementsByClassName('pulS1');
    for (let u = 0; u < elementoPulS1.length; u++) {
        elementoPulS1[u].style.color = '#A52A2A'
    }

    //cambiar de color ul con id 'ulS1'2EFF00
    document.getElementById('ulS1').style.color = '#2EFF00';

    //cambiar de color borde de imagen con id 'imagenS1'2EFF00
    document.getElementById('imagenS1').style.borderColor = '#68E8DC';

    //cambiar de color de parrafo con id 'pS1'
    document.getElementById('pS1').style.color = '#FF0000';

    //cambiar de color de fondo de boton con id 'cita1'
    document.getElementById('cita1').style.backgroundColor = '#1BF02B';

});


/*Boton de Cita*/
document.getElementById('cita1').addEventListener('click', function () {
    alert("Nuestras virtudes y nuestros fallos son inseparables,\n" +
        "como la fuerza y la materia." +
        " Cuando se separan, el hombre no existe.\n" +
        "Atte: Nikola Tesla");

});

