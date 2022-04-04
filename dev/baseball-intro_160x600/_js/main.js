


import {init, olg, size, chev, bbSecond, bb2} from '../../_common/js/common.js'



function start(){
	const tl = bbSecond()	

	tl.to(".chev_1a", {duration:.3, opacity:0}, "+=.1")
	tl.from(".proline-end",  {duration:.3, opacity:0}, "+=.1")
	tl.to(".chev_1b", {duration:.3, opacity:0}, "+=.3")


	
	tl.add(bb2())

}



start()



module.exports = {};

