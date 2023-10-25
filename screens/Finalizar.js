import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, View } from 'react-native';
import Button from '../components/button.js';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const produto = {
  "id": 1,
  "nome": "Adidas",
  "imagePath": "https://www.freepik.com/free-photo/pair-trainers_6048743.htm#query=Shoes&position=1&from_view=search&track=sphtps://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527565.jpg?t=st=1688655003~exp=1688658603~hmac=84829cbb20876216de8d7e408378e6b1c44686855c3d414865b445e20bb5f7b4&w=1380",
  "preco": 400
}

export default function FinalizarCompra({ navigation }) {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/produtos")
      .then(resp => setProdutos(resp.data))
  }, [])

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <View style={styles.box}>
          <Text>Comanda</Text>
          <Text style={styles.title}>2457</Text>
        </View>
      </View>

      <View style={styles.pedidos}>
        <Text style={styles.subtitle}>Pedido</Text>
        <View style={styles.pedidoData}>
          <Text>Carrinho</Text>
          <Text>R$ 0,00</Text>
        </View>
        <View style={styles.pedidoData}>
          <Text>Total do pedido</Text>
          <Text>R$ {calcularTotal().toFixed(2)}</Text>
        </View>
        <View style={styles.pedidoDataTotal}>
          <Text>Saldo final</Text>
          <Text>R$ {calcularTotal().toFixed(2)}</Text>
        </View>
      </View>

      <TextInput style={styles.input} placeholder="Procurar" />

      <Text style={styles.subtitle}>Produtos</Text>

      <ScrollView style={styles.scroll}>
        {produtos.map(produto => (
          <View key={produto.id} style={styles.cardProduto}>
            <View style={styles.produtoData}>
              <Text>{produto.nome}</Text>
              <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
            </View>
            {}
          </View>
        ))}
      </ScrollView>

      <Button onPress={() => navigation.navigate('Comanda')}>Finalizar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  box: {
    borderColor: '#121A2C',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  pedidos: {
    width: '100%',
  },
  pedidoData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pedidoDataTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
  },
  cardProduto: {
    borderColor: '#121A2C55',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
  },
  produtoData: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  price: {
    color: '#29A035',
    fontSize: 18,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scroll: {
    width: '100%',
  }
});

<ScrollView style={styles.scroll}>
  {produtos.map(produto => (
    <View key={produto.id} style={styles.cardProduto}>
      <View style={styles.produtoData}>
        <Text>{produto.nome}</Text>
        <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
      </View>
      <View style={styles.produtoQuantidade}>
        <Text>Quantidade: {produto.quantidade}</Text>
        {/* Adicione outras informações aqui, se necessário */}
      </View>
    </View>
  ))}
</ScrollView>

produtoQuantidade: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  }
