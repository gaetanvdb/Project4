$(document.body).ready(function () {
   $(function () {

     var main_obj_id = 'on_off';
     var on_class = 'on_off_on';
     var off_class = 'on_off_off';        

       $('#' + main_obj_id).click(function () {
             if ($(this).is('.' + on_class)) {

                $(this).removeClass(on_class);
                $(this).addClass(off_class);
                $(this).html('');
                $(this).parent().attr("aria-checked","false");

             } else {
                $(this).removeClass(off_class);
                $(this).addClass(on_class);
                $(this).html('');
                $(this).parent().attr("aria-checked","true");                 

             }
       });
   });
});