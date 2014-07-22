<?php
	$fecha = date("d-M-y H:i");
	$sujeto = "Mensaje desde el sitio web consultoriografico.com";
	$contenido = "Nombre: ".$_POST['nombre']."\r\n";
	$contenido .= "Correo: ".$_POST['email']."\r\n";
	$contenido .= "Empresa: ".$_POST['empresa']."\r\n";
	$contenido .= "Mensaje: ".$_POST['mensaje']."\r\n";
	$contenido .= "el mensaje se escribio el ".$fecha;
	if ($_POST['submit']) {
		if (mail("info@consultoriografico.com", $sujeto, utf8_decode($contenido), $header)) {
			echo 
			"<script language='javascript'>
				alert('Gracias por tu mensaje, pronto nos pondremos en contacto contigo.');
				window.location.href = 'http://prueba.consultoriografico.com/index.html';
			</script>";
		} else {
			echo
			"<script language='javascript'>
				alert('Falló el envío, inténtalo nuevamente.');
				window.location.href = 'http://prueba.consultoriografico.com/index.html';
			</script>";
		}
	}
?>