$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
		console.log('in form');
		console.log($('#date_form'));

		var dateForm = document.getElementById('date_form');
		var date = new Date(dateForm.value);
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var signs = ['Козерог', 'Водолей', 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Девы', 'Весы', 'Скорпион', 'Стрелец'];
		var signs_en = ['kozerog', 'vodoley', 'ribi', 'oven', 'telec', 'bliznetci', 'rak', 'lev', 'deva', 'vesi', 'scorpion', 'streletc'];
		var horo_day = document.getElementById('list').value;
		
		$.ajax({
			type: 'POST',
			url: 'getsign.php',
			data: {day:day,month:month},
			success: function(result) {
				var img_src = 'image/signs/' + signs_en[result] + '.png';
				$('#image').attr('src', img_src);
				$('#sign').html(signs[result]);
				console.log('sign get success');
			
			},
			error: function(result) {
				$('#result_form').html('Ошибка.');
				console.log('sign get fail');
			}
		});

		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			data: {day:day,month:month,horo_day:horo_day},
			success: function(result) {
				$('#result_form').html(result);
				console.log('horo get success');
			
			},
			error: function(result) {
				$('#result_form').html('Ошибка.');
				console.log('horo get fail');
			}
		});
	});
});