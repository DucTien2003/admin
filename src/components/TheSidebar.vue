<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <router-link
          tag="a"
          :to="{ name: 'default-layout' }"
          class="logo__link center-content"
        >
          <img src="../assets/images/myLogo.svg" alt="Logo" />
          <span>DucTien</span>
        </router-link>
        <hr />
        <div
          v-for="(sidebarItem, index) in sidebarList"
          :key="index"
          class="sidebar-item"
        >
          <div v-if="sidebarItem.heading" class="sidebar-item__heading">
            {{ sidebarItem.heading }}
          </div>
          <div
            v-for="(innerItem, index) in sidebarItem.inner"
            class="sidebar-item__inner"
          >
            <component
              :is="!innerItem.dropdown ? 'router-link' : 'div'"
              :to="{ name: 'default-layout' }"
              :key="index"
              class="inner-item d-flex align-items-center"
            >
              <div class="inner-item-container d-flex align-items-center">
                <img
                  :src="innerItem.linkIcon"
                  alt="Image"
                  class="inner-item__icon"
                />
                <div class="inner-item__content">
                  {{ innerItem.content }}
                </div>
              </div>
              <div v-if="!!innerItem.dropdown">
                <img
                  class="inner-item__arrow"
                  src="../assets/icons/arrow-right.svg"
                  alt="image"
                />
                <div class="inner-item__dropdown"></div>
              </div>
            </component>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      sidebarList: [
        {
          heading: "",
          inner: [
            {
              linkIcon: require("../assets/icons/search.svg"),
              content: "Dashboard"
            }
          ]
        },
        {
          heading: "INTERFACE",
          inner: [
            {
              linkIcon: require("../assets/icons/search.svg"),
              content: "Ultilities",
              dropdown: {
                heading: "custom untilities:",
                children: ["Borders", "Colors"]
              }
            },
            {
              linkIcon: require("../assets/icons/search.svg"),
              content: "Components"
            }
          ]
        },
        {
          heading: "ADDONS",
          inner: [
            {
              linkIcon: require("../assets/icons/search.svg"),
              content: "Tables"
            }
          ]
        }
      ]
    };
  },
  computed: {
    takeLinkIcon: link => {
      return require(link);
    }
  }
};
</script>
<style scoped>
hr {
  margin: 0;
  border-top: 1px solid rgb(231, 223, 223);
}

#sidebar {
  height: 100%;
  width: 224px;
  background-color: var(--main-color);
  font-size: 1.4rem;
}

.sidebar-wrapper {
  padding: 0 20px;
}

.logo__link {
  color: white;
  font-size: 2.8rem;
  padding: 10px;
  user-select: none;
}

.logo__link img {
  width: 50px;
  margin-right: 15px;
}

.logo__link span {
  color: white;
}

.sidebar-item {
  color: rgba(255, 255, 255, 0.9);
}

.sidebar-item__heading {
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.4);
}

.inner-item {
  padding: 16px 0;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.inner-item:hover {
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
}

.inner-item-container {
  flex: 1;
}

.inner-item__icon {
  width: 15px;
  margin-right: 5px;
}

.inner-item__arrow {
  width: 16px;
}
</style>
