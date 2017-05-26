import INPUT from '../constants/inputTypes';
export class Input {
    constructor(config) {
        this.name = config.name;
        this.type = config.type;
        this.value = config.value;
        this.label = config.label;
    }
}
class Text extends Input {
    constructor(config) {
        super(config);
        this.placeholder = config.placeholder;
    }
}
class AutoComplete extends Text {
    constructor(config) {
        super(config);
        this.resource = config.resource;
        this.searchText = config.searchText;
    }
}
class Choice extends Input {
    constructor(config) {
        super(config);
        this.selectionType = config.selectionType;
        this.potentialValues = config.potentialValues;
    }
}
class DatePicker extends Input {
    constructor(config) {
        super(config);
    }
}
class TimePicker extends Input {
    constructor(config) {
        super(config);
    }
}
export default {
    [INPUT.TEXT_FIELD]: Text,
    [INPUT.AUTO_COMPLETE]: AutoComplete,
}
