<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <router-link
          tag="a"
          :to="{ name: 'dashboard' }"
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
              :to="{ name: innerItem.to }"
              :key="index"
              class="inner-item flex-column"
            >
              <div
                class="inner-item-wrapper d-flex align-items-center"
                @click="handleShowDropdown(innerItem)"
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
                    :to="{ name: dropdownItem.to }"
                    :key="index"
                    class="dropdown-item__content"
                    >{{ dropdownItem.content }}</router-link
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
              content: "Dashboard",
              to: "dashboard"
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
                children: [
                  {
                    content: "Borders",
                    to: "borders"
                  },
                  {
                    content: "Colors",
                    link: "../views/utilities/Colors.vue",
                    to: "colors"
                  }
                ]
              }
            },
            {
              linkIcon: require("../assets/icons/icon.svg"),
              content: "User",
              to: "users"
            }
          ]
        },
        {
          heading: "ADDONS",
          inner: [
            {
              linkIcon: require("../assets/icons/icon.svg"),
              content: "tablets",
              to: "tablets"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleShowDropdown(item) {
      item.dropdown ? (item.dropdown.isShow = !item.dropdown.isShow) : "";
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
  /* height: 100%; */
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
  width: 100%;
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
  color: rgb(85, 85, 235);
  background-color: #eaecf4;
  border-radius: 6px;
  font-weight: 700;
}
</style>
