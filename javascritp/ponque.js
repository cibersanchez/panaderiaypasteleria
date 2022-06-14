const pedirDatosPonque = () => {
     
    let pedidosPonque = [];

    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const cedula = document.getElementById('cedula')
    const celular = document.getElementById('celular')
    const zona = document.getElementById('zona')
    const direccion = document.getElementById('dire')
    const ponques = document.getElementById('ponque')
    const libra1 = document.getElementById('libra')
    const cantidad = document.getElementById('Cantidad')
    const biscocho = document.getElementById('biscocho')
    const libra2 = document.getElementById('libra2')
    const cantidad2 = document.getElementById('Cantidad2')
    const torta = document.getElementById('torta')
    const libra3 = document.getElementById('libra3')
    const cantidad3 = document.getElementById('Cantidad3')
    const formularioponque = document.getElementById('pon')


    formularioponque.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombreValue = nombre.value;
        let apellidoValue = apellido.value;
        let cedulaValue = cedula.value;
        let celularValue = celular.value;
        let zonaValue = zona.value;
        let direccionValue = direccion.value;
        let ponquevalue = ponques.value;
        let libra1Value = libra1.value;
        let cantidadValue = cantidad.value;
        let biscochoValue = biscocho.value;
        let libra2Value = libra2.value;
        let cantidad2Value = cantidad2.value;
        let tortaValue = torta.value;
        let libra3Value = libra3.value;
        let cantidad3Value = cantidad3.value;
        
        const opci =  [
            [ponquevalue, libra1Value, cantidadValue],
            [biscochoValue, libra2Value, cantidad2Value],
            [tortaValue, libra3Value, cantidad3Value],
        ];

        let produc = [];
        opci.forEach(([pan, libra, cantidad]) => {
            if (pan !== "") {
                produc.push([pan, libra, cantidad]);
            }
        })

        let totalCompra2 = 0;

        produc.forEach(([pan, libra, cantidad]) => {
            if (libra === "15000") {
                let precio1 = cantidad * 15000;
                totalCompra2 += precio1;
            } else if (libra === "25000") {
                let precio2 = cantidad * 25000;
                totalCompra2 += precio2;
            } else if (libra === "35000") {
                let precio3 = cantidad * 35000;
                totalCompra2 += precio3;
            } else if (libra === "50000") {
                let precio4 = cantidad * 50000;
                totalCompra2 += precio4;
            }
        })
        

        const pedido = {
            nombreValue,
            apellidoValue,
            cedulaValue,
            celularValue,
            zonaValue,
            direccionValue,
            ponquevalue,
            libra1Value,
            cantidadValue,
            biscochoValue,
            libra2Value,
            cantidad2Value,
            tortaValue,
            libra3Value,
            cantidad3Value,
            produc,
            totalCompra2,
        }

        
        if (localStorage.getItem('pedidosPonque') === null) {
            pedidosPonque.push(pedido);
            localStorage.setItem('pedidosPonque', JSON.stringify(pedidosPonque));
            } else 
            {
                let pedidosStorage = JSON.parse(localStorage.getItem('pedidosPonque'));
                pedidosStorage.push(pedido);
                localStorage.setItem('pedidosPonque', JSON.stringify(pedidosStorage));
            }

          alert('gracias por tu pedido')
          document.location.reload();

    })
}
pedirDatosPonque();