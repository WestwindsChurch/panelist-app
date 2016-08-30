var $receiver = $('#receiver'),
    timing = 500;

addEvent(window, 'storage', function (event) {

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