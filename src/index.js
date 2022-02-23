import validator from './validator.js';

console.log(validator);

const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');

formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	formulario.inputNumero.value = valorInput
	.replace(/\s/g, '')
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();
  numeroTarjeta.textContent = valorInput;
});
