<template>
  <div id="app" class="row">
    <NavBarMain class="col-3 ">
      <Geo class="col-md-9"></Geo>
    </NavBarMain>
    <router-view />
  </div>
</template>
<script>
import NavBarMain from './components/NavBarMain.vue';
import Geo from './views/Geo.vue'
export default {
  name: 'App',
  components: {
    NavBarMain,
    Geo
  }
}
</script>
<style>

</style>
