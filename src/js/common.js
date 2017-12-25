window.onload = function () {
	
}

document.addEventListener('DOMContentLoaded', function () {
	$('.modal').modal();
	$('.stepper').activateStepper();
	$('select').material_select();
	
	
	$('.collapsible').collapsible({
		accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		onOpen: function(el) {}, // Callback for Collapsible open
		onClose: function(el) {} // Callback for Collapsible close
	});
	  $('.dropdown-button').dropdown({
	      // inDuration: 300,
	      // outDuration: 225,
	      // closeOnClick: false,
	     alignment: 'right',
	      gutter: 10,
	      constrainWidth: false, // Does not change width of dropdown to that of the activator
	    }
	  );

	datepick();
	MaskTel();
	tooltips();
	initForm();
})
function MaskTel(){
  var tel = document.querySelectorAll('input[type=tel]');
  var maskForTel = new Inputmask({ 
	  showMaskOnHover: false,
	  showMaskOnFocus: false,
	  mask: "+375(99) 999-99-99",
  });
  maskForTel.mask(tel);
};
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
                onSuccess: function () {
                    return false;
                }
            });
        });
    }
}
function datepick(){
	var elems = $('.datepicker');
	elems.each(function(){
		var _ = $(this);
	  _.pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 3, // Creates a dropdown of 15 years to control year,
	    formatSubmit: 'dd.m.yyyy',
	    today: 'Сегодня',
	    clear: 'Очистить',
	    close: 'Сохранить',
		labelMonthNext: 'След. месяц',
		labelMonthPrev: 'Пред. месяц',
		labelMonthSelect: 'Выбрать месяц',
		labelYearSelect: 'Выбрать год',
		monthsFull: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
		monthsShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
		weekdaysFull: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
		weekdaysShort: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
		weekdaysLetter: [ 'Вc', 'Пн', 'Вт', 'Ср', 'Чч', 'Пт', 'Сб' ],
	    closeOnSelect: false // Close upon selecting a date,
	  });
	})
}
function tooltips(){
	var el = $('.tooltipped');
	el.each(function(){
		var _ = $(this);
		_.tooltip();
	})
	
}