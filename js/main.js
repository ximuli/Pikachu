!function(){
	var duration = 50
	
	$('button').on('click', function(e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow': 
                duration = 100
                break
            case 'normal':
                duration = 50
            case 'fast':
                duration = 10
        }
    })

	function writeCode(prefix, code, fn) {
        let preTag = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        // let n = 0;
        // let id = setInterval(() => {
        // 	n += 1
        // 	preTag.innerHTML = code.substring(0,n)
        // 	styleTag.innerHTML = code.substring(0,n)
        // 	preTag.scrollTop = preTag.scrollHeight
        // 	if (n >= code.length) {
        // 		clearInterval(id)
        // 		fn && fn.call()
        // 	}
        // }, 10)
        let n = 0;
        setTimeout(function run() {
        	n += 1
        	preTag.innerHTML = code.substring(0,n)
        	styleTag.innerHTML = code.substring(0,n)
        	preTag.scrollTop = preTag.scrollHeight
        	if (n < code.length) {
        		setTimeout(run, duration)
        	}else{
        		fn && fn.call()
        	}
        	
        }, duration)

	}

    let code = `
/*
 * 来画一只皮卡丘吧！
 * 首先，让我们准备个小黑板来放置代码
 */

#code {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

 /*
 * 准备皮卡丘的颜色
 */
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}
/*
 * 接下来，开始画皮卡丘的鼻子
 */
.nose {
    border-width: 10px 12px;
    border-style: solid;
    border-color: black transparent transparent;
    border-radius: 50%;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 28px;
}
/*
 * 然后是眼睛
 */
.eye {
    width: 49px;
    height: 49px;
    background-color: #333;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 0;
}
.eye.left {
    right: 50%;
    margin-right: 90px;
}
.eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
 * 炯炯有神的眼睛
 */
.eye.left::after {
    position: absolute;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    left: 12%;
    top: 2%;
    border: 2px solid #000;
    border-radius: 50%;
}

.eye.right::after {
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    background-color: #fff;
    left: 12%;
    top: 2%;
    border: 2px solid #000;
    border-radius: 50%;
}
/*
 * 然后开始画皮卡丘的脸
 */
.face {
    width: 68px;
    height: 68px;
    background-color: #fc0d1c;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
 * 把脸放到合适的位置
 */
.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip {
    width: 80px;
    height: 25px;
    border: 2px solid #000;
    position: absolute;
    top: 48px;
    background-color: #fee433;
}

.upperLip.left {
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 40px 25px;
    right: 50%;
    transform: rotate(-20deg);
} 

.upperLip.right {
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 40px 25px;
    left: 50%;
    transform: rotate(20deg);
} 
/*
 * 下嘴唇
 */
.lowerLip-wrapper {
    position: absolute;
    bottom: -20px;
    width: 180px;
    height: 130px;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
}

.lowerLip {
    width: 180px;
    height: 1000px;
    background-color: #AF0513;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    border: 2px solid #000;
    overflow: hidden;
}
/*
 * 小舌头
 */
.lowerLip::after {
    content: '';
    bottom: 0;
    width: 100px;
    height: 100px;
    background-color: #FF4a62;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}
/*
 * 好了，我的皮卡丘画完了。好看吗？
 */
`
    writeCode('', code)

}.call()