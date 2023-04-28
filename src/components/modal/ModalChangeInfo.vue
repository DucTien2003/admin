<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="changeInfoModal"
    tabindex="-1"
    aria-labelledby="changeInfoModalLabel"
    aria-hidden="true"
    @click="e => handleOutsideModal(e)"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="f-w-700">Thay đổi thông tin</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="resetNewUser()"
          ></button>
        </div>
        <div class="modal-body d-flex flex-wrap align-items-center">
          <div
            v-for="(formItem, index) in modalChangeInfo"
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
              >
                {{ formItem.condition || "Trường này là bắt buộc" }}
              </span>
            </label>

            <!-- input -->
            <input
              class="form-control"
              :class="formItem.isWarning ? 'warning' : ''"
              :id="formItem.id"
              :type="formItem.type"
              :placeholder="formItem.placeholder"
              v-model="newUser[formItem.id]"
            />
          </div>

          <!-- check admin -->
          <div
            class="check-admin form-item col-md-12 d-flex align-items-center"
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
            @click="resetNewUser()"
          >
            Thoát
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="() => handleChangeInfo()"
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
  props: ["infoUser", "changeInfoUser"],
  data() {
    return {
      modalChangeInfo: [
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
      newUser: { ...this.infoUser }
    };
  },
  watch: {
    infoUser() {
      this.newUser = { ...this.infoUser };
    }
  },
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
    removeWarning() {
      for (var modalChangeInfoItem of this.modalChangeInfo) {
        modalChangeInfoItem.isWarning = false;
      }
    },
    resetNewUser() {
      this.removeWarning();
      this.newUser = { ...this.infoUser };
    },
    handleChangeInfo() {
      let isWarning = false;
      for (var modalChangeInfoItem of this.modalChangeInfo) {
        modalChangeInfoItem.value = this.newUser[modalChangeInfoItem.id];
      }
      for (var modalChangeInfoItem of this.modalChangeInfo) {
        if (
          !modalChangeInfoItem.value ||
          (["account"].includes(modalChangeInfoItem.id) &&
            modalChangeInfoItem.value.length < 6)
        ) {
          modalChangeInfoItem.isWarning = true;
          isWarning = true;
        } else {
          modalChangeInfoItem.isWarning = false;
        }
      }

      if (!isWarning) {
        this.newUser.time = this.getTime();
        this.changeInfoUser(this.newUser);
      }
    },
    handleOutsideModal(e) {
      const modal = document.querySelector(".modal.show");
      if (modal) {
        const modalContent = modal.querySelector(".modal-content");

        if (!(e.target == modalContent || modalContent.contains(e.target))) {
          this.resetNewUser();
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
