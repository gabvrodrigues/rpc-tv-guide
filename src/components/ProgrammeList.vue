<template>
  <div class="programmeList position-absolute" v-if="programmeList.length > 0">
    <div
      v-for="(programme, index) in programmeList"
      :key="index"
      :id="`card-${programme.media_id}`"
      class="programme-card row"
    >
      <div class="programmeStartTime col-3">
        <img :src="programme.custom_info.Graficos.LogoURL" alt="" />
        <span>{{ getStartTimeFormatted(programme.start_time) }}</span>
        <div
          v-if="liveProgramme && liveProgramme.media_id === programme.media_id"
          class="liveProgramme"
        >
          <span><i class="fas fa-circle"></i> AO VIVO</span>
        </div>
      </div>
      <div class="programmeInfo col-9">
        <span>{{ programme.title }} </span>
        <span>{{ programme.custom_info.Genero.Descricao }} </span>
        <span>{{ programme.description }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'ProgrammeList',
	props: {
		programmeList: Array,
		date: String,
	},
	data() {
		return {
			liveProgramme: null,
		};
	},
	computed: {},
	methods: {
		getStartTimeFormatted(startTime) {
			return moment.unix(startTime).format('HH:mm');
		},
		scrollToLiveProgramme() {
			document
				.getElementById(`card-${this.liveProgramme.media_id}`)
				.scrollIntoView();
		},
		getProgrammeLive() {
			this.liveProgramme = this.programmeList.find(
				(programme) => moment().format('YYYY-MM-DD HH:mm')
            > moment.unix(programme.start_time).format('YYYY-MM-DD HH:mm')
          && moment().format('YYYY-MM-DD HH:mm')
            < moment.unix(programme.end_time).format('YYYY-MM-DD HH:mm'),
			);
			if (this.liveProgramme) {
				this.scrollToLiveProgramme();
			} else {
				document
					.getElementById(`card-${this.programmeList[0].media_id}`)
					.scrollIntoView();
			}
		},
	},
	updated() {
		this.getProgrammeLive();
	},
};
</script>

<style scoped>
.programmeList {
  width: 100%;
}
.programme-card {
  display: flex;
  background: #e4e4e4;
  padding: 15px 30px;
  height: 24vh;
  justify-content: center;
  margin: 15px;
  border-radius: 5px;
}
.programmeStartTime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px;
}
.programmeStartTime > img:first-child {
  border-radius: 5px;
}
.programmeStartTime > span:last-child {
  font-size: 20px;
}

.programmeInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.programmeInfo > span:first-child {
  font-size: 1.4em;
  font-weight: bold;
}
.programmeInfo > span:nth-child(2) {
  font-size: 0.8em;
  color: grey;
  margin-bottom: 5px;
}
.programmeInfo > span:last-child {
  font-size: 1em;
}
.liveProgramme {
  margin-top: 10px;
  background: red;
  padding: 5px;
  font-size: 0.8em;
  border-radius: 5px;
  color: #fff;
}

@media (max-width: 992px) {
  .programmeInfo {
    font-size: 12px;
  }
  .liveProgramme {
    font-size: 0.6em;
  }
}
</style>
