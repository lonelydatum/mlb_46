import {HOR, size, olg} from '../../_common/js/common.js'



const READ = {
	t1: 2.2,
	t2: 2.7
}


function start(){

	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	

	tl.set(".frame1", {opacity:1})

	



	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	
	
	const HEIGHT = size.h*.7

	tl.from(".o",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, opacity:0}, "+=1")
	

	tl.add("t1-in", "+=.2")
	tl.from(".t1a", {duration:.3, opacity:0, y:`-=${HEIGHT}`}, "t1-in")	
	tl.from(".t1b", {duration:.3, opacity:0, y:`+=${HEIGHT}`}, "t1-in")	

	tl.add("t1-out", `+=${READ.t1}`)
	tl.to(".t1a", {duration:.3, opacity:0, y:`-=${HEIGHT}`}, "t1-out")
	tl.to(".t1b", {duration:.3, opacity:0, y:`+=${HEIGHT}`}, "t1-out")




	tl.from(".bring", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".bring", {duration:.25, opacity:0}, "+=1.3")


	tl.from(".t2", {duration:.25, opacity:0}, "+=.2")
	tl.to(".t2", {duration:.25, opacity:0}, `+=3`)

	tl.from(".proline-end", {duration:.25, opacity:0}, "+=.1")
	// tl.to(".proline-end", {duration:.25, opacity:0}, "+=.3")

	tl.from(".cta", {duration:.25, opacity:0}, "+=.3")
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")



}

start()

module.exports = {};

