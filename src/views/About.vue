<template>
  <div class="about">
    <div class="first-section">
      <div class="first-section__left-container">
      <div class="first-section__left-container__logo">
        <img src="https://cdn.akamai.steamstatic.com/store//about/logo_steam.svg" alt="">
      </div>
      <div class="first-section__left-container__description">
        <p>Steam es el mejor lugar para jugar, hablar sobre juegos y crearlos.</p>
      </div>
      <div class="first-section__left-container__data">
        <div class="first-section__left-container__data-item">
          <h4>En linea</h4>
          <h2>16,417,250</h2>
        </div>
        <div class="first-section__left-container__data-item">
          <h4>Jugando</h4>
          <h2>3,828,736</h2>
        </div>
      </div>
      <div class="first-section__left-container__instalar">
        <a href="#">INSTALAR STEAM <ion-icon name="logo-windows"></ion-icon></a>
      </div>
    </div>
    <div class="first-section__right-container">
      <div class="first-section__right-container__video">
        <video autoplay muted loop>
          <source src="https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.webm" type="video/webm" >
        </video>
      </div>
    </div>
    </div>

    <div class="second-section">
      <div class="second-section__content">
        <h1>Accede a los juegos al instante</h1>
        <p>Con casi 30 000 juegos publicados; desde grandes compañías hasta estudios independientes pasando por todo lo intermedio. Disfruta de ofertas exclusivas, actualizaciones automáticas y otras grandes ventajas.</p>
        <a href="#">Explorar la tienda <ion-icon name="arrow-forward-outline"></ion-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = "Steam, la plataforma de online definitiva"
  }
}
</script>

<style lang="scss">
  .about {
    padding: 0 180px 40px 280px;
    background: rgb(38,37,37);
      background: linear-gradient(0deg, rgba(38,37,37,0.569362779291404) 0%, rgba(20,33,40,1) 48%, rgba(25,35,40,1) 100%);

    .first-section {
      display: flex;
      align-items: center;
      min-height: 80vh;

      &__left-container {
      flex: 0.5;

      &__logo {
        img {
          width: 50%;
          object-fit: cover;
          
        }
      }

      &__description {
        margin: 20px 0;

        p {
          font-size: 1.7rem;
          color: #f0edea;
        }
      }

      &__data {
        margin: 20px 0;
        display: flex;
        align-items: center;

        &-item {
          padding-right: 80px;

          h4 {
            font-weight: 200;
            font-size: 12px;
            color: #b8b6b4;
          }

          h2 {
            font-weight: 200;
          }
        }
      }

      &__instalar {
        margin: 20px 0;

        a {
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.1rem;
          color: #fff;
          padding: 10px 30px;
          background: linear-gradient(to right, #06bfff 50%, #2b74ff 100%);
          background-position: right 0;
          transition: background-position 300ms ease-in;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    &__right-container {
      flex: 0.5;

      &__video {
        video {
          width: 100%;
          object-fit: cover;
        }
      }
    }
    }

    .second-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      &__content {
        max-width: 500px;
        text-align: center;

        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 20px;
        }

        a {
          margin: 12px 0;
          text-decoration: none;
          color: #2EBFFF;
          font-size: 20px;
          flex: 1;
          align-items: center;
          
        }
      }
    }
  }
</style>
