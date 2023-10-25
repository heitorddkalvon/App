<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finalizar Compra</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #cart {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 20px;
        }

        #cart ul {
            list-style-type: none;
            padding: 0;
        }

        #cart li {
            margin-bottom: 10px;
        }

        #total {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div id="cart">
        <h2>Carrinho de Compras</h2>
        <ul id="cart-items"></ul>
        <p>Total: R$ <span id="total">0.00</span></p>
        <button onclick="finalizarCompra()">Finalizar Compra</button>
    </div>

    <script>
        const cartItemsElement = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');

        const cart = [
            { id: 1, name: 'Produto 1', price: 19.99, quantity: 2 },
            { id: 2, name: 'Produto 2', price: 29.99, quantity: 1 }
        ];

        function updateCart() {
            cartItemsElement.innerHTML = '';

            let totalPrice = 0;

            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} x${item.quantity} - R$ ${item.price.toFixed(2)}`;
                cartItemsElement.appendChild(listItem);

                totalPrice += item.price * item.quantity;
            });

            totalElement.textContent = totalPrice.toFixed(2);
        }

        function finalizarCompra() {
            alert('Compra finalizada! Total: R$ ' + totalElement.textContent);
        }

        // Atualiza o carrinho ao carregar a página
        updateCart();
    </script>
</body>
</html>