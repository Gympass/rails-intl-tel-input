//= require intlTelInput/intlTelInput
//= require intlTelInput/utils

$(function () { international_phones_init() });

$(document).on('shown.bs.modal', function () { international_phones_init() });

function international_phones_init () {
    $('[data-intl-tel-input]').each(function () {
        var element = $(this);
        var hidden = element.closest('.form_phone_row').find('.international_phone_number');
        var hidden_phone_country_code =  element.closest('.form_phone_row').find('.phone_country_code');
        element.intlTelInput(element.data('intl-tel-input') || {});

        element.closest('form').submit(function () {
            var match = element.intlTelInput('getNumber').match(/(\+(xl)?\d+)(?=)/g);
            hidden.val(match[match.length - 1]);
            hidden_phone_country_code.val(element.intlTelInput('getSelectedCountryData').dialCode)
        });
    });
}
