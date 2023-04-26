<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class=" wrapper col-xl-10 col-lg-12 col-md-9 d-flex">
          <div class="img col-lg-6 d-lg-block d-none"></div>
          <div class="content col-12 col-lg-6 flex-column center-content">
            <div class="heading">Welcome Back!</div>
            <form class="form-container">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-user"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-user"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox small">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck"
                  />
                  <label class="form-check-label" for="customCheck"
                    >Remember Me</label
                  >
                </div>
              </div>
              <router-link
                tag="a"
                :to="{ name: 'dashboard' }"
                class="btn btn-primary btn-user btn-block"
              >
                Login
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
                Login with Google
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
                Login with Facebook
              </router-link>
            </form>
            <hr />
            <router-link tag="a" :to="{ name: 'forgot-password' }" class="link"
              >Forgot Password?</router-link
            >
            <router-link tag="a" :to="{ name: 'register' }" class="link"
              >Create an Account!</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style scoped>
hr {
  margin: 4px 0 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
}

#login {
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
  background-image: url(../../assets/images/login-img.jpg);
  background-position: center;
  background-size: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.content {
  padding: 48px 55px;
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
  width: 100%;
  font-size: 1.5rem;
  color: #858796;
  margin-bottom: 16px;
}

.form-control {
  padding: 16px;
  font-size: 1.2rem;
  color: #858796;
  border-radius: 999px;
}

.form-check-input {
  margin: 0;
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
