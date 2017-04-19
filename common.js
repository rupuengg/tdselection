(function($){
	var methods = {
		init : function(method, options){
			this.Test.options = $.extend({}, this.Test.defaults, options);
			console.log('Init', method, this.Test.options);
			methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		},
		show : function(){
			console.log('In Show method');
			var self = $(this);
			
			var tbl = $('<table></table>');
			tbl.appendTo(self);
			
			var thead = $('<thead></thead>');
			thead.appendTo(tbl);
			
			thead.append('<tr></tr>');
			
			$.each(this.Test.options.columns, function(key, value){
				thead.find('tr').append('<th>'+value+'</th>');
			});
			
			return this;
		},
		getData : function(){
			
		}
	};
	
	$.fn.Test = function(options, method){
		console.log('Start');
		console.log(options, method);
		if(methods[method]){
			console.log('methods[method]', methods, method);
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}else if(typeof method === 'object' || !method){
			console.log(typeof method+' === object');
			console.log(this, arguments);
			return methods.init.apply(this, arguments);
		}else{
			$.error('Method ' + method + ' does not Keywords');
		}
		console.log('End');
	};
	
	$.fn.Test.defaults = {
		default_class : 'rup_data_table'
	};
	
	$.fn.Test.options = {};
	
	// $.fn.extend({
		// RupDataTable : function(options){
			// var defaults = {
				// default_class : 'rup_data_table'
			// };
			
			// var options = $.extend(defaults, options);
			// console.log('Start RupDataTable', options);
			
			// var self = $(this);
			
			// var tbl = $('<table></table>');
			// tbl.appendTo(self);
			
			// var thead = $('<thead></thead>');
			// thead.appendTo(tbl);
			
			// thead.append('<tr></tr>');
			
			// $.each(options.columns, function(key, value){
				// thead.find('tr').append('<th>'+value+'</th>');
			// });
		// }
	// });
	
	// $.RupDataTable.bindHead = function(ctrl, options){
		
	// };
	
	// console.log($.RupDataTable);
})(jQuery);

$(document).ready(function(){
	// var d = [{"id":"1","firstname":"Amit","lastname":"Sharma","email":"amit.sharma@gmail.com","phone":"1234567890","status":"active"},{"id":"2","firstname":"Babloo","lastname":"Sharma","email":"babloo.sharma@gmail.com","phone":"1234567890","status":"active"},{"id":"3","firstname":"Dharmender","lastname":"Singh","email":"dharmender.singh@gmail.com","phone":"1234567890","status":"active"},{"id":"4","firstname":"Kamal","lastname":"Singh","email":"kamal.singh@gmail.com","phone":"1234567890","status":"active"},{"id":"5","firstname":"Ravi","lastname":"Kant","email":"ravi.kant@gmail.com","phone":"1234567890","status":"active"}];
	
	$('#dvHtmlBody').Test('show', {
		columns : {
			firstname : 'Firstname',
			lastname : 'Lastname',
			email : 'Email',
			phone : 'Phone'
		},
		data : [{"id":"1","firstname":"Amit","lastname":"Sharma","email":"amit.sharma@gmail.com","phone":"1234567890","status":"active"}]
	});
});