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
        <!-- sidebar content -->
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
            :key="index"
          >
            <component
              :is="!innerItem.dropdown ? 'router-link' : 'div'"
              :to="{ name: 'default-layout' }"
              :key="index"
              class="inner-item flex-column"
              @click="innerItem.dropdown.isShow = !innerItem.dropdown.isShow"
            >
              <div class="inner-item-wrapper d-flex align-items-center">
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
                </div>
              </div>
              <!-- dropdown -->
              <div v-if="!!innerItem.dropdown && innerItem.dropdown.isShow">
                <div class="inner-item__dropdown">
                  <div class="dropdown-item__heading">
                    {{ innerItem.dropdown.heading }}
                  </div>
                  <router-link
                    v-for="(dropdownItem, index) in innerItem.dropdown.children"
                    tag="a"
                    :to="{ name: 'default-layout' }"
                    :key="index"
                    class="dropdown-item__content"
                    >{{ dropdownItem }}</router-link
                  >
                </div>
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
              linkIcon: require("../assets/icons/icon.svg"),
              content: "Dashboard"
            }
          ]
        },
        {
          heading: "INTERFACE",
          inner: [
            {
              linkIcon: require("../assets/icons/icon.svg"),
              content: "Ultilities",
              dropdown: {
                isShow: false,
                heading: "custom untilities:",
                children: ["Borders", "Colors"]
              }
            },
            {
              linkIcon: require("../assets/icons/icon.svg"),
              content: "Components"
            }
          ]
        },
        {
          heading: "ADDONS",
          inner: [
            {
              linkIcon: require("../assets/icons/icon.svg"),
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
  min-height: 100vh;
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
  color: rgba(255, 255, 255, 0.7);
}

.inner-item-wrapper {
  padding: 16px 0;
  cursor: pointer;
}

.inner-item-wrapper:hover {
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

.inner-item__dropdown {
  background-color: white;
  color: #404049;
  font-size: 1.4rem;
  border-radius: 6px;
  padding: 8px;
}

.dropdown-item__heading {
  color: #b7b9cc;
  font-weight: 600;
  padding: 8px 16px;
}

.dropdown-item__content {
  width: 100%;
  padding: 8px 16px;
}

.dropdown-item__content:hover {
  background-color: #eaecf4;
  border-radius: 6px;
}
</style>
