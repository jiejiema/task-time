<template>
    <div class="block">
        <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
        ></Calendar>

        <button>加班</button>
        <button>调休</button>
    </div>
</template>

<script>
    // import Calendar from 'vue-calendar-component';
    import Calendar from '../calendar/calendar.vue';
    export default {
        name: "time",
        components: {
            Calendar
        },
        data() {
            return {
              /*  pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',*/
            };
        },
        methods: {
            clickDay(data) {
                console.log(data,'选中某天'); //选中某天
            },
            changeDate(data) {
                console.log(data,'左右点击切换月份'); //左右点击切换月份
            },
            clickToday(data) {
                console.log(data,'跳到了本月'); //跳到了本月
            }
        }
    };

</script>

