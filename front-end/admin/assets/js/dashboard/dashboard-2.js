(function($) {
    /* "use strict" */


var juniorHigh = function(){
	
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
				barColors: ['#330006', '#900'], 
				stacked: true,
				gridTextSize: 10,
				hideHover: 'auto',
				resize: true
			});
		}
	}
	
	var peityLine = function(){
		$(".peity-line").peity("line", {
			fill: ["rgba(162, 186, 211, 1)"], 
			stroke: 'rgba(20, 59, 100, 1)', 
			width: "100%",
			height: "150"
		});
	}
	var peityLine2 = function(){
		$(".peity-line-2").peity("line", {
			fill: ["rgba(255, 225, 193, 1)"], 
			stroke: 'rgba(255, 143, 22, 1)', 
			width: "100%",
			height: "150"
		});	
	}
	var peityLine3 = function(){
		$(".peity-line-3").peity("line", {
			fill: ["rgba(251, 180, 157, 1)"], 
			stroke: 'rgba(242, 85, 33, 1)', 
			width: "100%",
			height: "150"
		});	
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
		headerBg: "color_2",
		navheaderBg: "color_13",
		sidebarBg: "color_2",
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
		juniorHigh.load();
	});

	jQuery(window).on('resize',function(){
		juniorHigh.resize();
		new dlabSettings(dlabSettingsOptions); 
	});     

})(jQuery);