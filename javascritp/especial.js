const PedirDatosEspeciales = () => {   
    let pedidosEspesial = [];

    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const cedula = document.getElementById('cedula')
    const celular = document.getElementById('celular')
    const zona = document.getElementById('zona')
    const direccion = document.getElementById('dire')
    const pan1 = document.getElementById('pan1')
    const cantidad1 = document.getElementById('Cantidad1')
    const pan2 = document.getElementById('pan2')
    const cantidad2 = document.getElementById('Cantidad2')
    const pan3 = document.getElementById('pan3')
    const cantidad3 = document.getElementById('Cantidad3')
    const formularioespe = document.getElementById('espe')

    formularioespe.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombreValue = nombre.value;
        let apellidoValue = apellido.value;
        let cedulaValue = cedula.value;
        let celularValue = celular.value;
        let zonaValue = zona.value;
        let direccionValue = direccion.value;
        let pan1Value = pan1.value;
        let cantidad1Value = cantidad1.value;
        let pan2Value = pan2.value;
        let cantidad2Value = cantidad2.value;
        let pan3Value = pan3.value;
        let cantidad3Value = cantidad3.value;

        const panespe = [
            [pan1Value, cantidad1Value],
            [pan2Value, cantidad2Value],
            [pan3Value, cantidad3Value],
        ];
        let totalespe = [];
        panespe.forEach(([pan, cantidad]) => {
            if (pan !== "") {
                totalespe.push([pan, cantidad]);
            }
        })

        const cantidades = [
            [cantidad1Value],
            [cantidad2Value],
            [cantidad3Value],
        ];
        let totalCompra1 = 0;

        cantidades.forEach((cantidad) => {
            if (cantidad !== "") {
                let precio = cantidad * 5000;
                totalCompra1 += precio;
            }
        })


        const pedido = {
            nombreValue,
            apellidoValue,
            cedulaValue,
            celularValue,
            zonaValue,
            direccionValue,
            pan1Value,
            cantidad1Value,
            pan2Value,
            cantidad2Value,
            pan3Value,
            cantidad3Value,
            totalespe,
            totalCompra1,
        }
         if (localStorage.getItem('pedidosEspesial') === null) {
            pedidosEspesial.push(pedido);
            localStorage.setItem('pedidosEspesial', JSON.stringify(pedidosEspesial));
            } else 
            {
                let pedidosStorage = JSON.parse(localStorage.getItem('pedidosEspesial'));
                pedidosStorage.push(pedido);
                localStorage.setItem('pedidosEspesial', JSON.stringify(pedidosStorage));
            }

          alert('gracias por tu pedido')
          document.location.reload();
    })
}
PedirDatosEspeciales();