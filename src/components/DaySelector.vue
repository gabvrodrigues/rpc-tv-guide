<template>
  <fixed-header>
    <div id="daySelector" class="navbar">
      <div class="daySelectorArea">
        <button :disabled="canBackDate" @click="changeDay(-1)">
          <i class="fas fa-angle-left" />
        </button>
        <span>{{ selectedDayFormatted }}</span>
        <button :disabled="canNextDate" @click="changeDay(1)">
          <i class="fas fa-angle-right" />
        </button>
      </div>
    </div>
  </fixed-header>
</template>

<script>
import moment from 'moment';
import FixedHeader from 'vue-fixed-header';

export default {
	name: 'DaySelector',
	components: {
		FixedHeader,
	},
	data() {
		return {
			selectedDay: null,
		};
	},
	mounted() {
		this.selectedDay = moment();
	},
	computed: {
		selectedDayFormatted() {
			return moment(this.selectedDay)
				.locale('pt-br')
				.format('ddd[,] D [ de] MMMM')
				.toUpperCase();
		},
		canBackDate() {
			if (this.selectedDay) {
				return (
					this.selectedDay.format('YYYY-MM-DD')
          < moment().add(-5, 'd').format('YYYY-MM-DD')
				);
			}
			return false;
		},
		canNextDate() {
			if (this.selectedDay) {
				return (
					this.selectedDay.format('YYYY-MM-DD')
          > moment().add(5, 'd').format('YYYY-MM-DD')
				);
			}
			return false;
		},
	},
	methods: {
		changeDay(index) {
			this.selectedDay = moment(this.selectedDay).add(index, 'd');
			this.$emit('onChangeDate', this.selectedDay);
		},
	},
};
</script>

<style scoped>
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
#daySelector {
  z-index: 1000;
  background: #fff;
  width: 100%;
  /* margin: 20px 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.daySelectorArea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
}
.daySelectorArea > button {
  color: #305d95;
  font-size: 30px;
  border: 0;
  background: transparent;
}
.daySelectorArea > button:disabled {
  opacity: 0.4;
}
</style>
