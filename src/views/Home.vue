<script setup>

</script>

<template>
  
    
  
    <section class="contenedor" id="paso">
      <h2 class="subtitulo">¿Que es lo que hacemos?</h2>
      <div class="contenedor-servicio">
        <img src="../assets/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg" class="img-fluid" alt="Responsive image">
        <div class="checklist-servicio">
          <div class="service">
            <h3 class="n-service"><span class="number">1</span>Produccion</h3>
            <p>Te ayudamos a administrar bien trus productos conforme a tus ventas.
            </p>
          </div>
          <div class="service">
            <h3 class="n-service"><span class="number">2</span>Metodos de Pago</h3>
            <p>Podemos acesorarte en el uso de sistemas digitales de apoyo para pagos.</p>
          </div>
          <div class="service">
            <h3 class="n-service"><span class="number">3</span>Descubrimiento</h3>
            <p>Te ayudamos a publicitarte y ser conocido por mas personas para asi aumentar tus ventas.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .img-fluid {
    width: 30%;
    height: 600px;
    margin: 10px 10px 10px 10px;
  }
  /* ¿Que rayos paso? */
  
  .subtitulo{
      text-align: center;
      font-size: 300;
      color: black;
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 40px;
  }
  
  .contenedor-servicio{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
  }
  
  .contenedor-servicio img{
      width: 40%;
  }
  
  .checklist-servicio{
      width: 45%;
  }
  
  .service{
      margin-bottom: 20px;
  }
  
  .n-service{
      margin-bottom: 7px;
      color: black;
  }
  
  .number{
      display: inline-block;
      background-image: linear-gradient(to top, #6e7075 0%, #b7bdc7 100%);
      width: 30px;
      height: 30px;
      color: white;
      text-align: center;
      border-radius: 50%;
      font-weight: 700;
      line-height: 30px;
      margin-right: 5px;
  }
  </style>