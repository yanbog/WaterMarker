/** 
 *  WaterMarker
 *  为网页添加文字水印 
 *  @param {String} str 要添加的水印字符串
 *  
 * */

function addWaterMarker(str) {

	var can = document.createElement('canvas');

	var body = document.body;

	body.appendChild(can);

	can.width = 400;

	can.height = 200;

	can.style.display = 'none';

	var cans = can.getContext('2d');

	cans.rotate(-20 * Math.PI / 180);

	cans.font = "16px Microsoft JhengHei";

	cans.fillStyle = "rgba(17, 17, 17, 0.50)";

	cans.textAlign = 'left';

	cans.textBaseline = 'Middle';

	cans.fillText(str, can.width / 3, can.height / 2);

	body.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";

}
