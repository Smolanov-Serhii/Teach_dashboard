$(document ).ready(function() {
    $('.lang-current').click(function() {
        $(this).toggleClass("active")
        $('.dashboard__nav-items').toggleClass("opacity")
        $( ".lang-list" ).slideToggle( "easing" );
    });

    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    $(document).ready(function() {
// Создаем две переенные с названиями месяцев и дней недели в массиве
        var monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
        var dayNames= ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
// Создаем объект newDate()
        var newDate = new Date();
// Извлекаем текущую дату из объекта Date
        newDate.setDate(newDate.getDate());
// Навыходе день, дата, месяц и год
//         $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
        $('#Date').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
        setInterval( function() {
            // Создаем объект newDate() и извлекаем секунды текущего времени
            var seconds = new Date().getSeconds();
            // Добавляем начальный ноль к значению секунд
            $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);

        setInterval( function() {
            // Создаем объект newDate() и извлекаем минуты текущего времени
            var minutes = new Date().getMinutes();
            // Добавляем начальный ноль к значению минут
            $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);

        setInterval( function() {
            // Создаем объект newDate() и извлекаем часы из текущего времени
            var hours = new Date().getHours();
            // Добавляем начальный ноль к значению часов
            $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);

    });
});






