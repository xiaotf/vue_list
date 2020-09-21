<template>
<div>
    <Navherader/>
    <router-view></router-view>
    <Navfooter/>
</div>
</template>

<script>
import Navherader from '@/components/Navheader';
import Navfooter from '@/components/Navfooter';
export default {
  data(){
    return{}
  },
  components:{
    Navherader,
    Navfooter
  }
}
</script>

<style>

</style>