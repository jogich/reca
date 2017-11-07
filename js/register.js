/* COMPROBACIÓN FORMULARIO REGISTRO */
function comprueba() {
	/* comprobación contraseñas */
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	
	/* get año pasado en el formulario de registro */
	var birthday = document.getElementById("birthday").value;
	var dateBirthday = new Date(birthday);
	var yearBirthday = dateBirthday.getFullYear();
	
	/* get año actual */
	var date = new Date();
    var yearDate = date.getFullYear();

    /* calcula la diferencia de edad */
    var maxAge = parseInt(yearDate) - parseInt(yearBirthday); 
	
	if (pass1 === pass2) {
		if (pass1.length >= 8) {
			if (maxAge <= 18) {
				alert("Tienes que tener 18 años o más para poder registrate.")
			}else{
				alert("Enhorabuena.Registrado correctamente!");
			}
		}else{
			alert("La contraseña debe de tener 8 o más caracteres.");
		}
	}else{
		alert("Las contraseñas no coinciden. Por favor vuelva a introducirlas.");
	}
}
