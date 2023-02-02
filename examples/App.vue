<template>
  <div id="app">
    <div style="height:100px; width: 100%;"></div>
    <LicensePlate :borderRadius="6"
                  @change="changeVal"
                  v-model="licensePlate"
                  :autoShow="false"></LicensePlate>
    <div style="height:100px; width: 100%;"></div>
    <!-- <LicensePlate :borderRadius="4"
                  @change="changeVal"
                  v-model="licensePlate"
                  borderColor="red"
                  borderActiveColor="green"></LicensePlate> -->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      licensePlate: ""
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    changeVal (val) {
      console.log(val)
    }
  }
}
</script>

<style>
#app .btn {
  width: 80px;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  color: #333;
  display: inline-block;
  margin-right: 20px;
}
.box {
  display: flex;
  margin-top: 20px;
}
.item {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #959595;
}
</style>
