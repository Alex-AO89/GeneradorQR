const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const Ncuenta= formulario.Ncuenta.value;
    const Nombre = formulario.Nombre.value;
    const combinedLink = Ncuenta + ', ' + Nombre; // Combina los dos enlaces
    QR.makeCode(combinedLink);
});;
