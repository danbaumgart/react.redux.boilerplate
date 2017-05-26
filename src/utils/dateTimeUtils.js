import {HOUR, DAY, MONTH, MINUTE, SECOND} from './constants/dateTime';
import {DateTime} from './model/dateTimeModel';
export default {
    toDateTimeModel(date) {
        const dateTime = DateTime.isStandardDate(date) ? date : new Date();
        return new DateTime(dateTime);
    },
    toDateModel(date) {
        const dateTime = DateTime.isStandardDate(date) ? date : new Date();
        return DateTime.ToDateModel(dateTime);
    },
    toTimeModel(date) {
        const dateTime = DateTime.isStandardDate(date) ? date : new Date();
        return DateTime.ToTimeModel(dateTime);
    },
    toDate(dateTime) {
        if (DateTime.isDateTimeModel(dateTime)) {
            if(dateTime.time.isMeridiemFormat()) dateTime.time.ToMilitaryTime();
            const {time: {hour, minute, second, millisecond}, date: {day, year, month}} = dateTime;
            return new Date(year, month, day, hour, minute, second, millisecond);
        } else if(DateTime.isDateModel(dateTime)) {
            const {day, year, month} = dateTime;
            return new Date(year, month, day, 0, 0, 0, 0);
        } else if(DateTime.isTimeModel(dateTime)) {
            const {hour, minute, second, millisecond} = dateTime;
            const {date: {day, year, month}} = this.toDateTimeModel();
            return new Date(year, month, day, hour, minute, second, millisecond);
        } else if(DateTime.isStandardDate(dateTime)) return dateTime;
        else return new Date();
    },
    isDate(date) {
        return DateTime.isStandardDate(date);
    },
    isModel(model) {
        return DateTime.isDateTimeModel(model);
    },
    toPaddedModel(date) {
        const model = DateTime.isDateTimeModel(date) ? date : this.toDateTimeModel(date);
        [HOUR, DAY, MONTH, MINUTE, SECOND].forEach(unit => {
            model[unit] = model[unit] < 10 ?
                '0' + model[unit] :
                model[unit].toString();
        });
        return model;
    },
    toFormattedModel(date) {
        const model = this.toPaddedModel(date);
        return {
            date: model.month + '/' + model.day + '/' + model.year,
            time: model.hour + ':' + model.minute + ':' + model.second + ' ' + model.meridiem
        };
    }
};
