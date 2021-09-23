<template>
  <div class="nav">
    <div class="nav__top">
      <a class="install" href="#">Instalar Steam <ion-icon name="cloud-download-outline"></ion-icon></a>
      <div class="nav__top-perfil" v-if="token">
        <ul>
          <li>
            <span>{{ user.sub }} <ion-icon name="chevron-down-outline"></ion-icon></span>
            <div class="dropdown">
              <ul>
                <li><router-link :to="'/profiles/' + user.id">Mi perfil</router-link></li>
                <li><span @click="logOut">Cerrar sesion</span></li>
              </ul>
            </div>
          </li>
        </ul>
        
      </div>
      <router-link to="/login" v-if="!token">Iniciar Sesion</router-link>
    </div>
    <div class="nav__botton">
      <div class="nav__botton-logo">
        <router-link to="/">
          <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg" alt="">
        </router-link>
      </div>
      <div class="nav__botton-navegation">
        <ul>
          <li><router-link to="#">TIENDA</router-link></li>
          <li><router-link to="#">COMUNIDAD</router-link></li>
          <li v-if="token"><router-link :to="'/profiles/' + user.id">{{ user.sub }}</router-link></li>
          <li><router-link to="/about">ACERCA DE</router-link></li>
          <li><router-link to="#">SOPORTE</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAccessToken } from "../api/localStorage";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { deleteToken } from "../api/localStorage";

export default {
  name: "NavBar",
  setup() {
    const token = getAccessToken();
    const store = useStore();
    const user = computed(() => store.state.user);

    onMounted(() => {
      store.dispatch("userState");
    })

    const logOut = () => {
      deleteToken();
      location.replace("/");
    }

    return {
      token,
      user,
      logOut
    };
  }
}
</script>

<style lang="scss">
  .nav {
    padding: 8px 280px;

    &__top {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        text-decoration: none;
        color: #b8b6b4;
        font-size: 12px;
        margin-left: 10px;
        display: flex;
        align-items: center;

        ion-icon {
          margin-left: 4px;
        }

        &:hover {
          cursor: pointer;
          color: #fff;
        }
      }

      .install {
        padding: 4px 8px;
        background-color: #5c7e10;
      }

      &-perfil {
        position: relative;

        ul {
          list-style: none; 

          li {
            margin-left: 10px;

            span {
              font-size: 12px;
              display: flex;
              align-items: center;
            }

            &:hover {
              .dropdown {
                display: block;
                position: absolute;
                top: 100%;
                text-align: center;
                background-color: #171a21;
                box-shadow:
                  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                  0 12.5px 10px rgba(0, 0, 0, 0.06),
                  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                  0 100px 80px rgba(0, 0, 0, 0.12)
                ;
              }
            }
            .dropdown {
              display: none;

              ul {
                display: block;
                margin: 10px;

                li {
                  width: 100px;
                  padding: 10px;
                  
                  &:hover {
                    cursor: pointer;
                  }

                  span {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }

    &__botton {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &-logo {
        a {
          img {
            width: 176px;
            object-fit: cover;
          }
        }
      }

      &-navegation {
        ul {
          list-style: none;
          display: flex;

          li {
            margin-right: 10px;

            a {
              text-decoration: none;
              color: #b8b6b4;
              font-size: 14px;
              text-transform: uppercase;

              &:hover {
                cursor: pointer;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>