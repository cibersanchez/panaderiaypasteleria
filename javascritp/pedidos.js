let pedidosPan = JSON.parse(localStorage.getItem('pedidosPan'));
let pedidosEspesial = JSON.parse(localStorage.getItem('pedidosEspesial'));
let pedidosPonque = JSON.parse(localStorage.getItem('pedidosPonque'));

const formulario = document.getElementById('info')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const cedula = document.getElementById('cedula')

    if (pedidosPan !== null) {
        alert(`tu documento es ${cedula.value} `);

        pedidosPan.forEach((pedido) => {
            if (pedido.cedulaValue === cedula.value) {
                let mostrarPanes = '';

                pedido.totalpanes.forEach(([pan, cantidad]) => {
                    mostrarPanes += `${cantidad} mil de pan ${pan} \n`
                })

                alert(`Tus pedidos son: \n ${mostrarPanes} Total Precio: $ ${pedido.totalCompra} mil pesos \n para la dirección ${pedido.direccionValue} zona ${pedido.zonaValue}`)
            }
        })
    }
    
    if (pedidosEspesial !== null) {
        alert(`tu pedidos especiales`);
        pedidosEspesial.forEach((pedido) => {
            if (pedido.cedulaValue === cedula.value) {
                let mostrarEspecial = '';

                pedido.totalespe.forEach(([pan, cantidad]) => {
                    mostrarEspecial += `${cantidad} especiales de ${pan} \n`
                })

                alert(`Tus pedidos son: \n ${mostrarEspecial} Total precio $ ${pedido.totalCompra1} mil pesos \n para la dirección ${pedido.direccionValue} zona ${pedido.zonaValue} `)
            }
        })
        
    }
    
    if (pedidosPonque !== null) {
        alert(`tu pedidos en pasteleria`);

        pedidosPonque.forEach((pedido) => {
            if (pedido.cedulaValue === cedula.value) {
                let mostrarPonque = '';

                pedido.produc.forEach(([pan, libra, cantidad]) => {
                    mostrarPonque += `${cantidad} ${pan} de ${libra}\n`
                })
                alert(`Tus pedidos son: \n ${mostrarPonque} para un total de ${pedido.totalCompra2}\n  la dirección es ${pedido.direccionValue} zona ${pedido.zonaValue}`)
            }
        })    
       } 
    
    document.location.reload();
})