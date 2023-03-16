<template>
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
            v-for="(formItem, index) in modalList"
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
          <div class="check-admin form-item col-md-6 d-flex align-items-center">
            <input
              class="form-check-input"
              id="is-admin"
              type="checkbox"
              :v-model="newUser.isAdmin"
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
</template>
<script>
export default {
  name: "modal",
  props: ["modalList", "newUser"],
  methods: {
    addZero(number) {
      return number < 10 ? "0" + number : number;
    },
    getTime() {
      let cd = new Date();
      let getDate = this.addZero(cd.getDate());
      let getMonth = this.addZero(this.addZero(cd.getMonth() + 1));
      let getFullYear = cd.getFullYear();
      let getHours = this.addZero(cd.getHours());
      let getMinutes = this.addZero(cd.getMinutes());

      return `${getDate}/${getMonth}/${getFullYear} ${getHours}:${getMinutes}`;
    },
    checkEmail(email) {
      return email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    addUser() {
      let isWarning = false;
      for (var modalAddUserItem of this.modalAddUser) {
        if (!modalAddUserItem.value) {
          modalAddUserItem.isWarning = true;
          isWarning = true;
        } else if (
          (["account", "password"].includes(modalAddUserItem.id) &&
            modalAddUserItem.value.length < 6) ||
          (modalAddUserItem.id === "email" &&
            checkEmail(!modalAddUserItem.value))
        ) {
          modalAddUserItem.isWarning = true;
          isWarning = true;
        } else {
          modalAddUserItem.isWarning = false;
        }
      }

      if (!isWarning) {
        this.newUser.time = getTime();
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

.modal-footer button {
  padding: 3px 15px;
  font-size: 14px;
  margin-left: 10px;
}
</style>
