<template>
  <div id="NavBarMain">
    <div id="top" class="m-lg-3 d-flex justify-content-lg-start align-items-center">
      <img src="../assets/logo-top.png" alt="" class="img-fluid img-top">
      <p class="h3 m-lg-1">Admin Map</p>


    </div>
    <div class="mt-5">

      <p class="h6 active mr-4"> <i class="fa fa-list"></i> Lớp bản đồ</p>
    </div>
    <vue-tree-navigation :items="items">
    </vue-tree-navigation>
  </div>
</template>

<script>
export default {
  name: 'NavBarMain',
  data() {
    return {
      items: [
        {
          name: 'Bản đồ GIS Giao thông', children: [
            {
              name: 'Hiện trạng', children: [
                { name: 'Hạ tầng bến bãi', href: '#' },
                { name: 'Trạm xe buýt', href: '#' },
                { name: 'Tuyến xe buýt', href: '#' },
                {
                  name: 'Giao thông đường bộ', href: '#'
                }
              ]
            }
          ]
        },
        {
          name: 'Quy hoạch', href: '#', children: [
            {
              name: 'Quy hoạch bến, bãi', href: '#'
            }
          ]
        }
      ],
    }
  }
}
</script>

<style scoped>
.img-top {
  width: 65px;
}

.mr-4 {
  margin-left: 1em;
}
</style>