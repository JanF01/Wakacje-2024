
$(document).ready(function(){

    var files = ['hotel.jpg','cheopsa.jpg','hurghada.jpg','sfinks.jpg','abusimbel.jpeg','dom.jpg','wp.jpg','space.jpg','miami.jpg','mb.jpg'];
    var i1 = 0;
    var files2 = ['lazurowe.jpg','sklepy.jpg','slimaki.jpg','eiffla.jpg','ben.jpg','red.jpg','towar.jpg','west.jpg'];
    var i2 = 0;
  
  
    $('#a1').on('click',function(){
       if(i1>0){
         i1--;
         $('#exchange').attr('src','grafika/'+files[i1]);  
       } 
    });
    $('#a2').on('click',function(){
      if(i1<files.length-1){
        i1++;
        $('#exchange').attr('src','grafika/'+files[i1]);  
      } 
    });
  
    $('#b1').on('click',function(){
      if(i2>0){
        i2--;
        $('#exchange2').attr('src','grafika/'+files2[i2]);  
      } 
   });
   $('#b2').on('click',function(){
     if(i2<files2.length-1){
       i2++;
       $('#exchange2').attr('src','grafika/'+files2[i2]);  
     } 
   });
  
  
  
  });