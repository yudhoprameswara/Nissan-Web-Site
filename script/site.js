
    var myIndex = 0;
    backgroundImage();
    imageSliderListener();
    addSilviaButton();
    addGtrButton();
    addContactMeButton();
    addZbutton();

function addZbutton(){
  $('.z-series').click(function(event){

    $('html').removeClass('light-mode')
    $('html').addClass('color-mode')
    

    $('.image-container').html(
      `<img class="slides" src="images/nissanZ1.jpg" alt="interior">
       <img class="slides" src="images/nissanZ2.jpg" alt="interior">
       <img class="slides" src="images/nissanZ3.jpg" alt="interior">
       <img class="slides" src="images/nissanZ4.jpg" alt="interior">
      `
    )

    imageSliderZ();

    $('.side-panel').html(
      `
      <div class="info-card">
            <h3>History of 240Z</h3>
            <p> 
            The Nissan S30, sold in Japan as the Nissan Fairlady Z and in other markets as the Datsun 240Z, then later as the 260Z and 280Z, is a grand tourer produced by Nissan from 1969 until 1978. The S30 was conceived of by Yutaka Katayama, the President of Nissan Motor Corporation U.S.A., and designed by a team led by Yoshihiko Matsuo, the head of Nissan's Sports Car Styling Studio. It is the first car in Nissan's Z series of sports cars.
            </p>
    
        </div>
        <div class="info-card">
            <h3>Specs</h3>
            <table class="spec-panel">
                <tr>
                    <th>Engine</th>
                    <td> 
                        <div>1990 cc S20 DOHC 24v I6 (PS30) </div>
                        <div>1998 cc L20 I6 (S30/GS30) </div>
                        <div>2393 cc L24 I6 (HS30)</div>
                    </td>
                </tr>
                <tr>
                    <th>Transmission</th>
                    <td>
                      <div>4/5-speed manual</div>
                      <div>3-speed automatic </div>
                    </td>  
                </tr>
            </table>
        </div>
      `
    ) 

})

}    

function addContactMeButton(){

  $('.contact-popup').hover(function(event){
    $(this).html(`
     
      <a href="mailto:yudhoprameswara@gmail.com" class="contact-body">
      <div><img class="mail" src="images/email.png" alt="interior"></img></div>
      
      </a>
    `)
    

  })
  $('.contact-popup').mouseleave(function(event){
    $(this).html(`
      Contact Me!
    `)
  })

}    

function addGtrButton(){
  $('.r32').click(function(event){
      location.reload();w
  })
}

function backgroundImage(){
    var i;
    var x = document.getElementsByClassName('slides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(backgroundImage, 3000);
}


function imageSliderListener(){
  $('.slider-one').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/interior.jpg" alt="interior"></img>`
    )
  })

  $('.slider-two').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/back.jpg" alt="interior">`
    )
  })

  
  $('.slider-three').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/front.jpg" alt="interior">`
    )
  })

  $('.slider-four').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/back2.jpg" alt="interior">`
    )
  })

  
  $('.button-img').mouseleave(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/interior.jpg" alt="interior">
       <img class="slides" src="images/back.jpg" alt="interior">
       <img class="slides" src="images/front.jpg" alt="interior">
       <img class="slides" src="images/back2.jpg" alt="interior">
      `
    )
  })

}
function imageSliderZ(){
  $('.slider-one').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/nissanZ1.jpg" alt="interior"></img>`
    )
  })

  $('.slider-two').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/nissanZ2.jpg" alt="interior">`
    )
  })

  
  $('.slider-three').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/nissanZ3.jpg" alt="interior">`
    )
  })

  $('.slider-four').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/nissanZ4.jpg" alt="interior">`
    )
  })

  $('.button-img').mouseleave(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/nissanZ1.jpg" alt="interior">
      <img class="slides" src="images/nissanZ2.jpg" alt="interior">
      <img class="slides" src="images/nissanZ3.jpg" alt="interior">
      <img class="slides" src="images/nissanZ4.jpg" alt="interior">
      `
    )
  })
  

}
function imageSliderSilvia(){
  $('.slider-one').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/silvia1.jpg" alt="interior"></img>`
    )
  })

  $('.slider-two').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/silvia2.jpg" alt="interior">`
    )
  })

  
  $('.slider-three').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/silvia3.jpg" alt="interior">`
    )
  })

  $('.slider-four').hover(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/silvia4.jpg" alt="interior">`
    )
  })

  $('.button-img').mouseleave(function(event){
    $('.image-container').html(
      `<img class="slides" src="images/silvia1.jpg" alt="interior">
      <img class="slides" src="images/silvia2.jpg" alt="interior">
      <img class="slides" src="images/silvia3.jpg" alt="interior">
      <img class="slides" src="images/silvia4.jpg" alt="interior">
      `
    )
  })
}

function addSilviaButton(){
  $('.silvia').click(function(event){
    $('html').removeClass('color-mode')
    $('html').addClass('light-mode')
    
    imageSliderSilvia();

    $('.image-container').html(
      `<img class="slides" src="images/silvia1.jpg" alt="interior">
       <img class="slides" src="images/silvia2.jpg" alt="interior">
       <img class="slides" src="images/silvia3.jpg" alt="interior">
       <img class="slides" src="images/silvia4.jpg" alt="interior">
      `
    )

    $('.side-panel').html(
      `
      <div class="info-card">
            <h3>History of Silvia Series</h3>
            <p> 
                The Nissan Silvia (Japanese: 日産・シルビア, Hepburn: Nissan Shirubia) is the series of small sports cars produced by Nissan. Versions of the Silvia have been marketed as the 200SX or 240SX for export, with some export versions being sold under the Datsun brand.
            </p>
            <p>
                The name "Silvia" is derived from Sylvia, the name of the nymph who served Diana, the Roman goddess of the hunt and chastity. The name also means "forest" in Latin.
            </p>
        </div>
        <div class="info-card">
            <h3>Specs</h3>
            <table class="spec-panel">
                <tr>
                    <th>Engine S15</th>
                    <td> 
                        <div>2.0 L SR20DE I4 </div>
                        <div>2.0 L SR20DET I4 turbo </div>
                    </td>
                </tr>
                <tr>
                    <th>Transmission</th>
                    <td>
                      <div>5-speed manual</div>
                      <div>6-speed manual</div>
                      <div>4-speed automatic</div>
                    </td>  
                </tr>
            </table>
        </div>
      `
    )
    
  })
}