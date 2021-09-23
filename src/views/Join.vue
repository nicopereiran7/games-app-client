<template>
  <div class="join">
    <div class="join__container">
      <div class="join__container-form">
        <h1>Crear tu cuenta</h1>
        <form @submit.prevent="onRegister">
          <label for="email">Direccion de correo</label>
          <input type="email" name="email" v-model="formData.email" :class="{ error: formError.email }">
          <label for="name">Nombre</label>
          <input type="text" name="name" v-model="formData.name" :class="{ error: formError.name }">
          <label for="lastname">Apellido</label>
          <input type="text" name="lastname" v-model="formData.lastname" :class="{ error: formError.lastname }">
          <label for="username">Nombre de usuario</label>
          <input type="text" name="username" v-model="formData.username" :class="{ error: formError.username }">
          <label for="password">Contraseña</label>
          <input type="password" name="password" v-model="formData.password" :class="{ error: formError.password }">
          <label for="repeatPassword">Repetir Contraseña</label>
          <input type="password" name="repeatPassword" v-model="formData.repeatPassword" :class="{ error: formError.repeatPassword }">

          <div class="button-container">
            <button type="submit">Registrar</button>
          </div>

          <p>¿Has olvidado la contraseña?</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { getAccessToken } from "../api/localStorage";

export default {
  name: "Join",
  created() {
    document.title = "Crear tu cuenta";
  },
  setup() {
    let formData = {};
    let formError = ref({})
    const router = useRouter();
    const token = getAccessToken();

    onMounted(() => {
      if(token) router.push("/");
    })

    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
      username: Yup.string().required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], true)
    })

    const onRegister = async () => {
      formError.value = {};
      
      try {
        await schemaForm.validate(formData, { abortEarly: false })
        console.log("todo ok")
      }catch(error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        })
      }
    }

    return {
      formData,
      onRegister,
      formError
    }

  }
}
</script>

<style lang="scss">
  .join {
    min-height: 85vh;
    background: radial-gradient(60.12% 60.12% at 104.83% -0.03%, rgba(74, 81, 92, 0.3) 0%, rgba(74, 81, 92, 0) 100%);

    &__container {
      padding: 0 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &-form {
        max-width: 400px;

        h1 {
          text-transform: uppercase;
          font-size: 40px;
          font-weight: 200;
          margin: 20px 0;
        }

        form {
          display: grid;

          label {
            font-size: 15px;
            color: #b8b6b4;
            margin-bottom: 6px;
          }

          input {
            width: 100%;
            background: #32353C;
            border-radius: 3px;
            padding: 8px 6px;
            color: #E9E9E9;
            border: none;
            margin-bottom: 16px;

            &:focus {
              outline: none;
            }
          }

          input.error {
            background-color: rgba(206, 46, 46, 0.438);
          }

          .button-container {
            display: flex;
            justify-content: center;

            button {
              border-radius: 2px;
              border: none;
              text-decoration: none;
              color: #fff;
              padding: 10px 60px;
              background: linear-gradient(to right, #07b4ee 50%, #2b74ff 100%);
              background-position: right 0;
              transition: background-position 300ms ease-in;

              &:hover {
                cursor: pointer;
              }
            }
          }

          p {
            font-size: 12px;
            text-align: center;
            margin: 20px 0;
            transition: .3s ease all;

            &:hover {
              color: #2EBFFF;
              cursor: pointer;
            }
          }
        }
      }
    }    
  }

</style>