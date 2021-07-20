<template>
  <div class="card" style="width: 18rem;">
    <img v-bind:src="photo" class="card-img-top" />

    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="btn-group-vertical ">
        <div class="mb-3">
          <label for="formFile" class="form-label"></label>
          <input
            v-on:change="photo"
            class="form-control"
            type="file"
            id="formFile"
          />
          <button @click.prevent="addPhoto()" class="btn btn-primary">
            Ok
          </button>
        </div>

        <button class="btn btn-primary">
          My page
        </button>
        <button class="btn btn-primary">
          My Friends
        </button>
        <button type="button" class="btn btn-primary">
          Messages <span class="badge bg-secondary">4</span>
        </button>
        <button class="btn btn-primary">
          My Profile
        </button>
        <button class="btn btn-primary">
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      photo: null,
    };
  },
  methods: {
    addPhoto() {
      if (this.photo === null) {
        this.photo = this.url;
      }
    },
  },
};
</script>
