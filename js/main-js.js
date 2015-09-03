var mainColor = '#1E61E8';
function onLoad(){	
	
	loadCss($.cookie('color')||'#1E61E8');
}

function loadCss(color){
		switch(color){
			case '#1E61E8':
				mainColor = '#1E61E8';
				document.getElementById('css').href='style-blue.css';				
				break;
			case '#E74C3C':
				mainColor = '#E74C3C';
				document.getElementById('css').href='style-red.css';			
				break;
			case '#9710AF':
				mainColor = '#9710AF';
				document.getElementById('css').href='style-viol.css';	
				break;
			
		
		}
		onScroll();
		$.cookie('color',mainColor,{expires: 7, path: '/'});
	}

	function onScroll(){
	var d = document.body;
				var header = document.getElementById("header");
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				//header.innerHTML = "<center>"+d.clientHeight + " "+d.scrollTop +"</center>";
				var arr = new Array(
					{"id":"a1","minpos":"0","maxpos":"480","type":1},
					{"id":"a2","minpos":"481","maxpos":"1000","type":1},
					{"id":"a3","minpos":"1001","maxpos":"1500","type":1},
					{"id":"a4","minpos":"1501","maxpos":"1800","type":1},
					{"id":"a5","minpos":"1801","maxpos":"2800","type":1}
					);	
									
				for(var i=0; i<arr.length; i++) {
				 var a  = document.getElementById(arr[i].id);
				 
				  if (scrollTop>=arr[i].minpos && scrollTop <=arr[i].maxpos) {
						a.style.cssText = "background-color:"+mainColor+";"
						a.onmouseover = function(){
									this.style.cssText = 'text-decoration:underline;';
								}
						a.onmouseout = function(){
									this.style.cssText = 'background-color:'+mainColor+';';
								}
					}
					else {
						a.style.cssText = "background-color:transparent;;"
						a.onmouseover = function(){
									this.style.cssText = 'text-decoration:none;';
								}
						a.onmouseout = function(){
									this.style.cssText = 'background-color:transparent;';
								}
						}
				}
				
	}
	
$(document).ready(function() {
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавл¤ем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});

function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;
});

$(function() {
$( "#tabs" ).tabs();
});
  
 $( "#tabs ul li a" ).bind( "click", function() {
  $("#tabs ul li a" ).css("background-color","transparent").css("color","white");
  this.style.cssText = "background-color:white;border-radius:3px;color:"+mainColor+";";  
 });
 
  $( ".item" ).bind( "click", function() {
	 var a = document.getElementById("formazakaza");
	a.style.cssText = "display:block;";
 });
 
 $('.close1').bind('click', function(){
 var a = document.getElementById("formazakaza");
	a.style.cssText = "display:none;";
});

$( window ).scroll(function() {				
				onScroll();				
});

 $(document).ready(function() {			 		 
			$('a[href^="#"]').click(function(){
					var el = $(this).attr('href');
					if (el.indexOf('tab')==-1){
					$('body').animate({
						scrollTop: $(el).offset().top-50}, 1000);
						}
					return false; 
			});	
			
			jQuery(".menu ul li a").click(function () { 
				elementClick = this.hash;		
				destination = jQuery(elementClick).offset().top-50;
	
					jQuery('html').animate( { scrollTop: destination }, 1000 );
				
				return false;
			});
});

$(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );       
        }
      }
    });
  });