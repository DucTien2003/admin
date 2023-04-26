<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="addUserModal"
    tabindex="-1"
    aria-labelledby="addUserModalLabel"
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
            @click="() => resetInputValue()"
          ></button>
        </div>
        <div class="modal-body d-flex flex-wrap align-items-center">
          <div
            v-for="(formItem, index) in modalAddUser"
            class="form-item required col-md-6 d-flex flex-column position-relative"
            :key="index"
          >
            <!-- label -->
            <label class="f-w-700" :for="formItem.id">
              <span v-if="formItem.required">*</span> {{ formItem.label }}
              <span
                v-if="formItem.required"
                class="warning-text fw-normal"
                :class="formItem.isWarning ? 'd-inline-block' : 'd-none'"
                >{{ formItem.condition || "Trường này là bắt buộc" }}</span
              >
            </label>

            <!-- input -->
            <input
              class="form-control"
              :class="formItem.isWarning ? 'warning' : ''"
              :id="formItem.id"
              :type="formItem.type"
              :placeholder="formItem.placeholder"
              v-model="formItem.value"
            />

            <!-- toggle-visible for password -->
            <div
              v-if="formItem.isVisible !== undefined"
              class="toggle-visible"
              @click="
                () => {
                  changeVisiblePassword(formItem);
                }
              "
            >
              <img
                v-if="formItem.isVisible"
                src="../../assets/icons/eye-open.svg"
                alt="image"
              />
              <img v-else src="../../assets/icons/eye-closed.svg" alt="svg" />
            </div>
          </div>
          <div class="check-admin form-item col-md-6 d-flex align-items-center">
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
            @click="() => resetInputValue()"
          >
            Thoát
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="() => handleAddUser()"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
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
          isWarning: false,
          isVisible: false
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
      }
    };
  },
  props: ["addUser"],
  methods: {
    addZero(number) {
      return number < 10 ? "0" + number : number;
    },
    getTime() {
      let cd = new Date();
      let getDate = this.addZero(cd.getDate());
      let getMonth = this.addZero(cd.getMonth() + 1);
      let getFullYear = cd.getFullYear();
      let getHours = this.addZero(cd.getHours());
      let getMinutes = this.addZero(cd.getMinutes());

      return `${getDate}/${getMonth}/${getFullYear} ${getHours}:${getMinutes}`;
    },
    checkEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    resetNewUser() {
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
    },
    removeWarning() {
      for (var modalAddUserItem of this.modalAddUser) {
        modalAddUserItem.isWarning = false;
      }
    },
    resetInputValue() {
      for (var modalAddUserItem of this.modalAddUser) {
        modalAddUserItem.value = "";
      }
      this.removeWarning();
    },
    handleAddUser() {
      let isWarning = false;
      for (var modalAddUserItem of this.modalAddUser) {
        if (
          !modalAddUserItem.value ||
          (["account", "password"].includes(modalAddUserItem.id) &&
            modalAddUserItem.value.length < 6) ||
          (modalAddUserItem.id === "email" &&
            !this.checkEmail(modalAddUserItem.value))
        ) {
          modalAddUserItem.isWarning = true;
          isWarning = true;
        } else {
          modalAddUserItem.isWarning = false;
        }
      }

      if (!isWarning) {
        this.newUser.time = this.getTime();
        for (var modalAddUserItem of this.modalAddUser) {
          this.newUser[modalAddUserItem.id] = modalAddUserItem.value;
        }
        this.addUser(this.newUser);

        this.resetNewUser();

        this.resetInputValue();
      }
    },
    changeVisiblePassword(formItem) {
      formItem.isVisible = !formItem.isVisible;
      formItem.type === "text"
        ? (formItem.type = "password")
        : (formItem.type = "text");
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

.modal-body {
  padding-bottom: 30px;
  user-select: none;
}

.warning-text {
  margin-left: 10px;
}

.warning {
  border-color: red;
}

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

.toggle-visible {
  position: absolute;
  right: 10px;
  top: 23px;
  padding: 3px 8px;
  cursor: pointer;
}

.toggle-visible img {
  width: 20px;
}

.modal-footer button {
  padding: 3px 15px;
  font-size: 14px;
  margin-left: 10px;
}
</style>
