// alert('ok');
$('.btn_1').click(function () { 
    $('#content_1_demo').slideToggle(500);
    $('#content_2_demo').slideUp(500);
    $('#content_3_demo').slideUp(500);
});
$('.btn_2').click(function (e) { 
    $('#content_1_demo').slideUp(500);
    $('#content_2_demo').slideToggle(500);
    $('#content_3_demo').slideUp(500);
    
});
$('.btn_3').click(function (e) { 
    $('#content_1_demo').slideUp(500)
    $('#content_2_demo').slideUp(500);
    $('#content_3_demo').slideToggle(500);
    
});

