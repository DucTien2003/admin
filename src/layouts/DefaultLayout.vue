<template>
  <div id="wrapper">
    <div class="main">
      <TheSidebar />
      <div class="content d-flex flex-column">
        <TheHeader />
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
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

.content {
  flex: 1;
}
</style>
