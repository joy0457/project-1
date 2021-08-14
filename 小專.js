$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1000); //一開始淡入
  });


  //首先將#back-to-top隱藏
 
 //當滾動條的位置處於距頂部800畫素以下時，跳轉連結出現，否則消失
 $(function () {
  $(window).scroll(function(){
   if ($(window).scrollTop()>800){
    $("#back-to-top").fadeIn(500);
   }else{
    $("#back-to-top").fadeOut(500);
   }
 });
 //當點選跳轉連結後，回到頁面頂部位置
 $("#back-to-top").click(function(){
  $('body,html').animate({scrollTop:0},500);
   return false;
  });
 });
;





  




  


     












 