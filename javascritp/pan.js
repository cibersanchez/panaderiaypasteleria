// aqui capturamos las variables del formulario
const pedirDatosPan = () => {
    let pedidosPan = [];

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
    const pan4 = document.getElementById('pan4')
    const cantidad4 = document.getElementById('Cantidad4')
    const pan5 = document.getElementById('pan5')
    const cantidad5 = document.getElementById('Cantidad5')
    const pan6 = document.getElementById('pan6')
    const cantidad6 = document.getElementById('Cantidad6')
    const pan7 = document.getElementById('pan7')
    const cantidad7 = document.getElementById('Cantidad7')
    const pan8 = document.getElementById('pan8')
    const cantidad8 = document.getElementById('Cantidad8')
    const pan9 = document.getElementById('pan9')
    const cantidad9 = document.getElementById('Cantidad9')
    const pan10 = document.getElementById('pan10')
    const cantidad10 = document.getElementById('Cantidad10')
    const formulariopan = document.getElementById('form')

    formulariopan.addEventListener('submit', (e) => {
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
        let pan4Value = pan4.value;
        let cantidad4Value = cantidad4.value;
        let pan5Value = pan5.value;
        let cantidad5Value = cantidad5.value;
        let pan6Value = pan6.value;
        let cantidad6Value = cantidad6.value;
        let pan7Value = pan7.value;
        let cantidad7Value = cantidad7.value;
        let pan8Value = pan8.value;
        let cantidad8Value = cantidad8.value;
        let pan9Value = pan9.value;
        let cantidad9Value = cantidad9.value;
        let pan10Value = pan10.value;
        let cantidad10Value = cantidad10.value;

        const panes = [
            [pan1Value, cantidad1Value],
            [pan2Value, cantidad2Value],
            [pan3Value, cantidad3Value],
            [pan4Value, cantidad4Value],
            [pan5Value, cantidad5Value],
            [pan6Value, cantidad6Value],
            [pan7Value, cantidad7Value],
            [pan8Value, cantidad8Value],
            [pan9Value, cantidad9Value],
            [pan10Value, cantidad10Value],
        ];
        let totalpanes = [];
        panes.forEach(([pan, cantidad]) => {
            if (pan !== "") {
                totalpanes.push([pan, cantidad]);
            }
        })

        const cantidades = [
            cantidad1Value,
            cantidad2Value,
            cantidad3Value,
            cantidad4Value,
            cantidad5Value,
            cantidad6Value,
            cantidad7Value,
            cantidad8Value,
            cantidad9Value,
            cantidad10Value,
        ];

        let totalCompra = 0;

        cantidades.forEach((cantidad) => {
            if (cantidad !== "") {
                let precio = cantidad * 1000;
                totalCompra += precio;
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
            pan4Value,
            cantidad4Value,
            pan5Value,
            cantidad5Value,
            pan6Value,
            cantidad6Value,
            pan7Value,
            cantidad7Value,
            pan8Value,
            cantidad8Value,
            pan9Value,
            cantidad9Value,
            pan10Value,
            cantidad10Value,
            totalCompra,
            totalpanes,
        }

        if (localStorage.getItem('pedidosPan') === null) {
            pedidosPan.push(pedido);
            localStorage.setItem('pedidosPan', JSON.stringify(pedidosPan));
        } else {
            let pedidosStorage = JSON.parse(localStorage.getItem('pedidosPan'));
            pedidosStorage.push(pedido);
            localStorage.setItem('pedidosPan', JSON.stringify(pedidosStorage));
        }
        alert('gracias por tu pedido')
        document.location.reload();
    })
}

pedirDatosPan();


