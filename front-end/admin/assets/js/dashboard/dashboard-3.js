(function($) {
    /* "use strict" */


 var seniorHigh = function(){
	
	var screenWidth = $(window).width();
	
	var morrisBar = function(){
		if(jQuery('#morris_bar_2').length > 0 ){
			
			//bar chart stalked

			Morris.Bar.prototype.fillForSeries = function(i) {
				var color;
				return "0-#fff-#fff:20-#fff";
			};

			Morris.Bar({
				element: 'morris_bar_2',
				data: [
				  { y: '2019-2020', Males: 762,  Females: 400 },
				  { y: '2020-2021', Males: 890,  Females: 534 },
				  { y: '2021-2022', Males: 674,  Females: 307 },
				  { y: '2022-2023', Males: 891,  Females: 603 },
				  { y: '2023-2024', Males: 545,  Females: 452},
				],
				xkey: 'y',
				ykeys: ['Males', 'Females'],
				labels: ['Males', 'Females'],
				barColors: ['#ffdf00', '#ffc30b'], 
				stacked: true,
				gridTextSize: 10,
				hideHover: 'auto',
				resize: true
			});
		}
	}
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				morrisBar();
				peityLine();
				peityLine2();
				peityLine3();
				
			},
			
			resize:function(){
				screenWidth = $(window).width();
				morrisBar();
				peityLine();
				peityLine2();
				peityLine3();
			}
		}
	
	}();

	var direction =  getUrlParams('dir');
	if(direction != 'rtl')
	{direction = 'ltr'; }

	var dlabSettingsOptions = {
		typography: "roboto",
		version: "light",
		layout: "Vertical",
		headerBg: "color_13",
		navheaderBg: "color_2",
		sidebarBg: "color_13",
		sidebarStyle: "full",
		sidebarPosition: "static",
		headerPosition: "static",
		containerLayout: "full",
		direction: direction
	}; 
	
	jQuery(document).ready(function(){
		new dlabSettings(dlabSettingsOptions); 
		
	});
		
	jQuery(window).on('load',function(){
		seniorHigh.load();
	});

	jQuery(window).on('resize',function(){
		new dlabSettings(dlabSettingsOptions); 
	});     
	

})(jQuery);