<template>
  <div class="home container">
    <div class="row">
      <h2>Search your prefered IP</h2>
    </div>
    <br />
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <Search
          @SendQ="FetchIP($event)"
          :FQ="FetchedData"
          @SendR="SaveToRecords($event)"
        ></Search>
      </div>
    </div>
    <br />
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <Records
          :Rec="Record"
          @DeleteRecord="DeleteRecordById($event)"
        ></Records>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIP from "../components/SearchIP";
import Records from "../components/Records";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      FetchedData: "",
      Record: [],
    };
  },
  components: {
    Search: SearchIP,
    Records: Records,
  },
  methods: {
    async FetchIP(data) {
      axios
        .get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=4f8b951709164395b8a440eff347f687&ip=${data}`
        )
        .then((res) => {
          this.FetchedData = res.data;
          console.log(this.FetchedData);
        });
    },
    SaveToRecords(data) {
      this.Record.push(data);
      console.log(this.Record);
    },
    DeleteRecordById(Id) {
      const selected = this.Record.indexOf(Id);

      this.Record.splice(selected, 1);
    },
  },
};
</script>
