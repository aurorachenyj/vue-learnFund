<template>
  <div class="container mt-5 full-height">
    <div class="w-50 mx-auto">
      <h3 class="text-center mb-5">後台登入</h3>

      <v-form v-slot="{ errors }" @submit="adminLogin">
        <div class="mb-3">
          <label for="email" class="form-label">帳號*</label>
          <v-field
            name="信箱"
            v-model="user.username"
            :class="{ 'is-invalid': errors['信箱'] }"
            id="email"
            type="text"
            class="form-control"
            placeholder="請輸入信箱"
            rules="required|email"
          ></v-field>
          <error-message name="信箱" class="invalid-feedback"> </error-message>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼*</label>
          <v-field
            name="密碼"
            v-model="user.password"
            :class="{ 'is-invalid': errors['密碼'] }"
            id="password"
            type="password"
            class="form-control"
            placeholder="請輸入密碼"
            rules="required|min:8"
            required
          ></v-field>
          <error-message name="密碼" class="invalid-feedback"> </error-message>
        </div>

        <div class="text-center">
          <button class="btn btn-outline-primary" type="submit">登入</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import Toast from "../../utils/Toast";
const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    adminLogin() {
      if (this.user.username === "" || this.user.password === "") {
        Toast.fire({
          icon: "error",
          title: "請填寫完整",
        });

        return;
      }

      this.$http
        .post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;

          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;

          Toast.fire({
            icon: "success",
            title: res.data.message,
          });

          this.goToAdminIndex();
        })

        .catch((err) => {
          Toast.fire({
            icon: "error",
            title: err.response?.data?.message,
          });

          this.user = {
            username: "",
            password: "",
          };
        });
    },

    goToAdminIndex() {
      this.$router.push("/admin/index");
    },
  },
};
</script>
