(function($) {
    /* "use strict" */


 var eduMin = function(){
	
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
				barColors: ['#6673fd', '#2bc155', '#ff9f00'],
				hideHover: 'auto',
				gridLineColor: 'transparent',
				resize: true,
				barSizeRatio: 0.5,
			});	
		}
	}
	
	var morrisArea = function(){
		if(jQuery('#morris_area').length > 0)
		{
			
			//area chart
			Morris.Area({
				element: 'morris_area',
				data: [{
						period: '2001',
						smartphone: 0,
						windows: 0,
						mac: 0
					}, {
						period: '2002',
						smartphone: 90,
						windows: 60,
						mac: 25
					}, {
						period: '2003',
						smartphone: 40,
						windows: 80,
						mac: 35
					}, {
						period: '2004',
						smartphone: 30,
						windows: 47,
						mac: 17
					}, {
						period: '2005',
						smartphone: 150,
						windows: 40,
						mac: 120
					}, {
						period: '2006',
						smartphone: 25,
						windows: 80,
						mac: 40
					}, {
						period: '2007',
						smartphone: 10,
						windows: 10,
						mac: 10
					}


				],
				lineColors: ['#5aa1f2', '#2176d8', '#1565c0'],
				xkey: 'period',
				ykeys: ['smartphone', 'windows', 'mac'],
				labels: ['Phone', 'Windows', 'Mac'],
				pointSize: 0,
				lineWidth: 2,
				resize: true,
				fillOpacity: 1,
				behaveLikeLine: true,
				gridLineColor: 'transparent',
				hideHover: 'auto'

			});
		}
	}
	
	
	
	/* Function ============ */
	return {
		init:function(){
		
		},
			
		load:function(){
			morrisBarStalked();
			morrisDonught();
			morrisArea();
		},
		
		resize:function(){
			
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
			headerBg: "color_14",
			navheaderBg: "color_14",
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
		eduMin.load();
	});

	jQuery(window).on('resize',function(){
		new dlabSettings(dlabSettingsOptions); 
	}); 


})(jQuery);
