// Déclaration de ma fonction changeImg().
function changeImg(object,ev){
  //On récupère les images et on les assigne a une variable.
  var img1 = document.getElementById('image1');
  var img2 = document.getElementById('image2');
  var img3 = document.getElementById('image3');
  var img4 = document.getElementById('image4');
  var img5 = document.getElementById('image5');
  //On assigne un nouvel src à l'image sous la souris.
  if(ev == 'img1'){
    img1.setAttribute('src', 'assets/img/image1_2.jpg');
  }
  if(ev == 'img2'){
    img2.setAttribute('src', 'assets/img/image2_2.jpg');
  }
  if(ev == 'img3'){
    img3.setAttribute('src', 'assets/img/image3_2.jpg');
  }
  if(ev == 'img4'){
    img4.setAttribute('src', 'assets/img/image4_2.jpg');
  }
  if(ev == 'img5'){
    img5.setAttribute('src', 'assets/img/image5_2.jpg');
  }
}
// Déclaration de ma fonction reChangeImg.
function reChangeImg(object,ev){
  var img1 = document.getElementById('image1');
  var img2 = document.getElementById('image2');
  var img3 = document.getElementById('image3');
  var img4 = document.getElementById('image4');
  var img5 = document.getElementById('image5');
  //On remet le src de base lorsque la souris sort de l'image.
  if(ev == 'img1'){
    img1.setAttribute('src', 'assets/img/image1.jpg');
  }
  if(ev == 'img2'){
    img2.setAttribute('src', 'assets/img/image2.jpg');
  }
  if(ev == 'img3'){
    img3.setAttribute('src', 'assets/img/image3.jpg');
  }
  if(ev == 'img4'){
    img4.setAttribute('src', 'assets/img/image4.jpg');
  }
  if(ev == 'img5'){
    img5.setAttribute('src', 'assets/img/image5.jpg');
  }
}
