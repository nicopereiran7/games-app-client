<template>
  <div class="login">
    <div class="login__container">
      <div class="login__container-form">
        <h1>Iniciar Sesion</h1>
        <form @submit.prevent="login">
          <label for="user" :class="{ error: formError.username }">Nombre de la cuenta de Steam</label>
          <input type="text" name="user" v-model="formData.username" :class="{ error: formError.username }">
          <label for="password" :class="{ error: formError.password }">Contraseña</label>
          <input type="password" name="password" v-model="formData.password" :class="{ error: formError.password }">

          <div class="button-container">
            <button type="submit">Iniciar Sesión</button>
          </div>

          <p>¿Has olvidado la contraseña?</p>
        </form>
      </div>
      <div class="login__container-register">
        <h3>Unete a Steam y descubre titulos a los que jugar</h3>
        <p>Es gratis y facil de usar</p>
        <div class="register-link">
          <router-link to="/join">Unete a steam</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { setAccessToken, setRefreshToken, getAccessToken } from "../api/localStorage";
import * as Yup from "yup";
import axios from "../api/axios";

export default {
  name: "Login",
  created() {
    document.title = "Iniciar Sesion"
  },
  setup() {
    let formData = {};
    let formError = ref({});
    const store = useStore();
    const router = useRouter();
    const token = getAccessToken();

    onMounted(() => {
      if(token) router.push("/");
    })

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      password: Yup.string().required(true),
    })

    const login = async () => {
      formError.value = {};

      try {
        await schemaForm.validate(formData, { abortEarly: false })
        
        await axios.post('/signin', formData).then(res => {
          console.log(res.data.user);
          setAccessToken(res.data.access_token);
          setRefreshToken(res.data.refresh_token);
          store.commit('setUser', res.data.user);
          window.location.href = "/";
          
        }).catch(err => {
          console.log(err.response);
        });

      }catch(error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        })
      }
    }

    return {
      formData,
      login,
      formError,
    }
  }
}
</script>

<style lang="scss">
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    background: rgb(64,76,94);
    background-image: linear-gradient(95deg, rgba(64,76,94,0.8830882694874825) 0%, rgba(33,36,41,0.9699230033810399) 25%, rgba(33,36,41,1) 100%), url("https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/03/Steam-Mosaic-Games.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //background: radial-gradient(60.12% 60.12% at 104.83% -0.03%, rgba(74, 81, 92, 0.3) 0%, rgba(74, 81, 92, 0) 100%);

    &__container {
      padding: 0 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &-form {
        min-width: 300px;

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

          label.error {
            color: #eb2f2fe1
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
            border: solid;
            border: 1px solid rgb(180, 64, 64);
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

      &-register {
        margin-top: 20px;
        text-align: center;

        h3 {
          color: #b8b6b4;
          font-size: 16px;
          font-weight: lighter;
        }

        p {
          color: #b8b6b4;
        }

        .register-link {
          margin-top: 20px;
          a {
            text-decoration: none;
            color: #fff;
            padding: 10px;
            border: 1px solid #b8b6b4;
            transition: .3s ease all;

            &:hover {
              border: 1px solid #fff;
            }
          }
        }
      }
    }
  }
</style>