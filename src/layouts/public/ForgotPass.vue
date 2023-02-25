<template>
  <div id="forgot-pass">
    <div class="container">
      <div class="row">
        <div class=" wrapper col-xl-10 col-lg-12 col-md-9 d-flex">
          <div class="img col-lg-6 d-lg-block d-none"></div>
          <div class="content col-12 col-lg-6 flex-column center-content">
            <div class="heading">Forgot Your Password?</div>
            <p class="text text-center">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </p>
            <form class="form-container">
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-user"
                  placeholder="Enter Email Address"
                />
              </div>
              <router-link
                tag="a"
                :to="{ name: 'login' }"
                class="btn btn-primary btn-user btn-block"
              >
                Reset Password
              </router-link>
            </form>
            <hr />
            <router-link tag="a" :to="{ name: 'register' }" class="link"
              >Create an Account!</router-link
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
  name: "ForgotPass"
};
</script>
<style scoped>
hr {
  margin: 4px 0 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
}

#forgot-pass {
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
  background-image: url(../../assets/images/forgot-pass-img.jpg);
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

.text {
  font-size: 1.6rem;
  color: #858796;
  line-height: 25px;
  padding: 0 10px;
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

.link {
  color: rgba(78, 114, 223, 0.8);
  font-size: 1.3rem;
  margin-top: 12px;
}

.link:hover {
  color: rgba(78, 114, 223, 1) !important;
  text-decoration: underline;
}

a.btn:hover {
  color: white !important;
}
</style>
