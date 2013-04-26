jQuery(document).ready(function($){
	var ajaxurl = 'http://plugins.graq.co.uk/wp-admin/admin-ajax.php';
	$('a.glossary-hover').each(function(){
		$(this).qtip({
			style: {
				name: 'cream',
				tip:  'topLeft'
			},
			position: { 
				adjust: { screen: true }
			}
		}); // qtip
	}); // glossary-hover.each
});

(function($){
  var lastPos;

	$(document).ready(function(){

  // Handle clicking
  $('.atoz-clickable').click(function(){
    lastPos = $(window).scrollTop();
    $('.atoz-clickable').removeClass('atozmenu-on').addClass('atozmenu-off');
    $(this).removeClass('atozmenu-off').addClass('atozmenu-on');
    var alpha = $(this).attr('alpha');
    location.hash = alpha;

    $('.glossary-list').removeClass('atozitems-on').addClass('atozitems-off');
    $('.glossary-list-' + alpha).removeClass('atozitems-off').addClass('atozitems-on');
  });

  // Manual hash change - trigger click
  $(window).bind('hashchange',function(event){
    var alpha = location.hash.replace('#','');
    $(window).scrollTop(lastPos);
    location.hash = alpha;
    $('.atoz-clickable').filter(function(i){return $(this).attr('alpha') == alpha;}).click();
		$('.wpg-please-select').hide();
  });

  // Page load hash management:
  //  - Look for first available if none specified
  //  - Trigger click if exists
  var myLocation = document.location.toString();
  var myAlpha    = '';
  if( myLocation.match('#') )
    myAlpha = myLocation.split('#')[1];
  if( ! myAlpha.length ){
    //myAlpha = $('.atoz-clickable:eq(0)').attr('alpha');
		$('.atoz-clickable').removeClass('atozmenu-on').addClass('atozmenu-off');
		$('.glossary-list').removeClass('atozitems-on').addClass('atozitems-off');
		$('.wpg-please-select').show();
	}
  if( myAlpha.length ){
		$('.wpg-please-select').hide();
    $('.atoz-clickable').filter(function(i){return $(this).attr('alpha') == myAlpha;}).click();
	}

	});
})(jQuery);