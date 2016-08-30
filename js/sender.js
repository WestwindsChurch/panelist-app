var $input = $('#data'),
    $form = $('#form'),
    $message = $('#message'),
    $preview = $('#preview');

$form.submit(function (e) {

    e.preventDefault();
    localStorage.setItem('storage-send-data', $input.val());

    $preview.html($input.val());
    $preview.addClass('sent');

    $input.val('');

    $message.slideDown(150).delay(2000).slideUp(300);
});

$input.keyup(function (e) {

    if (e.which == 13) {
        return;
    }

    $preview.removeClass('sent');
    $preview.html($input.val());
});