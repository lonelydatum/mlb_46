


import {init, olg, size, chev, bbSecond, bb2} from '../../_common/js/common.js'



function start(){
	const tl = bbSecond()	

	// tl.to(".chev_1a", {duration:.3, opacity:0}, "+=.1")
	tl.to(".chev_1b", {duration:.3, opacity:0}, "+=.3")
	
	


	// const tl = init()
	tl.from(".t2",  {duration:.3, opacity:0}, "+=.1")

	tl.add("done", `+=3`)
	tl.to(".t2",  {duration:.3, opacity:0}, "done")
	tl.to(".chev_1a", {duration:.3, opacity:0}, "done")
	tl.to(".bring", {duration:.3, opacity:0}, "done")

	tl.from(".proline-end",  {duration:.3, opacity:0}, "+=.1")
	tl.from(".cta",  {duration:.3, opacity:0}, "+=.3")

	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")
	// return tl
	// tl.add(bb2())

}



start()



module.exports = {};

