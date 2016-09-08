var $receiver = $('#receiver'),
    $receiver_form = $('#receiver-inputs form'),
    $receiver_name = $('#receiver-name'),
    $receiver_title = $('#receiver-title'),
    timing = 500;

addEvent(window, 'storage', function (event) {

    console.log('test');
    if (event.key == 'storage-send-data') {

        var $old_element = $receiver.find('.element');

        if ($old_element.length) {

            $old_element.fadeOut(timing, function () {

                $(this).remove();
                add_element(event.newValue);
            });

        } else {

            add_element(event.newValue);
        }
    }
});

function add_element(text) {

    var $new_element = $('<p class="element">').html(text).hide();

    $receiver.append($new_element);
    $new_element.fadeIn(timing);
}

$receiver_form.submit(function (e) {

    e.preventDefault();

    var name = $(this).find('[name="name"]').val(),
        title = $(this).find('[name="title"]').val();

    $receiver_name.html(name);
    $receiver_title.html(title);

    $(this).remove();
});