// let counterA = 0;
// let counterB = 0;
// let counterC = 0;
// function setAvg() {


// console.log(counterA,counterB,counterC);

// }
// let x =setInterval(() => {
//   setAvg()

//   if (counterC == 15 &&counterA == 25&& counterB == 30) {
//     clearInterval(x)
//   } else {
//     if (counterC < 15 ) {
//       counterC++;
//     }
//     if (counterA < 25 ) {
//       counterA++;
//     }
//     if (counterB < 30 ) {
//       counterB++;
//     }
//   }
// }, 100);

$(document).ready(() => {
  
//loading
  $('.loadingPage').fadeOut(1000)
 //button Up
  $('#btnUp').click(() => {
    $('html,body').animate({ scrollTop:"0px"},500)
  })
  //time of party
  let time = new Date('12/31/2023').getTime()
  let party = setInterval(() => {
    let now = new Date().getTime()
    let count = time - now
    let da = Math.floor(count / (1000 * 60 * 60 * 24));
    let hou =Math.floor(count % (1000*60*60*24) / (1000*60*60))  ;
    let min =Math.floor(count % (1000*60*60) /(1000*60))  ;
    let soc = Math.floor(count % (1000 * 60) / (1000));
    let partyTime = [da, hou, min, soc]
    for (let i = 0; i < partyTime.length; i++) {
     
      $('.col-md-3 span').eq(i).text(partyTime[i])
     
    }
      if (count == 0) {
      clearInterval(party)
    }
  
  }, 1000);
  //songs accordion
  $('#song .col-md-6 div h5').click(e => {
    let x = $(e.target).next().css('display')
    if (x == 'none') {
      $('#song .col-md-6 div h5').next().not(this).slideUp(500)
      $(e.target).next().slideToggle(500)
      
    } else {
      $('#song .col-md-6 div h5').next().slideUp(500)
      
      
    }
    
  })
  //nav width
  let x = $('nav ul').outerWidth()
  $('nav').animate({ 'left': `-${x}px` }, 500)
  //nav action
  $('nav span').click(function () {
    if ($('nav').css('left')=='0px') {
      $('nav').animate({ 'left': `-${x}px`},500)
      
      $('nav span i').css('transform', 'rotate(0)')
    } else {
      $('nav span i').css('transform', 'rotate(180deg)')
      $('nav').animate({ 'left': '0px'},500)
    }
    
  })
  //sections btn
  $('nav li').click(e => {
    $(e.target).addClass('main')
    $('nav li').not(e.target).removeClass('main')
    let y = $(e.target).text()
    let s=`#${y}`
    let x = $(s).offset().top
    $('html,body').animate({ scrollTop:x},500)
  })
  //close nav
  $('header,section,footer,.fa-close').click(() => {
    
    $('nav').animate({ 'left': `-${x}px`},500)
  })
  
  //textarea length out put
  $('textarea').on('input',function () {
    let value = $(this).val().length
    $('.valid').text(100-value)
  })
  //send data
  $('.send').click(() => {
    let name = $('input:text').val()
    console.log(name);
    $('input,textarea').val('')
    $('.valid').text(100)
    swal({
      title:`Thanks ${name}` ,
      icon: 'success',
      button: false,
      text:'You Will Join Us In 12/31/2023 '
})
  })
  //dark mode
  $('.mood').click(e => {
    // mood != mood;
    $('.mood').not($(e.target)).css('opacity', '1')
    $(e.target).css('opacity', '0')
    
      // console.log(mood);
    if ($(':root').css('--light-color')=='#fff') {
      $(':root').css({'--light-color':'#000',
      '--dark-color':'#fff','--second-color': '#222'})
      
      
    } else {
      
      $(':root').css({'--light-color':'#fff',
      '--dark-color':'#000','--second-color': '#eee'})
      
    }
    
  })
  //themes
  let items = $('.color-item')
let colors = ['rgba(214, 46, 51,.7)', 'rgba(122, 235, 122,.85)', 'rgba(0, 153, 204,.7)', 'rgba(109, 17, 17,.7)', 'rgba(0, 128, 128,.7)']
for (let i = 0; i < items.length; i++) {
  $(items).eq(i).css('backgroundColor',colors[i])
  
  }
  items.click(e => {
    let bg=$(e.target).css('backgroundColor')
    $(':root').css('--main-color', bg)
  })
})
