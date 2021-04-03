<template>
  <div id="body">
    <div class="row ">
      <DaySelector @onChangeDate="changeDate"/>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6 p-0" >
      <Programme :programme="liveProgramme"/>
      </div>
      <div class="col-sm-12 col-lg-6 p-0 overflow-auto">
        <ProgrammeList :programmeList="programmeList" :date="selectedDate"/>
      </div>
    </div>
	</div>
</template>

<script>
import moment from 'moment';
import DaySelector from './DaySelector.vue';
import Programme from './Programme.vue';
import ProgrammeList from './ProgrammeList.vue';

export default {
	name: 'Body',
	components: {
		DaySelector,
		Programme,
		ProgrammeList,
	},
	data() {
		return {
			selectedDate: null,
			programmeList: [],
			liveProgramme: null,
		};
	},
	mounted() {
		this.selectedDate = moment().format('YYYY-MM-DD');
		this.getProgrammeData();
	},
	methods: {
		getProgrammeData() {
			this.axios
				.get(`programmes/${process.env.VUE_APP_RPC_ID}?date=${this.selectedDate}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((response) => {
					this.programmeList = response.data.programme.entries;
					this.liveProgramme = this.programmeList.find((programme) => moment().format('YYYY-MM-DD HH:mm') > moment.unix(programme.start_time).format('YYYY-MM-DD HH:mm')
      && moment().format('YYYY-MM-DD HH:mm') < moment.unix(programme.end_time).format('YYYY-MM-DD HH:mm')) || this.programmeList[0];
				}).catch((error) => {
					console.log(error);
				});
		},
		changeDate(date) {
			this.selectedDate = date.format('YYYY-MM-DD');
			this.getProgrammeData();
		},
	},
};
</script>

<style scoped>
#body {
  padding: 0 7vw;
	display: flex;
  flex-direction: column;
}

@media (max-width: 992px){
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
      min-height: 600px;
  }
}

</style>
