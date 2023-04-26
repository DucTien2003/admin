<template>
  <div id="register">
    <div class="container">
      <div class="row">
        <div class="wrapper d-flex">
          <div class="img col-lg-5 d-lg-block d-none"></div>
          <div class="content col-12 col-lg-7 flex-column center-content">
            <div class="heading">Create an Account!</div>
            <form class="form-container">
              <div class="d-flex flex-wrap">
                <div
                  class="form-group half-input col-sm-6 col-12 d-inline-block"
                >
                  <input
                    type="text"
                    class="form-control form-control-user"
                    placeholder="First Name"
                  />
                </div>
                <div
                  class="form-group half-input col-sm-6 col-12 d-inline-block"
                >
                  <input
                    type="text"
                    class="form-control form-control-user"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-user"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div class="d-flex flex-wrap">
                <div
                  class="form-group half-input col-sm-6 col-12 d-inline-block"
                >
                  <input
                    type="text"
                    class="form-control form-control-user"
                    placeholder="Password"
                  />
                </div>
                <div
                  class="form-group half-input col-sm-6 col-12 d-inline-block"
                >
                  <input
                    type="text"
                    class="form-control form-control-user"
                    placeholder="Repeat Password"
                  />
                </div>
              </div>
              <router-link
                tag="a"
                :to="{ name: 'dashboard' }"
                class="btn btn-primary btn-user btn-block"
              >
                Register Account
              </router-link>
              <hr />
              <router-link
                tag="a"
                :to="{ name: 'dashboard' }"
                class="color-google btn btn-primary btn-user btn-block center-content"
              >
                <img
                  class="icon"
                  src="../../assets/icons/google.svg"
                  alt="image"
                />
                Register with Google
              </router-link>
              <router-link
                tag="a"
                :to="{ name: 'dashboard' }"
                class="color-facebook btn btn-primary btn-user btn-block center-content"
              >
                <img
                  class="icon"
                  src="../../assets/icons/facebook.svg"
                  alt="image"
                />
                Register with Facebook
              </router-link>
            </form>
            <hr />
            <router-link tag="a" :to="{ name: 'forgot-password' }" class="link"
              >Forgot Password?</router-link
            >
            <router-link tag="a" :to="{ name: 'login' }" class="link"
              >Already have an account? Login!</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register"
};
</script>
<style scoped>
hr {
  margin: 4px 0 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
}

#register {
  min-height: 100vh;
  height: 100%;
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
}

.container {
  padding: 48px 24px;
}

.wrapper {
  margin: 0 auto;
}

.img {
  background-image: url(../../assets/images/register-img.jpg);
  background-position: center;
  background-size: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.content {
  padding: 48px;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.heading {
  font-size: 2.4rem;
  margin-bottom: 24px;
}

.form-container {
  width: 100%;
}

.form-group {
  font-size: 1.5rem;
  color: #858796;
  margin-bottom: 16px;
  padding: 0 6px;
}

.form-control {
  padding: 16px;
  font-size: 1.2rem;
  color: #858796;
  border-radius: 999px;
}

.btn {
  width: 100%;
  padding: 14px 16px;
  font-size: 1.2rem;
  margin-bottom: 16px;
  border-radius: 999px;
}

.btn-primary {
  color: #fff;
  background-color: #4e73df;
  border: white;
}

.color-google {
  color: #fff;
  background-color: #d62516;
}

.color-facebook {
  color: #fff;
  background-color: #2d4373;
}

.link {
  color: rgba(78, 114, 223, 0.8);
  font-size: 1.3rem;
  margin-top: 12px;
}

.link:hover {
  color: rgba(78, 114, 223, 1) !important;
  text-decoration: underline;
}

.icon {
  width: 18px;
  margin: 0 4px 2px 0;
}

a.btn:hover {
  color: white !important;
}
</style>
