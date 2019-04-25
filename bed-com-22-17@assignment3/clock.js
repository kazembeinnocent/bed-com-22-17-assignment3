	var eventTitle, desc, date, time;
var entries=[];
function addItem(t, d, dt, ti){
		entries.push({ ET: [t], DESC: [d], DT: [dt], TIME: [ti]});
}

function hasEntries(){
	if(entries.length===0){
		return 'false';
	}
	else{
		return 'true';
	}
}


function printList(){
	var titleOfListing='';
	var listingDate='';
	var listDesc='';
	var listTime='';
	var result='';
	for(var x=0; x<entries.length; x++){
		var et = entries[x].ET; 
		var ed = entries[x].DESC; 
		var ld = entries[x].DT;
		var lt = entries[x].TIME;
		for(var c=0; c<et.length; c++){
			titleOfListing=et[c];
		}
		for(var b=0; b<ed.length; b++){
			listDesc=ed[b];
		}
		for(var v=0; v<ld.length; v++){
			listingDate=ld[v];
		}
		for(var l=0; l<ed.length; l++){
			listTime=lt[l];
		}
		result+="<a href=#"+x+"><li class='listitem'><span class='title'>"+titleOfListing+"</span><div class='when'>"+listingDate+" "+listTime+"</div></li></a>";
	}
	return result;
}
var d, h, m, s, animate;
	function init(){
		d=new Date();
		/**Here we get current hour, minute and seconds, method is initiated when starting clock**/ 
		h=d.getHours();
		m=d.getMinutes();
		s=d.getSeconds();
		sclock();
	}
	function sclock(){
		s++;/**Since sclock is called every second it means second will increase by one**/
		if(s==60){
		/**If seconds is equal to 60 then minute must be added**/
			s=0;
			m++;
			if(m==60){
				/**If minute is equal to 60 then hour must be added**/
				m=0;
				h++;
				if(h==24){
					h=0;
				}
			}
		}
		printtime('sec', s);
		printtime('min', m);
		printtime('hr', h);
		animate=setTimeout(sclock, 1000);/**Call sclock every second/1000ms**/
	}
	function printtime(id, val){
		if(val<10){
			val='0'+val;
			}
			document.getElementById(id).innerHTML=val;
			}
	function setLocale(id){
		var offset= Intl.DateTimeFormat().resolvedOptions().timeZone;
		document.getElementById(id).innerHTML=offset;
	}
	function setDate(id){
		var today=new Date();
		var dd=String(today.getDate()).padStart(2, '0');
		var mm=String(today.getMonth()+1).padStart(2, '0');
		var yyyy=today.getFullYear();
		today=dd+'/'+mm+'/'+yyyy;
		document.getElementById(id).innerHTML=today;
	}
	function setItemTitle(id, el){
		var t='';
		var et = entries[id].ET; 
		for(var z=0; z<et.length; z++){
			t=et[z];
		}
		document.getElementById(el).innerHTML=t;
	}
	function setd(id, el){
		var d='';
		var l = entries[id].DT;
		for(var s=0; s<l.length; s++){
			d=l[s];
		}
		document.getElementById(el).innerHTML=d;
	}
	function sett(id, el){
		var t='';
		var l = entries[id].TIME;
		for(var s=0; s<l.length; s++){
			t=l[s];
		}
		document.getElementById(el).innerHTML=t;
	}
	function setdd(id, el){
		var d='';
		var l = entries[id].DESC;
		for(var s=0; s<l.length; s++){
			d=l[s];
		}
		document.getElementById(el).innerHTML=d;
	}


