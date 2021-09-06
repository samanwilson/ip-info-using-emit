<template>
  <div class="Records">
    <div class="Search-Results-Wrapper">
      <h2 class="text-white text-center mb-3">Records</h2>
      <div class="Search-Results mb-4" v-for="item in Rec" :key="item.id">
        <div class="d-flex">
          <h4 class="text-white">{{ item.ip }}</h4>
          <span class="h4 text-white ms-4"> {{ item.organization }}</span>
        </div>
        <div class="Info row Text-Green">
          <div class="col-md-6">
            <span class="me-3"> City: {{ item.city }}</span>
            <span>Country: {{ item.country_name }}</span>
          </div>
          <div class="col-md-6">
            <span class="me-3"> postal code:{{ item.zipcode }}</span>
            <span>location:{{ item.district }}</span>
          </div>
        </div>
        <br />
        <button class="btn btn-danger" @click="DelR(item.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Records",
  props: ["Rec"],
  emits: ["DeleteRecord"],
  methods: {
    DelR(Id) {
      this.$emit("DeleteRecord", Id);
    },
  },
};
</script>

<style scoped></style>
