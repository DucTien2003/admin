<template>
  <div v-if="data.isShow" id="dropdown" class="d-flex flex-column shadow">
    <div class="heading">{{ data.heading }}</div>
    <div class="wrapper d-flex flex-column center-content">
      <div
        v-for="(item, index) in data.list"
        :key="index"
        class="item center-content"
      >
        <div class="image center-content">
          <img src="../assets/icons/document.svg" alt="image" />
        </div>
        <div
          class="item-container d-flex justify-content-between"
          :class="data.isReverse ? 'flex-column-reverse' : 'flex-column'"
        >
          <div class="time">{{ item.time }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["data"],
  methods: {}
};
</script>
<style scoped>
#dropdown {
  position: absolute;
  top: 170%;
  right: 0;
  width: 320px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  z-index: 1000;
}

.heading {
  background-color: #4e73df;
  border: 1px solid #4e73df;
  padding: 12px 24px;
  color: #fff;
}

.item {
  padding: 8px 24px;
  cursor: pointer;
}

.item:hover {
  background-color: #eaecf4;
}

.item + .item {
  border-top: 1px solid #e3e6f0;
}

.image {
  padding: 11px 12px;
  border-radius: 999px;
  background-color: rgb(78, 122, 223);
  margin-right: 16px;
  height: 40px;
}

.image img {
  width: 16px;
  height: 16px;
}

.time {
  color: #b7b9cc;
  line-height: 22px;
}

.content {
  line-height: 20px;
  color: #3a3b45;
  font-size: 1.2rem;
}
</style>
