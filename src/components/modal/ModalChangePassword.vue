<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="changePasswordModal"
    tabindex="-1"
    aria-labelledby="changePasswordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="f-w-700">Đổi mật khẩu</h5>
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
            v-for="(formItem, index) in modalChangePassword"
            class="form-item required col-md-12 d-flex flex-column position-relative"
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
              v-if="formItem.type !== undefined"
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
            @click="
              event => {
                handleChangePassword(event);
              }
            "
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: ["changePassword"],
  data() {
    return {
      modalChangePassword: [
        {
          value: "",
          id: "change-password",
          label: "Mật khẩu mới",
          placeholder: "Nhập mật khẩu mới...",
          type: "password",
          condition: "Mật khẩu tối thiểu 6 ký tự",
          required: true,
          isWarning: false,
          isVisible: false
        },
        {
          value: "",
          id: "confirm-password",
          label: "Xác nhận mật khẩu",
          placeholder: "Nhập lại mật khẩu mới...",
          type: "password",
          condition: "Mật khẩu nhập lại không hợp lệ",
          required: true,
          isWarning: false,
          isVisible: false
        }
      ],
      newPassword: ""
    };
  },
  methods: {
    handleChangePassword(event) {
      const password = this.modalChangePassword[0];
      const confirmPassword = this.modalChangePassword[1];
      let isWarning = false;

      if (password.value.length < 6) {
        password.isWarning = true;
        isWarning = true;
      } else {
        password.isWarning = false;
      }

      if (
        confirmPassword.value.length < 6 ||
        password.value !== confirmPassword.value
      ) {
        confirmPassword.isWarning = true;
        isWarning = true;
      } else {
        confirmPassword.isWarning = false;
      }

      if (isWarning) {
        event.stopPropagation();
      } else {
        this.changePassword(password.value);
        console.log("changePassword");
      }
    },
    removeWarning() {
      for (var modalAddUserItem of this.modalAddUser) {
        modalAddUserItem.isWarning = false;
      }
    },
    resetInputValue() {
      const password = this.modalChangePassword[0];
      const confirmPassword = this.modalChangePassword[1];

      password.value = "";
      confirmPassword.value = "";
      password.isWarning = false;
      confirmPassword.isWarning = false;
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
}

.warning-text {
  margin-left: 10px;
}

.warning {
  border-color: red;
}

.modal-dialog {
  max-width: 100%;
  width: 40%;
}

.modal-header {
  font-size: 14px;
}

.form-item {
  font-size: 12px;
  padding: 0 10px;
  margin-top: 15px;
}

.form-item + .form-item {
  margin-top: 25px;
}

.form-item label span {
  color: red;
}

.form-item input {
  font-size: 13px;
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
