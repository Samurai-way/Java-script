const sel = selector => document.querySelector(selector);
sel('.addColor').addEventListener('click', function () {
    sel('.colorBox').classList.toggle('size');
    sel('.box1').classList.toggle('borRad1');
    sel('.box1').classList.toggle('rgb1');
    sel('.box2').classList.toggle('borRad2');
    sel('.box2').classList.toggle('rgb2');
    sel('.box3').classList.toggle('borRad3');
    sel('.box3').classList.toggle('rgb3');
    sel('.box4').classList.toggle('borRad4');
    sel('.box4').classList.toggle('rgb4');
    sel('.box5').classList.toggle('borRad5');
    sel('.box5').classList.toggle('rgb5');
    sel('.box6').classList.toggle('borRad6');
    sel('.box6').classList.toggle('rgb6');
    sel('.box7').classList.toggle('borRad7');
    sel('.box7').classList.toggle('rgb7');
    sel('.box8').classList.toggle('borRad8');
    sel('.box8').classList.toggle('rgb8');
    sel('.box9').classList.toggle('borRad9');
    sel('.box9').classList.toggle('rgb9');
    sel('.imageBox').classList.remove('size');
    sel('.box21').classList.remove('borRad1');
    sel('.box21').classList.remove('img1');
    sel('.box22').classList.remove('borRad2');
    sel('.box22').classList.remove('img2');
    sel('.box23').classList.remove('borRad3');
    sel('.box23').classList.remove('img3');
    sel('.box24').classList.remove('borRad4');
    sel('.box24').classList.remove('img4');
    sel('.box25').classList.remove('borRad5');
    sel('.box25').classList.remove('img5');
    sel('.box26').classList.remove('borRad6');
    sel('.box26').classList.remove('img6');
    sel('.box27').classList.remove('borRad7');
    sel('.box27').classList.remove('img7');
    sel('.box28').classList.remove('borRad8');
    sel('.box28').classList.remove('img8');
    sel('.box29').classList.remove('borRad9');
    sel('.box29').classList.remove('img9');
})

sel('.box1').addEventListener('click', function () {
    sel('.body').classList.add('rgb1');
    sel('.body').classList.remove('rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box2').addEventListener('click', function () {
    sel('.body').classList.add('rgb2');
    sel('.body').classList.remove('rgb1', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box3').addEventListener('click', function () {
    sel('.body').classList.add('rgb3');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box4').addEventListener('click', function () {
    sel('.body').classList.add('rgb4');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box5').addEventListener('click', function () {
    sel('.body').classList.add('rgb5');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box6').addEventListener('click', function () {
    sel('.body').classList.add('rgb6');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box7').addEventListener('click', function () {
    sel('.body').classList.add('rgb7');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box8').addEventListener('click', function () {
    sel('.body').classList.add('rgb8');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box9').addEventListener('click', function () {
    sel('.body').classList.add('rgb9');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})


//--------------------------------------------------------------------------------------//

sel('.addImage').addEventListener('click', function () {
    sel('.imageBox').classList.toggle('size');
    sel('.colorBox').classList.remove('size');
    sel('.box1').classList.remove('borRad1');
    sel('.box1').classList.remove('rgb1');
    sel('.box2').classList.remove('borRad2');
    sel('.box2').classList.remove('rgb2');
    sel('.box3').classList.remove('borRad3');
    sel('.box3').classList.remove('rgb3');
    sel('.box4').classList.remove('borRad4');
    sel('.box4').classList.remove('rgb4');
    sel('.box5').classList.remove('borRad5');
    sel('.box5').classList.remove('rgb5');
    sel('.box6').classList.remove('borRad6');
    sel('.box6').classList.remove('rgb6');
    sel('.box7').classList.remove('borRad7');
    sel('.box7').classList.remove('rgb7');
    sel('.box8').classList.remove('borRad8');
    sel('.box8').classList.remove('rgb8');
    sel('.box9').classList.remove('borRad9');
    sel('.box9').classList.remove('rgb9');
    sel('.box21').classList.toggle('borRad1');
    sel('.box21').classList.toggle('img1');
    sel('.box22').classList.toggle('borRad2');
    sel('.box22').classList.toggle('img2');
    sel('.box23').classList.toggle('borRad3');
    sel('.box23').classList.toggle('img3');
    sel('.box24').classList.toggle('borRad4');
    sel('.box24').classList.toggle('img4');
    sel('.box25').classList.toggle('borRad5');
    sel('.box25').classList.toggle('img5');
    sel('.box26').classList.toggle('borRad6');
    sel('.box26').classList.toggle('img6');
    sel('.box27').classList.toggle('borRad7');
    sel('.box27').classList.toggle('img7');
    sel('.box28').classList.toggle('borRad8');
    sel('.box28').classList.toggle('img8');
    sel('.box29').classList.toggle('borRad9');
    sel('.box29').classList.toggle('img9');
})

sel('.box21').addEventListener('click', function () {
    sel('.body').classList.add('img1');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box22').addEventListener('click', function () {
    sel('.body').classList.add('img2');
    sel('.body').classList.remove('rgb1', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box23').addEventListener('click', function () {
    sel('.body').classList.add('img3');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box24').addEventListener('click', function () {
    sel('.body').classList.add('img4');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb5', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img5', 'img6', 'img7', 'img8', 'img9');
})

sel('.box25').addEventListener('click', function () {
    sel('.body').classList.add('img5');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb6', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img6', 'img7', 'img8', 'img9');
})

sel('.box26').addEventListener('click', function () {
    sel('.body').classList.add('img6');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb7', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img7', 'img8', 'img9');
})

sel('.box27').addEventListener('click', function () {
    sel('.body').classList.add('img7');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb8', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img8', 'img9');
})

sel('.box28').addEventListener('click', function () {
    sel('.body').classList.add('img8');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb9');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img9');
})

sel('.box29').addEventListener('click', function () {
    sel('.body').classList.add('img9');
    sel('.body').classList.remove('rgb1', 'rgb2', 'rgb3', 'rgb4', 'rgb5', 'rgb6', 'rgb7', 'rgb8');
    sel('.body').classList.remove('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8');
})

