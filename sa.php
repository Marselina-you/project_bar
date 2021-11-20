$('.header-box1__href').click(function(evt){
        evt.preventDefault();
        $("#myModal").modal("show");
        var url = $(this).attr('href');
        $('.modal-body').load(url + ' .block-registration-enter');
        return false;

    });

    include ROOT.'/views/layouts/slider.php';?>