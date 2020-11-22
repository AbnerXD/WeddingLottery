const TaiwanMap = new Vue({
	el: '#content-app',
	data: {
		seat:{
			'1':['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'],
			'2':['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'],
			'3':['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10'],
			'4':['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10'],
			'5':['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10'],
			'6':['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10'],
			'7':['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10'],
			'8':['I1','I2','I3','I4','I5','I6','I7','I8','I9','I10'],
			'9':['J1','J2','J3','J4','J5','J6','J7','J8','J9','J10'],
		},
		awarded: {},
		time: [1500,1000,1000,1000,800,800,600,500,400,300,200,100,100,100,100],
		isend: false,
	},
	methods: {
		lottery: function(){
			this.effect();
		},
		effect: function(){
			let self = this;
			if(this.time.length > 0){
				$.ajax({
					type : "GET",
					url : '',
					cache : false,
					timeout : 1000,
					error : function(e) {
						self.go();
						self.wait(self.time.pop());
						self.effect();
						console.log(self.time);
					}
				});	
			}
			else{
				this.isend = true;
			}
		},
		wait: function(time){
			let start = new Date().getTime();
			while(true){
				if((new Date().getTime() - start) > time){
					break;
				}
			}
		},
		go: function(){
			let seat = this.seat;
			let awarded = {};
			Object.keys(seat).forEach((k)=>{
				let s = seat[k].filter(x => x != '-');
				awarded[k] = Math.floor(Math.random() * s.length);
			});
			this.awarded = awarded;
		}
 	},
})