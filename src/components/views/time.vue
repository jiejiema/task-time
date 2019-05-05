<template>
    <div class="block">
        <!--<Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
        ></Calendar>-->

        <!--<div>
            <span>请假：</span>
            <label>
                <span>类型</span>
                <select name="" id="" class="askForLeave">
                    <option value="">调休</option>
                    <option value="">年假</option>
                    <option value="">事假</option>
                </select>
            </label>
        </div>
        <button>加班</button>
        <button>调休</button>-->

        <div class="formDiv">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" disabled=""></el-input>
                </el-form-item>
                <el-form-item label="请假类型" prop="leaveType">
                    <el-select v-model="form.whichType" placeholder="请选择请假类型">
                        <el-option label="调休" value="调休"></el-option>
                        <el-option label="年假" value="年假"></el-option>
                        <el-option label="事假" value="事假"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请假方式" prop="leaveStyle">
                    <el-select v-model="form.whichStyle" placeholder="请选择请假方式">
                        <el-option label="按整日" value="allDay"></el-option>
                        <el-option label="按时段" value="partDay"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请假时间" required>
                    <el-col :span="11">
                        <el-form-item prop="startDate">
                            <el-date-picker type="date" placeholder="选择日期" :picker-options="startDatePicker" v-model="form.startDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2" v-if="form.whichStyle == 'partDay'" style="text-align: center">-</el-col>
                    <el-col :span="11" prop="time1" v-if="form.whichStyle == 'partDay'">
                        <el-time-picker placeholder="选择时间" v-model="form.startTime" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="TO" required>
                    <el-col :span="11">
                        <el-form-item prop="endDate">
                            <el-date-picker type="date" placeholder="选择日期" :picker-options="endDatePicker" v-model="form.endDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2" v-if="form.whichStyle == 'partDay'" style="text-align: center" >-</el-col>
                    <el-col :span="11" prop="time2" v-if="form.whichStyle == 'partDay'">
                        <el-time-picker placeholder="选择时间" v-model="form.endTime" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
<!--                <el-form-item label="所用调休">-->
<!--                    <el-col :span="11">-->
<!--                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
<!--                    </el-col>-->
<!--                </el-form-item>-->
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                {{summary}}
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    // import Calendar from '../calendar/calendar.vue';
    export default {
        // name: "time",
        components: {
            // Calendar
        },
        props: ['message'],
        data() {
            return {
                form: {
                    name: '222',
                    whichType: '',
                    whichStyle: '按整日',
                    startDate: '',
                    startTime: '',
                    endDate: '',
                    endTime: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },

                rules: {
                    leaveType: [
                        { required: true, message: '请选择类型', trigger: 'blur' },
                    ],
                    startDate: [
                        { required: true, message: '请选择日期', trigger: 'blur'},
                    ],
                    endDate: [
                        { required: true, message: '请选择日期', trigger: 'blur'},
                    ],
                    startTime: [
                        { required: true, message: '请选择时间', trigger: 'blur'},
                    ],
                    endTime: [
                        { required: true, message: '请选择时间', trigger: 'blur'},
                    ],
                },

                startDatePicker: this.beginDate(),
                endDatePicker: this.processDate(),
                completeMessage: '',

                summary: this.summary,
            };
        },
        created() {
            this.form.name = this.message;
            // const now = new Date();
            // const adata = new Date('2019-04-03');
            // const jian = now - adata
            // console.log(jian / (1000 * 60 * 60 * 24));
        },
        methods: {
            beginDate(){
                const self = this;
                return {
                    disabledDate(time){
                        if (self.form.endDate) {  //如果结束时间不为空，则小于结束时间
                            return new Date(self.form.endDate).getTime() < time.getTime()
                        } else {
                            // return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
                        }
                    }
                }
            },
            processDate() {
                const  self = this;
                return {
                    disabledDate(time) {
                        if (self.form.startDate) {  //如果开始时间不为空，则结束时间大于开始时间
                            return new Date(self.form.startDate).getTime() > time.getTime()
                        } else {
                            // return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
                        }
                    }
                }
            },

            formatFn: function(param){
                const day = param.getDate();
                const month = param.getMonth() + 1;
                const year = param.getFullYear();
                return year + '.' + month + '.' + day;
            },

            onSubmit(form) {
                if (this.form.startDate && this.form.endDate && this.form.whichType) {
                    const leaveDays = (this.form.endDate - this.form.startDate) / (1000 * 60 * 60 * 24);

                    this.summary = this.form.name + '于' + this.formatFn(this.form.startDate) + '-' + this.formatFn(this.form.endDate) +
                        '休' +this.form.whichType + leaveDays + '天' + this.form.desc
                }
                // console.log(this.form.name , this.form.endDate, this.form.whichType);
            },
        }
    };

</script>

<style scoped>
    .formDiv{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .el-form{
        width: 50%;
    }

</style>
