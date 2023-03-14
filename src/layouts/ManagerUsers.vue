<template>
  <div id="manager-user">
    <div class="wrapper">
      <header class="header d-flex align-items-center justify-content-between">
        <div class="header__title f-w-700">Người dùng hệ thống</div>
        <button
          class="btn btn-primary add-user-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Thêm người dùng
        </button>
      </header>
      <div class="main">
        <!-- filter -->
        <div class="filter d-flex">
          <input
            class="form-control"
            type="text"
            placeholder="Tìm kiếm theo tên và tài khoản"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Nhóm người dùng"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Cơ cấu tổ chức"
          />
        </div>

        <!-- list users -->
        <table class="users">
          <tr class="title f-w-700">
            <th class="col-md-1">STT</th>
            <th class="col-md-2">Họ và tên</th>
            <th class="col-md-2">Tài khoản</th>
            <th class="col-md-2">Nhóm người dùng</th>
            <th class="col-md-2">Tổ chức</th>
            <th class="col-md-2">Thời gian cập nhập</th>
            <th class="col-md-1">Hành động</th>
          </tr>

          <tr v-for="(user, index) in users" :key="index" class="user-item">
            <td class="">{{ index + 1 }}</td>
            <td class="">{{ user.name }}</td>
            <td class="">{{ user.account }}</td>
            <td class="">{{ user.group }}</td>
            <td class="">{{ user.organize }}</td>
            <td class="">{{ user.time }}</td>
            <td class="d-flex align-item-center">
              <img
                class="action-icon"
                src="../assets/icons/pen.svg"
                alt="icon"
              />
              <img
                class="action-icon"
                src="../assets/icons/lock.svg"
                alt="icon"
              />
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  :checked="user.isAdmin"
                />
              </div>
            </td>
          </tr>
        </table>

        <!-- <div class="text-end">
          <p>1-10 trong {{ users.length }} bản ghi</p>
          <div class="pagination">
            <div>
              <img src="../assets/icons/arrow-left-pagination.svg" alt="icon" />
            </div>
            <div>
              <img
                src="../assets/icons/arrow-right-pagination.svg"
                alt="icon"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Modal -->
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
            <h5 class="f-w-700">Thêm người dùng</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-wrap align-items-center">
            <div
              v-for="(formItem, index) in modalAddUser"
              class="form-item required col-md-6 d-flex flex-column"
              :key="index"
            >
              <label class="f-w-700" :for="formItem.id">
                <span v-if="formItem.required">*</span> {{ formItem.label }}
                <span
                  v-if="formItem.required"
                  class="warning-text fw-normal"
                  :class="formItem.isWarning ? 'd-inline-block' : 'd-none'"
                  >{{ formItem.condition || "Trường này là bắt buộc" }}</span
                >
              </label>
              <input
                class="form-control"
                :class="formItem.isWarning ? 'warning' : ''"
                :id="formItem.id"
                :type="formItem.type"
                :placeholder="formItem.placeholder"
                v-model="formItem.value"
              />
            </div>
            <div
              class="check-admin form-item col-md-6 d-flex align-items-center"
            >
              <input
                class="form-check-input"
                id="is-admin"
                type="checkbox"
                v-model="newUser.isAdmin"
              />
              <label class="f-w-700" for="is-admin">
                Là Super Admin
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Thoát
            </button>
            <button type="button" class="btn btn-primary" @click="addUser()">
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "manager-users",
  data() {
    return {
      users: [
        {
          name: "Lê Đức Tiến",
          account: "ductien123",
          password: "password123",
          email: "ductien123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 1",
          time: "04/10/2022 15:03",
          isAdmin: true
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        },
        {
          name: "Nguyễn văn A",
          account: "nguyenvana123",
          password: "password123",
          email: "nguyenvana123@gmail.com",
          phone: "",
          group: "nhóm 1",
          organize: "tổ chức 2",
          time: "06/01/2022 04:35",
          isAdmin: false
        }
      ],
      newUser: {
        name: "",
        account: "",
        password: "",
        email: "",
        phone: "",
        group: "",
        organize: "",
        time: "",
        isAdmin: false
      },
      modalAddUser: [
        {
          value: "",
          id: "name",
          label: "Họ và tên",
          placeholder: "Nhập họ và tên...",
          type: "text",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "account",
          label: "Tài khoản",
          placeholder: "Nhập tên tài khoản...",
          type: "text",
          condition: "Tài khoản tối thiểu 6 ký tự",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "password",
          label: "Mật khẩu",
          placeholder: "Nhập mật khẩu...",
          type: "password",
          condition: "Mật khẩu tối thiểu 6 ký tự",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "email",
          label: "Email",
          placeholder: "Nhập email...",
          type: "email",
          condition: "Email không hợp lệ",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "phone",
          label: "Số điện thoại",
          placeholder: "Nhập số điện thoại...",
          type: "number",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "organize",
          label: "Tổ chức",
          placeholder: "Cơ cấu tổ chức...",
          type: "text",
          required: true,
          isWarning: false
        },
        {
          value: "",
          id: "group",
          label: "Nhóm người dùng",
          placeholder: "Nhóm người dùng...",
          type: "text",
          required: true,
          isWarning: false
        }
      ]
    };
  },
  methods: {
    addUser() {
      let isWarning = false;
      for (var modalAddUserItem of this.modalAddUser) {
        if (!modalAddUserItem.value) {
          modalAddUserItem.isWarning = true;
          isWarning = true;
        } else if (
          modalAddUserItem.id === "account" &&
          modalAddUserItem.value.length < 6
        ) {
          modalAddUserItem.isWarning = true;
        } else if (
          modalAddUserItem.id === "password" &&
          modalAddUserItem.value.length < 6
        ) {
          modalAddUserItem.isWarning = true;
        } else if (
          modalAddUserItem.id === "email" &&
          !modalAddUserItem.value
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
          modalAddUserItem.isWarning = true;
        } else {
          modalAddUserItem.isWarning = false;
        }
      }

      if (!isWarning) {
        let cd = new Date();
        function addZero(number) {
          if (number < 10) {
            return "0" + number;
          } else {
            return number;
          }
        }
        this.newUser.time = `${addZero(cd.getDate())}/${addZero(
          cd.getMonth() + 1
        )}/${cd.getFullYear()} ${addZero(cd.getHours())}:${addZero(
          cd.getMinutes()
        )}`;

        for (var modalAddUserItem of this.modalAddUser) {
          this.newUser[modalAddUserItem.id] = modalAddUserItem.value;
        }
        this.users.unshift(this.newUser);

        this.newUser = {
          name: "",
          account: "",
          password: "",
          email: "",
          phone: "",
          group: "",
          organize: "",
          time: "",
          isAdmin: false
        };

        for (var modalAddUserItem of this.modalAddUser) {
          modalAddUserItem.value = "";
        }
      }
    }
  }
};
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
/* Hide Arrows From Input Number */

.wrapper {
  font-size: 14px;
}

.header {
  padding: 10px 15px;
  border-bottom: 1px solid rgb(231, 213, 213);
}

.header__title {
  font-size: 16px;
}

.add-user-btn {
  font-size: 14px;
  background-color: #0d6efd;
  padding: 6px 10px;
  border-radius: 3px;
}

.main {
  padding: 15px;
}

.filter input {
  width: 220px;
  font-size: 14px;
  margin-right: 20px;
}

.users {
  width: 100%;
  margin-top: 10px;
}

tr {
  border-bottom: 1px solid rgb(231, 213, 213);
}

td {
  padding: 10px 0;
}

td,
th {
  padding-left: 5px;
  padding-right: 5px;
}

tr.title {
  line-height: 36px;
  background-color: #ececec;
}

.warning-text {
  margin-left: 10px;
}

.warning {
  border-color: red;
}

.action-icon {
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
}

.action-icon:hover {
  background-color: #e9e6e6;
}

/* modal */
.modal-dialog {
  max-width: 100%;
  width: 60%;
}

.modal-header {
  font-size: 14px;
}

.form-item {
  font-size: 12px;
  padding: 0 10px;
  margin-top: 15px;
}

.form-item label span {
  color: red;
}

.form-item input {
  font-size: 13px;
}

.check-admin {
  margin-top: 32px;
}

.check-admin input {
  font-size: 16px;
  margin-right: 5px;
  margin-top: 0;
}

.form-control {
  margin-top: 10px;
}

.modal-footer button {
  padding: 3px 15px;
  font-size: 14px;
  margin-left: 10px;
}
</style>
