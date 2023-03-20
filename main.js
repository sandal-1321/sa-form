 let fname=document.getElementById("firstname").value;
 let lname=document.getElementById("lastname").value;
 let email=document.getElementById("email").value;
 let pass=document.getElementById("fpass").value;
  let submi=document.getElementById("sub");
 var fsm=document.querySelector(".fsmall");
 var lsm=document.querySelector(".lsmall");
 var ema=document.querySelector(".esmall");
 var pss=document.querySelector(".psmall");
 var pop=document.querySelector(".open");
submi.addEventListener("click", myFunction);


function myFunction()
{
	

	
	if(!fname)
	{
		
		fsm.style="visibility:visible";
	}
	else
	{
		fsm.style="visibility:hidden";
	}
	if(!lname)
	{
		
		lsm.style="visibility:visible";
	}
	else
	{
		lsm.style="visibility:hidden";
	}
	if(!email)
	{
		ema.style="visibility:visible";
	}
	else
	{
		ema.style="visibility:hidden";
	}
	if(!pass)
	{
		
		pss.style="visibility:visible";
	}
	else
	{
		pss.style="visibility:hidden";
	}
}

function validation()
{
	 let tick=document.getElementById("succ");
	 tick.setAttribute("style","visibility: visible;");
}


 // let myform=document.getElementById("froms");
 //       myform.addEventListener("submit", ()=>{
 //     	let tick=document.getElementById("succ");
 //     	tick.style="visibility: visible";
 // })