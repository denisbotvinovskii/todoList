<template>
  <div>
    <form @submit.prevent="submitHandle" class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail4"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      id: null,
    };
  },
  methods: {
    submitHandle() {
      const data = {
        email: this.email,
        password: this.password,
        id: Date.now(),
      };
      console.log(data);
      axios.post('http://localhost:8080/registration', data).then((res) => {
        console.log(res).catch((err) => {
          console.log(err);
        });
      });
    },
  },
};
</script>

