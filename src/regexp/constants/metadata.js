const selectTypes = {
    CHECKBOX: 'CHECKBOX',
    RADIO_GROUP: 'RADIO_GROUP',
    SELECT_FIELD: 'SELECT_FIELD'
};
const pickerTypes = {
    DATE_PICKER: 'DATE_PICKER',
    TIME_PICKER: 'TIME_PICKER'
};
const multiselectTypes = {
    CHECKBOX_GROUP: 'CHECKBOX_GROUP',
    DROPDOWN_MULTISELECT: 'DROPDOWN_MULTISELECT'
};
const autocompleteTypes = {
    STATIC_AUTOCOMPLETE: 'STATIC_AUTOCOMPLETE',
    AJAX_AUTOCOMPLETE: 'AJAX_AUTOCOMPLETE'
};
const textTypes = {
    EMAIL: 'EMAIL',
    PHONE: 'PHONE',
    STRING: 'STRING',
    NUMBER: 'NUMBER'
};
export default {
    TEXT: textTypes,
    AUTOCOMPLETE: autocompleteTypes,
    CHOICE: selectTypes,
    PICKER: pickerTypes,
    MULTISELECT: multiselectTypes
};
