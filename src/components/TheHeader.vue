<template>
  <div id="header">
    <div
      class="header-wrapper shadow d-flex justify-content-between align-items-center"
    >
      <!-- search -->
      <div class="header__search center-content">
        <div class="search__input">
          <input type="text" placeholder="Search for..." />
        </div>
        <div class="search__btn">
          <img src="../assets/icons/search.svg" alt="search" />
        </div>
      </div>

      <!-- actions -->
      <div class="header__actions center-content">
        <div class="header__actions__btn d-flex">
          <div class="action__btn">
            <img src="../assets/icons/bell.svg" alt="image" />
          </div>
          <div class="action__btn">
            <img src="../assets/icons/mail.svg" alt="image" />
          </div>
        </div>
        <div class="header__actions__user center-content">
          <div class="user__name">Duc Tien</div>
          <div class="position-relative">
            <img
              class="user__avatar"
              src="../assets/images/myLogo.svg"
              alt="avatar"
            />
            <div class="user__dropdown shadow">
              <div
                v-for="(userItem, index) in userList"
                :key="index"
                class="user-item d-flex align-items-center"
              >
                <img class="user-item__icon" :src="userItem.icon" alt="image" />
                <div class="user-item__title">{{ userItem.title }}</div>
              </div>
              <hr />
              <div
                class="user-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  class="user-item__icon"
                  src="../assets/icons/logout.svg"
                  alt="image"
                />
                <div class="user-item__title">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal logout -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">
              <router-link tag="a" :to="{ name: 'login' }">Logout</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => {
    return {
      userList: [
        {
          icon: require("../assets/icons/icon.svg"),
          title: "Profile"
        },
        {
          icon: require("../assets/icons/icon.svg"),
          title: "Settings"
        },
        {
          icon: require("../assets/icons/icon.svg"),
          title: "Activity Log"
        }
      ]
    };
  }
};
</script>

<style scoped>
hr {
  margin: 6px 0;
}

#header {
  flex: 1;
}
.header-wrapper {
  height: 70px;
  margin-bottom: 24px;
}

/* search */
.header__search {
  margin-left: 30px;
  height: 42px;
}

.search__input {
  height: 100%;
  user-select: none;
}

.search__input input {
  width: 380px;
  font-size: 1.4rem;
  padding: 6px 10px;
  height: 100%;
  border: none;
  color: #6e707e;
  /* border-radius: 1px solid #f8f9fc; */
  background-color: #f1f1f1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 3px solid transparent;
}

.search__input input:focus-visible {
  border: 3px solid #d1d3e2;
  outline: none;
  border-right: transparent;
}

.search__btn {
  padding: 10px;
  background-color: var(--main-color);
  height: 100%;
  aspect-ratio: 1 / 1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}

.search__btn:hover {
  background-color: var(--main-color-hover);
}

.search__btn img {
  width: 100%;
}

/* actions */
.header__actions {
  margin-right: 20px;
}

.header__actions__btn {
  padding-right: 20px;
  margin-right: 10px;
  border-right: 1px solid #ccc;
  user-select: none;
}

.action__btn {
  width: 30px;
  height: 30px;
  aspect-ratio: 1/1;
  padding: 5px;
  border-radius: 999px;
}

.action__btn + .action__btn {
  margin-left: 10px;
}

.action__btn:hover {
  background-color: #f4f4f7;
}

.action__btn img {
  width: 100%;
}

.header__actions__user {
  display: flex;
  padding: 6px 10px;
  cursor: pointer;
}

/* user */
.user__name {
  font-size: 1.3rem;
  color: rgb(141, 125, 125);
  margin-right: 5px;
}

.user__avatar {
  width: 32px;
  height: 32px;
  border-radius: 999px;
}

.user__dropdown {
  position: absolute;
  background-color: #fff;
  top: 160%;
  right: 0;
  width: 180px;
  padding: 8px 0;
}

.user-item {
  color: #3a3b45;
  width: 100%;
  padding: 10px 26px;
}

.user-item:hover {
  background-color: rgb(240, 240, 240);
}

.user-item__icon {
  width: 18px;
}

.user-item__title {
  font-size: 1.4rem;
  margin-left: 10px;
}

/* modal */
.modal-content {
  color: #858796;
}

.modal-title {
  font-size: 2rem;
}

.modal-body {
  font-size: 1.6rem;
}

.btn {
  border-radius: 8px;
  font-size: 1.6rem;
  padding: 5px 15px;
}
</style>
