export default {
    // 当某月的天数
    getDaysInOneMonth(date) {
        // console.log(date,'date')
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const d = new Date(year, month, 0);
        // console.log(d,'newdate')
        return d.getDate();
    },
    // 向前空几个
    getMonthweek(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dateFirstOne = new Date(year + '/' + month + '/1');
        let weekDay = this.sundayStart ?
            dateFirstOne.getDay() == 0 ? 7 : dateFirstOne.getDay() :  //getDay() == 0 星期日
            dateFirstOne.getDay() == 0 ? 6 : dateFirstOne.getDay() - 1;
        // console.log(weekDay, 'weekday')
        return weekDay;
    },
    /**
     * 获取当前日期上个月或者下个月
    */
    getOtherMonth(date, str = 'nextMonth') {
        const timeArray = this.dateFormat(date).split('/');
        const year = timeArray[0];
        const month = timeArray[1];
        const day = timeArray[2];
        let year2 = year;
        let month2;
        if (str === 'nextMonth') {
            month2 = parseInt(month) + 1;
            if (month2 == 13) {
                year2 = parseInt(year2) + 1;
                month2 = 1;
            }
        } else {
            month2 = parseInt(month) - 1;
            if (month2 == 0) {
                year2 = parseInt(year2) - 1;
                month2 = 12;
            }
        }
        let day2 = day;
        const days2 = new Date(year2, month2, 0).getDate();
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        if (day2 < 10) {
            day2 = '0' + day2;
        }
        const t2 = year2 + '/' + month2 + '/' + day2;
        return new Date(t2);
    },
    // 上个月末尾的一些日期
    getLeftArr(date) {
        const arr = [];
        const leftNum = this.getMonthweek(date);
        const num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
        const preDate = this.getOtherMonth(date, 'preMonth');
        const getDay = date.getDay();
        // 上个月多少开始
        for (let i = 0; i < leftNum; i++) {
            const nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
            const getDay = new Date(nowTime).getDay();
            arr.push({
                id: num + i,
                date: nowTime,
                isToday: false,
                otherMonth: 'preMonth',
                isHoliday: getDay === 6 || getDay === 0,
            });
        }
        return arr;
    },
    // 下个月末尾的一些日期
    getRightArr(date) {
        const arr = [];
        const nextDate = this.getOtherMonth(date, 'nextMonth');
        const leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);
        const _length = 7 - leftLength % 7;
        const getDay = date.getDay();
        for (let i = 0; i < _length; i++) {
            const nowTime = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1);
            const getDay = new Date(nowTime).getDay();
            arr.push({
                id: i + 1,
                date: nowTime,
                isToday: false,
                otherMonth: 'nextMonth',
                isHoliday: getDay === 6 || getDay === 0,
            });
        }
        return arr;
    },
    // format日期
    dateFormat(date) {
        date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/'
            + date.getDate();
    },
    // 获取某月的列表不包括上月和下月
    getMonthListNoOther(date) {
        const arr = [];
        const num = this.getDaysInOneMonth(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const toDay = this.dateFormat(new Date());
        for (let i = 0; i < num; i++) {
            const nowTime = year + '/' + month + '/' + (i + 1);
            const getDay = new Date(nowTime).getDay();
            arr.push({
                id: i + 1,
                date: nowTime,
                isToday: toDay === nowTime,
                otherMonth: 'nowMonth',
                isHoliday: getDay === 6 || getDay === 0,
            });
        }
        return arr;
    },
    // 获取某月的列表 用于渲染
    getMonthList(date) {
        return [...this.getLeftArr(date), ...this.getMonthListNoOther(date), ...this.getRightArr(date)];
    },
    // 默认是周一开始
    sundayStart: false,
};
