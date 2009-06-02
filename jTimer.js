/*
 * jTimer 0.2
 *
 * Copyright (c) 2009 Aditya Mukherjee (adityamukherjee.co)
 * Licensed under GPL (GPL-LICENSE.txt) licenses.
*/

(function(){
	/*
	* All functions do what you would expect them to
	* "deleted" holds any previous function you have cleared using
	*		one of the library's clear methods, passing it 'true' as the
	*		second argument.
	
	* "timeouts" and "intervals" holds the body of the function that
	*		needs to be executed corresponding to the index that was
	*		returned when setting the timer.
	
	* "clear()" clears timers based on the given index if it exists in
	*		memory, regardless of it being an interval or timeout.
	
	* TODO: Also allow clearing timer by function name
	* TODO: Make "clear()" work independently
	*/
	var Timer = function(){ }
	Timer.prototype = {
		intervals : [],
		timeouts : [],
		deleted: {
			intervals : [],
			timeouts : []
		},
		
		setInterval : function(fn, time){
			var i = window.setInterval(fn, time);
			this.intervals[i] = fn.toString();
			return i;					
		},
		
		setTimeout : function(fn, time){
			var i = window.setTimeout(fn, time);
			this.timeouts[i] = fn.toString();
			return i;
		},
		
		clear : function(i, store){//shortcut to clearing timers
			store = (store == undefined) ? false : store;
			//find what this timer actually was
			if(timeouts[i] == undefined){
				if(intervals[i] == undefined){
					throw('Timer not found');
				} else {
					clearInterval(i, store);
				}
			} else
				clearTimeout(i, store);		
		},
		
		clearInterval : function(i, store){
			store = (store == undefined) ? false : store;
			window.clearInterval(i);
			if(store == true)
				if(this.intervals[i] == true)
					this.deleted['intervals'][i] = this.intervals[i];
			delete this.intervals[i];
		},
		
		clearTimeout : function(i, store){
			store = (store == undefined) ? false : store;
			window.clearTimeout(i);
			if(store == true)
				if(this.timeouts[i] == true)
					this.deleted['timeouts'][i] = this.timeouts[i];
			delete this.timeouts[i];
		},				
	}
	
	window.Timer = Timer;
})();