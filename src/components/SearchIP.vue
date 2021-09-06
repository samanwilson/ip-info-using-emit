<template>
  <div class="search"></div>
  <div class="input-group">
    <input
      type="search"
      class="form-control"
      placeholder="Example : 1.1.1.1"
      v-model="QIP"
    />
    <button class="btn btn-success" @click="GetQ(this.QIP)">Search</button>
  </div>
  <br />
  <div class="Search-Results-Wrapper">
    <div class="Search-Results">
      <div class="d-flex">
        <h4 class="text-white">{{ FQ.ip }}</h4>
        <span class="h4 text-white ms-4"> {{ FQ.organization }}</span>
      </div>
      <div class="Info row Text-Green">
        <div class="col-md-6">
          <span class="me-3"> City: {{ FQ.city }}</span>
          <span>Country: {{ FQ.country_name }}</span>
        </div>
        <div class="col-md-6">
          <span class="me-3"> postal code:{{ FQ.zipcode }}</span>
          <span>location:{{ FQ.district }}</span>
        </div>
      </div>
      <br />
      <button class="btn btn-success" @click="GetR(FQ)">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchIP",
  emits: ["SendQ", "SendR"],
  data() {
    return {
      QIP: "",
    };
  },
  methods: {
    GetQ(query) {
      this.$emit("SendQ", query);
    },
    GetR(FQ) {
      this.$emit("SendR", FQ);
    },
  },
  props: ["FQ"],
};
</script>

<style>
.Search-Results-Wrapper {
  border-radius: 10px;
  background-color: gray;
  text-align: left !important;
  padding: 30px;
}

.Text-Green {
  color: #20c997;
}
</style>
