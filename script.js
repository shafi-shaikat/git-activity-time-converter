window.setInterval(function(){
  loadTimeAgos();
}, 5000);

function loadTimeAgos(){
	jQuery('.timeFormated').remove();

	jQuery('.time_ago').each(function(){
		var time_to_formate = jQuery(this).attr("datetime");
		var dateObj = moment(time_to_formate, "YYY-MM-DDTHH:mm:ssZ").toDate();
		jQuery(this).after("<span class='timeFormated'><time>---" + moment(dateObj).format("MMM DD, h:mm a") + "</time></span>");
	});
}