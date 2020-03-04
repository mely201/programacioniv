document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.querySelector("#cboDe"),
            a = document.querySelector("#cboA"),
            cantidad = document.getElementById("txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir').value;
  
        var monedas = {
            "dolar":1,
            "Colon":8.75,
            "yenes":111.27,
            "rupia":69.75,
            "lempira":24.36,
            "peso MX":19.36,
              "bitcoin":0.00026},
            longitudes = {
              "metro": 1,
              "cm": 100,
              "pulgada":39.3701,
              "pie":3.28084,
              "varas":1.1963081929167,
              "yardas":1.09361,
              "km":0.001,
              "millas": 0.000621371
            };
           
            
           let cant=parseFloat(cantidad);
            let $resp=document.getElementById("lblRespuesta");
        if(opcion == "moneda"){  
          $resp.innerHTML = `Respuesta: ${(monedas[a]/monedas[de]*cant)}`;
        
      
        
          
        } else if(opcion == "longitud"){
         
        $resp.innerHTML=`Respuesta: ${(longitudes[a]/longitudes[de]*cantidad)}`;};
    });
  });
  
  //llenar los select box 
  function elegir_opcion() {
    let opcion = document.getElementById('cboConvertir').value,
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');
    //limpia antes de actualizar
    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion == "moneda"){
      var  array = ["dolar!Dolar","colones sv!Colones sv","yenes!Yenes","rupia!Rupia","lempiras!Lempiras","peso mx!Peso MX","bitcoin!Bitcoin"]; 
    } else if(opcion == "longitud"){
      var array = ["metro!Metro","cm!Centimetro","pulgada!Pulgada","pie!Pie","varas!Varas","yarda!Yarda","km!Kilometro","milla!Millas"];
    } ;
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      de1.options.add(newop);
    };
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      a1.options.add(newop);
    };
   }