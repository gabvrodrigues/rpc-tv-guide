<template>
  <div class="programme" v-if="programme">
    <div
      class="image"
      :style="{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.22),
         rgba(25, 61, 109, 0.98)),
        url(${programme.custom_info.Graficos.ImagemURL})`,
      }"
    >
      <div class="programmeInfo">
        <img :src="programme.custom_info.Graficos.LogoURL" alt="" />
        <div class="programmeTitleDescription">
          <div class="title">
            {{ programme.title.toUpperCase() }}
          </div>
          <div class="description">
            {{ programme.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'Programme',
	props: {
		programme: Object,
	},
	computed: {
		getProgrammeStartTime() {
			return moment(this.programme.start_time).format('hh:mm');
		},
	},
};
</script>

<style scoped>
.programme {
  width: 100%;
}
.image {
  margin-top: 20px;
  width: 100%;
  height: 700px;
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
}
.programmeInfo {
  position: absolute;
  left: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.programmeInfo > img {
  width: 100px;
  border-radius: 50px;
}
.title {
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
}
.description {
  margin: 0 20px;
}
</style>
