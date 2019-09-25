let inputSelector = '#input';

$(inputSelector).on('input blur keyup paste', (e) => {
    // allowed_codes - коды символов Escape Shift * + - /
    // let allowed_codes = [106, 107, 109, 111];
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 27:                                    // Escape
            $(inputSelector).val(null);
            break;
        case 106: case 107: case 109: case 111:     // * + - /
            console.log('Sign');
            break;
        default:
            $(inputSelector).val((i, input) => {
                input = input.replace(/\./ig, ',');

                let comma = input.match(/,/ig);
                if (comma && comma.length > 1)

                    input = input.replace(/(?![eE])[а-яёйa-z!@#$%^&*()_=\s]/iug, '');
                return
            });
    }

    // let validInput = validate($(inputSelector).val());
    // $(inputSelector).val(validInput);

    // if ($.isNumeric(e.key) || e.keyCode === 106) {// || $.inArray(e.keyCode, allowed_codes)) {
    //
    //     console.log(e.key);
    //     // console.log($('#input').val());
    // }
});
//
// let validate = (input) => {
//     return input.val;
// };