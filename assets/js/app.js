const stickyNav = `<div class="stickynav">sticky</div>`

    
    $(document).on("scroll", function(){

		if
      ($(document).scrollTop() > 200){
        $('#navigation').addClass('stickyNav').removeClass('navbar navbar-expand-lg navbar-light bg-white d-flex flex-wrap')
		}
		else
		{

            $('#navigation').removeClass('stickyNav').addClass('navbar navbar-expand-lg navbar-light bg-white d-flex flex-wrap')
        } 
    })

