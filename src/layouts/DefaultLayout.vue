<template>
  <div id="wrapper">
    <div class="main">
      <TheSidebar />
      <TheHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheSidebar from "../components/TheSidebar.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheSidebar
  }
};
</script>
<style scoped>
.main {
  display: flex;
}
</style>
