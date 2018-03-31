var colorB = document.getElementById('color'),
	preview = document.getElementById('preview'),
	numB = document.getElementById('numberB'),
	range1 = document.getElementById('range1'),
	range2 = document.getElementById('range2'),
	range3 = document.getElementById('range3'),
	range4 = document.getElementById('range4'),
	rangeB = document.getElementById('rangeB'),
	eyes = document.getElementById('eyes'),
	nose = document.getElementById('nose'),
	mouth = document.getElementById('mouth'),
	hair = document.getElementById('hair'),
	add = document.getElementById("add"),
	disp = document.getElementById('display'),
	auto = document.getElementById('auto'),
	stop = document.getElementById("stop"),
	randomB = document.getElementById("randomB"),
	myrow = document.getElementById('myrow'),

	play,
	hairNum = 1,
	eyesNum = 1,
	noseNum = 1,
	mouthNum = 1;




function randomFace() {
	var bgColor = '#',
		hairNum = Math.floor((Math.random() * 3) + 1),
		eyesNum = Math.floor((Math.random() * 3) + 1),
		noseNum = Math.floor((Math.random() * 3) + 1),
		mouthNum = Math.floor((Math.random() * 3) + 1),
		hairWidth = Math.floor(Math.random() * 70),
		eyesWidth = Math.floor(Math.random() * 40),
		noseWidth = Math.floor(Math.random() * 30),
		mouthWidth = Math.floor(Math.random() * 35),

		hexNum = "0123456789ABCDEF";

	hair.src = 'img/hair' + hairNum + '.png';
	eyes.src = 'img/eyes' + eyesNum + '.png';
	nose.src = 'img/nose' + noseNum + '.png';
	mouth.src = 'img/mouth' + mouthNum + '.png';


	for (i = 0; i < 6; i++) {
		bgColor += hexNum[Math.floor((Math.random() * 16) + 1)];
	}

	preview.style.backgroundColor = bgColor;

	hair.style.width = hairWidth + '%';
	eyes.style.width = eyesWidth + '%';
	nose.style.width = noseWidth + '%';
	mouth.style.width = mouthWidth + '%';

	range1.value = hairWidth;
	range2.value = eyesWidth;
	range3.value = noseWidth;
	range4.value = mouthWidth;

}

function changeType(typ) {
	range1.type = typ;
	range2.type = typ;
	range3.type = typ;
	range4.type = typ;
}

function createFace() {
	var div = document.createElement('div'),
		img1 = document.createElement("IMG"),
		img2 = document.createElement("IMG"),
		img3 = document.createElement("IMG"),
		img4 = document.createElement("IMG");

	div.className = 'col-sm-4 col-md-3 col-lg-2 col-xl-1';
	
	div.style.cssText = ' width: 100px;height: 100px;display: inline-block;position: relative;'


	img1.src = hair.src;
	img2.src = eyes.src;
	img3.src = nose.src;
	img4.src = mouth.src;
	img1.style.top = hair.style.top;
	img2.style.top = eyes.style.top;
	img3.style.top = nose.style.top;
	img4.style.top = mouth.style.top;
	img1.style.width = hair.style.width;
	img2.style.width = eyes.style.width;
	img3.style.width = nose.style.width;
	img4.style.width = mouth.style.width;
	div.style.backgroundColor = preview.style.backgroundColor;

	img1.className = 'newhair items';
	img2.className = 'neweyes items';
	img3.className = 'newnose items';
	img4.className = 'newmouth items';


	div.appendChild(img1);
	div.appendChild(img2);
	div.appendChild(img3);
	div.appendChild(img4);
	div.addEventListener("click", function () {
		disp.removeChild(this);
	})
	myrow.appendChild(div);
}

function autoPlay(i) {

	if (play == null && i == 1) {
		play = setInterval(function () {
			randomFace(), createFace();
		}, 500);
	} else if (i == 2) {
		clearInterval(play);
		play = null;
	}

}

randomB.addEventListener("click", function () {
	randomFace();
})

auto.addEventListener('click', function () {
	autoPlay(1);
})

stop.addEventListener('click', function () {
	autoPlay(2);
})



colorB.addEventListener('change', function () {
	preview.style.backgroundColor = this.value;
});

numB.addEventListener('click', function () {
	changeType('Number');
})

rangeB.addEventListener('click', function () {
	changeType('range');
})

range1.addEventListener('change', function () {
	hair.style.width = this.value + '%';
})

range2.addEventListener('change', function () {
	eyes.style.width = this.value + '%';
})

range3.addEventListener('change', function () {
	nose.style.width = this.value + '%';
})

range4.addEventListener('change', function () {
	mouth.style.width = this.value + '%';
})

hair.addEventListener('click', function () {
	hairNum += 1;
	if (hairNum > 3) {
		hairNum = 1;
	};
	this.src = 'img/hair' + hairNum + '.png';

})

eyes.addEventListener('click', function () {
	eyesNum += 1;
	if (eyesNum > 3) {
		eyesNum = 1;
	};
	this.src = 'img/eyes' + eyesNum + '.png'

})
nose.addEventListener('click', function () {
	noseNum += 1;
	if (noseNum > 3) {
		noseNum = 1;
	};
	this.src = 'img/nose' + noseNum + '.png'

})
mouth.addEventListener('click', function () {
	mouthNum += 1;
	if (mouthNum > 3) {
		mouthNum = 1;
	};
	this.src = 'img/mouth' + mouthNum + '.png'

})

add.addEventListener("click", function () {
	createFace();
})









//    = document.getElementById('');

// = document.createElement('div'),

// .appendChild();
