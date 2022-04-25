
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power4.out"
});

const READ = {
	t1: 1.2,
	t2: 1.6
}

const SECOND = {
	t1: 1.5,
	t2: 2
}



const {w, h} = size

TweenLite.set([".o",  ".proline" ], {
	transformOrigin:`${size.w}px ${size.h}px`,
	x: -size.w/2,
	y: -size.h/2,
	scale: .5
})


	

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")

function olg(){
	TweenLite.set("#olg", {autoAlpha:1})	
    const tl = new TimelineMax()
        
    tl.to("#bluewedge1", {duration:.5, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)
    tl.to("#redwedge1", {duration:.8, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)

    .from('#group-o', {duration: 1, y: 200, ease: "custom"}, 0)
    .from('#group-l', {duration: 1, y: 200, ease: "custom"}, .1)
    .from('#group-g', {duration: 1, y: 200, ease: "custom"}, .2)

    .from('#group-o', {duration: .8, scale: .4, ease: "power1.out"}, .3)
    .from('#group-l', {duration: .8, scale: .4, ease: "power1.out"}, .4)
    .from('#group-g', {duration: .8, scale: .4, ease: "power1.out"}, .5)

    .from('#letter-o', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt'}, .9)
    .from('#letter-l', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt'}, 1)
    .from('#letter-g', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt'}, 1.1)
    
    // tl.timeScale(2)

    return tl
}

function bb_a(){
	const tl = init()
	tl.from(".o", {duration:.3, scale:1, ease:'back.out', autoAlpha:0}, "+=.2")
	tl.add("proline", "+=.4")
	tl.from(".o-shadow", {duration:.1, autoAlpha:0}, "proline")
	tl.from(".proline", {scale:1, duration:.25, autoAlpha:0, ease:'back.out'}, "proline")

	tl.to(".proline", {duration:.2, autoAlpha:0}, "+=1")
	console.log(document.querySelector(".t1"));
	tl.add("t1-in")
	tl.from(".t1a", {x:`-${size.w}`, duration:.2}, "t1-in")
	if(document.querySelector(".t1b")){
		tl.from(".t1b", {x:size.w, duration:.2}, "t1-in")	
	}
	

	tl.add("t1-out", `+=${SECOND.t1}`)
	tl.to(".t1a", {x:`-${size.w}`, duration:.3}, "t1-out")
	if(document.querySelector(".t1b")){
		tl.to(".t1b", {x:size.w, duration:.3}, "t1-out")
	}
	


	return tl
}


function bbSecond(){
	const tl = bb_a()

	


	tl.add("t2-in")
	tl.from(".t1c", {x:`-${size.w}`, duration:.2}, "t2-in")
	if(document.querySelector(".t1d")){
		tl.from(".t1d", {x:size.w, duration:.2}, "t2-in")	
	}
	

	tl.add("t2-out", `+=${SECOND.t2}`)
	tl.to(".t1c", {x:`-${size.w}`, duration:.3}, "t2-out")
	if(document.querySelector(".t1d")){
		tl.to(".t1d", {x:size.w, duration:.3}, "t2-out")
	}
	



	tl.to([".o-shadow", ".proline", ".o"], {duration:.1, autoAlpha:0}, "f1-out")

	tl.from(".bring",  {duration:.25, x:"-=100", autoAlpha:0})
	tl.add(chev())
	return tl
}


function bb(){
	const tl = bb_a()

	
	
	tl.to([".o-shadow", ".proline", ".o"], {duration:.1, autoAlpha:0}, "f1-out")

	tl.from(".bring",  {duration:.25, x:"-=100", autoAlpha:0})
	tl.add(chev())
	return tl
}


function bb2(){
	const tl = init()
	tl.from(".t2",  {duration:.3, autoAlpha:0}, "+=.5")
	tl.to(".t2",  {duration:.3, autoAlpha:0}, `+=3`)


	tl.add("cta", "+=.2")

	tl.from(".cta",  {duration:.3, autoAlpha:0}, "cta")

	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, autoAlpha:0}, "end")
	return tl
}

function chev(){
	const tl = new TimelineMax()

	tl.add("chev", "+=.1")
	if(document.querySelector(".zero")){
		tl.to(".zero",  {duration:.3, autoAlpha:0}, "chev")	
	}
	
	tl.from(".chev_1",  {duration:.3, autoAlpha:0}, "chev")
	tl.from(".chev_2",  {duration:.3, autoAlpha:0}, "-=.2")
	tl.from(".chev_3",  {duration:.3, autoAlpha:0}, "-=.2")
	return tl
}




function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	

	tl.set(".frame1", {autoAlpha:1})

	

	return tl
}



function HOR(){
	// import {init, olg, size, chev, bb, bb2, READ} from '../../_common/js/common.js'




	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	const tl = init()
	
	const HEIGHT = size.h*.7

	tl.from(".o",  {duration:.3, autoAlpha:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, autoAlpha:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, autoAlpha:0}, "+=1")
	

	tl.add("t1-in", "+=.2")
	tl.from(".t1a", {duration:.2, autoAlpha:0, y:`-=${HEIGHT}`}, "t1-in")	

	tl.add("t1-out", `+=${READ.t1}`)
	tl.to(".t1a", {duration:.2, autoAlpha:0, y:`+=${HEIGHT}`}, "t1-out")


	tl.add("t2-in", "+=.2")
	tl.from(".t1b", {duration:.2, autoAlpha:0, y:`-=${HEIGHT}`}, "t2-in")	

	tl.add("t2-out", `+=${READ.t2}`)
	tl.to(".t1b", {duration:.2, autoAlpha:0, y:`+=${HEIGHT}`}, "t2-out")
	



	tl.from(".bring", {scale:1, duration:.25, autoAlpha:0, ease:'back.out'}, "+=.2")
	tl.to(".bring", {duration:.25, autoAlpha:0}, "+=1.3")


	tl.from(".t2", {duration:.25, autoAlpha:0}, "+=.2")
	tl.to(".t2", {duration:.25, autoAlpha:0}, `+=3`)

	tl.from(".proline-end", {duration:.25, autoAlpha:0}, "+=.1")
	// tl.to(".proline-end", {duration:.25, autoAlpha:0}, "+=.3")

	tl.from(".cta", {duration:.25, autoAlpha:0}, "+=.3")
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, autoAlpha:0}, "end")





}

function swiiing(){
	const tl = bb_a()

	


	// tl.add("t2-in")
	// tl.from(".t1c", {x:`-${size.w}`, duration:.2}, "t2-in")
	// tl.from(".t1d", {x:size.w, duration:.2}, "t2-in")

	// tl.add("t2-out", `+=${SECOND.t2}`)
	// tl.to(".t1c", {x:`-${size.w}`, duration:.3}, "t2-out")
	// tl.to(".t1d", {x:size.w, duration:.3}, "t2-out")



	tl.to([".o-shadow", ".proline", ".o"], {duration:.1, autoAlpha:0}, "f1-out")

	tl.from(".bring",  {duration:.25, x:"-=100", autoAlpha:0})
	tl.add(chev())
	return tl
}

export {size, init, olg, chev, bb, bb2, READ, bbSecond, SECOND, HOR, swiiing}