<template>
  <div class="home">
    <div class="home__image-fullscreen">
      <div class="none">
      </div>
      <div class="home__image-fullscreen__bar">
        <a href="#">Tu Tienda</a>
        <a href="#">Nuevo y Destacable</a>
        <a href="#">Categorias</a>
        <a href="#">Tienda de Puntos</a>
        <a href="#">Noticias</a>
        <a href="#">Laboratorios</a>
        <input type="text" placeholder="Buscar">
      </div>
    </div>

    <div class="home__destacados">
      <Destacados />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from "vuex";
import { onMounted } from "vue";
import { getAccessToken } from "../api/localStorage";
import Destacados from "../components/Destacados.vue";

export default {
  name: 'Home',
  components: {
    Destacados,
  },
  created() {
    document.title = "Bienvenidos a Steam"
  },
  setup() {
    const store = useStore();
    
    onMounted(() => {
      if(getAccessToken()) {
        store.dispatch("userState");
      }
    })
  }
}
</script>

<style lang="scss">
  .home {
    background-color: transparent;

    &__image-fullscreen {
      min-height: 60vh;
      background-image: url("https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ef7b5d82350e3c958a76ef4/page_bg_english.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .none {
        background-color: transparent;
        min-height: 20px;
      }

      &__bar {
        margin: 20px 280px 0 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%);
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;

        a {
          font-size: 14px;
          text-decoration: none;
          color: #fff;
          padding: 8px 16px;
        }
        
        input {
          background-color: #316282;
          border: none;
          padding: 4px 20px;
          color: #fff;
          font-size: 14px;
          font-weight: 300;
          margin-right: 8px;

          &:focus {
            outline: none;  
          }
        }
      }
    }

    &__destacados {
      padding: 0 280px;
    }
  }
</style>
