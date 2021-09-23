<template>
  <div>
    <h2>{{ user.firstName }}</h2>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "../api/axios";

export default {
  name: "Profile",
  created() {
    document.title = "Profile";
  },
  setup() {
    const { params } = useRoute();
    const id = parseInt(params.id);
    let user = ref({});


    onMounted(async () => {
      await axios.get(`/users/${id}`).then(response => {
        user.value = response.data;
      }).catch(error => console.log(error.response));
    })

    return {
      user,
    }
  }
}
</script>

<style>

</style>