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

    <Modal :modalList="modalAddUser" :newUser="newUser"></Modal>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
export default {
  name: "users",
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
  components: {
    Modal
  }
};
</script>
<style scoped>
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
</style>
