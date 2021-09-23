<template>
  <div class="footer">
    <div class="footer__top">
      <p>2021 Valve Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
Todos los precios incluyen IVA (donde sea aplicable).</p>
    </div>
    <div class="footer__botton">
      <a href="#">Acerca de Valve</a>
      <a href="#">Empleo</a>
      <a href="#">Steamworks</a>
      <a href="#">Distribución de Steam </a>
      <a href="#">Soporte</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  .footer {
    padding: 40px 280px;

    &__top {
      padding: 20px 0;
      border-top: 0.6px solid #8F98A0;
      border-bottom: 0.6px solid #8F98A0;

      p {
        font-size: 12px;
        font-weight: 200;
        color: #8F98A0;
      }
    }

    &__botton {
      padding: 20px 0;
      
      a {
        font-size: 12px;
        text-decoration: none;
        color: #bbc1c5;
        margin-right: 10px;
      }
    }
  }
</style>