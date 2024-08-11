$(document).ready(function(){

	
$(".phone-number").mask("+7 (999) 999-9999");	
	
	
	$("#question").validate({
		onkeyup: true,
		rules: {
		     fio:{
		         required: true,
		         minlength: 3
		     },		     
		     email: {
		       required: true,
		       email: true
		     },
		     tel: {
		       required: true
		     },
		     question: {
		       required: true,
		       minlength: 10
		     }
		},
		messages:{
	        fio:{
	            minlength: "Имя очень короткое",
	        },
	        question:{
	            minlength: "Опишите ваше сообщение более подробно",
	        }
	   	},
		errorPlacement: function(error, element) {
			 	error.appendTo(element.parent());
			 	
		   },
		submitHandler: function () {
			$("#question").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'question.php',
			        data: dataSet,
			        success: function(){
			            $('#question .done').css('display','inline-block');
			            $('#question .button').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});
	
	
	$("#subscription").validate({
		onkeyup: true,
		rules: {
		     email: {
		       required: true,
		       email: true
		     }
		},
		errorPlacement: function(error, element) {
			 	error.hide();
			 	
		   },
		submitHandler: function () {
			$("#subscription").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'subscription.php',
			        data: dataSet,
			        success: function(){
			            $('#subscription .done').css('display','inline-block');
			            $('#subscription .button').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});
	
	
	
	$("#orderD").validate({
		onkeyup: true,
		rules: {
		     fio:{
		         required: true,
		         minlength: 3
		     },		     
		     email: {
		       required: true,
		       email: true
		     },
		     tel: {
		       required: true
		     }
		},
		messages:{
	        fio:{
	            minlength: "Имя очень короткое",
	        }
	   	},
		errorPlacement: function(error, element) {
			 	error.appendTo(element.parent());
			 	
		   },
		submitHandler: function () {
			$("#orderD").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'post/order_d.php',
			        data: dataSet,
			        success: function(){
			            $('#orderD .done').css('display','inline-block');
			            $('#orderD .form_block').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});	
	
	$("#orderE").validate({
		onkeyup: true,
		rules: {
		     fio:{
		         required: true,
		         minlength: 3
		     },		     
		     email: {
		       required: true,
		       email: true
		     },
		     tel: {
		       required: true
		     }
		},
		messages:{
	        fio:{
	            minlength: "Имя очень короткое",
	        }
	   	},
		errorPlacement: function(error, element) {
			 	error.appendTo(element.parent());
			 	
		   },
		submitHandler: function () {
			$("#orderE").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'post/order_e.php',
			        data: dataSet,
			        success: function(){
			            $('#orderE .done').css('display','inline-block');
			            $('#orderE .form_block').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});	
	
	$("#orderDynamic").validate({
		onkeyup: true,
		rules: {
		     fio:{
		         required: true,
		         minlength: 3
		     },		     
		     email: {
		       required: true,
		       email: true
		     },
		     tel: {
		       required: true
		     }
		},
		messages:{
	        fio:{
	            minlength: "Имя очень короткое",
	        }
	   	},
		errorPlacement: function(error, element) {
			 	error.appendTo(element.parent());
			 	
		   },
		submitHandler: function () {
			$("#orderDynamic").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'post/order_dynamic.php',
			        data: dataSet,
			        success: function(){
			            $('#orderDynamic .done').css('display','inline-block');
			            $('#orderDynamic .form_block').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});	
	
	$("#orderSkierg").validate({
		onkeyup: true,
		rules: {
		     fio:{
		         required: true,
		         minlength: 3
		     },		     
		     email: {
		       required: true,
		       email: true
		     },
		     tel: {
		       required: true
		     }
		},
		messages:{
	        fio:{
	            minlength: "Имя очень короткое",
	        }
	   	},
		errorPlacement: function(error, element) {
			 	error.appendTo(element.parent());
			 	
		   },
		submitHandler: function () {
			$("#orderSkierg").submit(function(){
			    var dataSet = $(this).serialize();
			    $.ajax({
			        type: "POST",
			        url: 'post/order_skierg.php',
			        data: dataSet,
			        success: function(){
			            $('#orderSkierg .done').css('display','inline-block');
			            $('#orderSkierg .form_block').hide();
			        },
			        error: function(){
			            alert("Отправка запроса не удалась! Попробуйте перезагрузить страницу");
			        }
			    });
			    return false;
			});
		},
		errorClass: "error"
	});	
	
	
	
	
//	var position = element.offset();
//	var width = parseInt(element.outerWidth())/2 - parseInt(error.outerWidth())/2;
//	var top = parseInt(error.outerHeight())+10;
//	error.css(position).css('left','+=' + width).css('top','-=' + top);
//	setTimeout(function () {
//		error.removeClass('hidden');
//	}, 50);
	
	
	
	
	
	
});

