'use strict';

window.onload = function () {
	initForm();
};

document.addEventListener('DOMContentLoaded', function () {
	$('.modal').modal();
	$('.stepper').activateStepper();
	MaskTel();
});
function MaskTel() {
	var tel = document.querySelectorAll('input[type=tel]');
	var maskForTel = new Inputmask({
		showMaskOnHover: false,
		showMaskOnFocus: false,
		mask: "+375(99) 999-99-99"
	});
	maskForTel.mask(tel);
}
function initForm() {
	var form_valid = $(".js-validate");
	if (form_valid.length) {
		form_valid.each(function () {
			var form_this = $(this);
			$.validate({
				form: form_this,
				borderColorOnError: true,
				scrollToTopOnError: false,
				modules: 'html5, security, sanitize',
				onSuccess: function onSuccess() {

					return false;
				}
			});
		});
	}
}