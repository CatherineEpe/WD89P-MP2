(function($) {
    /* "use strict" */


 var adminDash = function(){
	
	var screenWidth = $(window).width();
	
	var morrisBarStalked = function(){
		if(jQuery('#morris_bar').length > 0)
		{	
			//bar chart
			Morris.Bar({
				element: 'morris_bar',
				data: [{
					y: '2019-2020',
					total: 2451,
					jhs: 1526,
					shs: 925
				}, {
					y: '2020-2021',
					total: 2562,
					jhs: 1526,
					shs: 925
				}, {
					y: '2021-2022',
					total: 2673,
					jhs: 1526,
					shs: 925
				}, {
					y: '2022-2023',
					total: 2784,
					jhs: 1526,
					shs: 925
				}, {
					y: '2023-2024',
					total: 2895,
					jhs: 1526,
					shs: 925
				}],
				xkey: 'y',
				ykeys: ['total', 'jhs', 'shs'],
				labels: ['total', 'jhs', 'shs'],
				barColors: ['#330006', '#ffd700', '#900'],
				hideHover: 'auto',
				gridLineColor: 'transparent',
				resize: true,
				barSizeRatio: 0.7,
			});	
		}
	}
	
	var barStalkChart = function(){
		if(jQuery('#barStalkChart').length > 0)
		{
			
			//area chart
			Morris.Bar({
				element: 'barStalkChart',
				data: [{
					y: 'S',
					a: 66, 
					b: 34
				}, {
					y: 'M',
					a: 75, 
					b: 25
				}, {
					y: 'T',
					a: 50, 
					b: 50
				}, {
					y: 'W',
					a: 75, 
					b: 25
				}, {
					y: 'T',
					a: 50, 
					b: 50
				}, {
					y: 'F',
					a: 16, 
					b: 84
				}, {
					y: 'S',
					a: 70, 
					b: 30
				}, {
					y: 'S',
					a: 30, 
					b: 70
				}, {
					y: 'M',
					a: 40, 
					b: 60
				}, {
					y: 'T',
					a: 29, 
					b: 71
				}, {
					y: 'W',
					a: 44, 
					b: 56
				}, {
					y: 'T',
					a: 30, 
					b: 70
				}, {
					y: 'F',
					a: 60, 
					b: 40
				}, {
					y: 'G',
					a: 40, 
					b: 60
				}, {
					y: 'S',
					a: 46, 
					b: 54
				}],
				xkey: 'y',
				ykeys: ['a', 'b'],
				labels: ['A', 'B'],
				barColors: ['#ffc30b', "#b7000"],
				hideHover: 'auto',
				gridLineColor: 'transparent',
				resize: true,
				barSizeRatio: 0.25,
				stacked: true, 
				behaveLikeLine: true,
				//redraw: true
				
				// barRadius: [6, 6, 0, 0]
			});
		}
	}
	
	
	
	/* Function ============ */
	return {
		init:function(){
		
		},
			
		load:function(){
			morrisBarStalked();
			barStalkChart();
		},
		
		resize:function(){
			morrisBarStalked();
			barStalkChart();
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
			navheaderBg: "color_2",
			sidebarBg: "color_13",
			sidebarStyle: "modern",
			sidebarPosition: "static",
			headerPosition: "static",
			containerLayout: "full",
			direction: direction
	};

	jQuery(document).ready(function(){		
		new dlabSettings(dlabSettingsOptions); 
	});
	
	
	
	

	
	jQuery(window).on('load',function(){
		adminDash.load();
	});

	jQuery(window).on('resize',function(){
		new dlabSettings(dlabSettingsOptions); 
	}); 


})(jQuery);
