			window.onload=function(){
			/**Function will be started when page fully loads will display to do list**/
			//prevent functions from running before others load to prevent errors
		startScreenListing();
		tdl=document.getElementById('to_do_list').addEventListener('click', function(){
				startScreenListing();
			});
			clock=document.getElementById('clock').addEventListener('click', function(){
				startScreenClock();
			});
			 add=document.getElementsByClassName('add-icon')[0].addEventListener('click', function(){
				startScreenAddItem();
			});
			
			 editcancel=document.getElementById('edit-feature-cancel').addEventListener('click', function(){
				alert('All unsaved items will be lost');
				startScreenListing();
			});
			save=document.getElementById('edit-feature-save').addEventListener('click', function(){
				saveItem();
			});
			cancel=document.getElementById('cancel-b').addEventListener('click', function(){
				startScreenListing();
			});
			function startScreenListing(){
				document.getElementById('to_do_list').style.color='#000';
				document.getElementById('clock').style.color='#aaa';
				document.getElementsByClassName('add-icon')[0].style.display='block';
				document.getElementsByClassName('l')[0].style.display='block';
				document.getElementsByClassName('item-description')[0].style.display='none';
				document.getElementsByClassName('clock')[0].style.display='none';
				document.getElementsByClassName('add-item')[0].style.display='none';
				if(hasEntries()=='false'){
					document.getElementsByClassName('to_do_listing')[0].style.display='none';
					document.getElementsByClassName('list-empty')[0].style.display='block';
				}
				else if(hasEntries()=='true'){
					document.getElementsByClassName('to_do_listing')[0].style.display='block';
					document.getElementsByClassName('list-empty')[0].style.display='none';
					document.getElementsByClassName('listing')[0].innerHTML=printList();
					var l=document.getElementsByClassName('listitem');
					for(var c=0; c<l.length; c++){
						/**set event listeners for items**/
						l[c].addEventListener('click', function(){
							startScreenDescribe(c-1);
						});
					}
				}
				
			}
			
			function startScreenClock(){
				document.getElementById('clock').style.color='#000';
				document.getElementById('to_do_list').style.color='#aaa';
				document.getElementsByClassName('add-icon')[0].style.display='none';
				document.getElementsByClassName('item-description')[0].style.display='none';
				document.getElementsByClassName('l')[0].style.display='none';
				document.getElementsByClassName('clock')[0].style.display='block';
				init();/**start clock**/
				setLocale('locale');
				setDate('t');
				document.getElementsByClassName('add-item')[0].style.display='none';
			}
			function startScreenAddItem(){
				document.getElementsByClassName('l')[0].style.display='none';
				document.getElementsByClassName('add-item')[0].style.display='block';
				document.getElementsByClassName('add-icon')[0].style.display='none';
			}
			function saveItem(){
				var tt=document.getElementById('title').value;
				var dd=document.getElementById('desc').value;
				var dt=document.getElementById('date').value;
				var ti=document.getElementById('time').value;
				if(tt.length>0&&dd.length>0&&dt.length>0&&ti.length>0){
					addItem(tt, dd, dt, ti);
					startScreenListing();
				}
				else{
					alert("Oops!! Some fields are not filled");
					}
			}
			function startScreenDescribe(id){
				document.getElementsByClassName('l')[0].style.display='none';
				document.getElementsByClassName('add-icon')[0].style.display='none';
				document.getElementsByClassName('item-description')[0].style.display='block';
				setd(id, 'spec-date');
				sett(id, 'spec-time');
				setdd(id, 'desc1');
			}
			};
