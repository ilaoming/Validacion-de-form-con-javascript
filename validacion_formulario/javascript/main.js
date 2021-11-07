function validate(form){if(form.name.value.trim().length==0){alert(`Nombre obligatorio`);return!1}
var exp_regular=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(!exp_regular.test(form.email.value)){alert("Email inválido");return!1}
if(form.pass.value.trim().length==0){alert(`Password obligatorio`);return!1}
if(form.pass.value.trim().length<5){alert(`Password debe tener al menos 5 caracteres`);return!1}
if(form.pass.value!=form.pass_confir.value){alert(`Las contraseñas no coinciden`);return!1}
if(form.genero.value==""){alert(`Genero obligatorio`);return!1}
if(form.pais.value==""){alert("País obligatorio");return!1}
if(!form.terminos.checked){alert("Debe aceptar los términos y condiciones");return!1}
alert(`Validacion correcta`);return!0}
