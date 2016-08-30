var $input = $('#data'),
    $form = $('#form'),
    $message = $('#message'),
    $preview = $('#preview');

$form.submit(function (e) {

    e.preventDefault();
    localStorage.setItem('storage-send-data', $input.val());

    $preview.html($input.val());
    $preview.addClass('sent');


    $message.find('.text').html($input.val().length ? 'Sent!' : 'Text Erased!');
    $message.stop().slideDown(150).delay(2000).slideUp(300);

    $input.val('');
});

$input.keyup(function (e) {

    if (e.which == 13) {
        return;
    }

    $preview.removeClass('sent');
    $preview.html($input.val());
});