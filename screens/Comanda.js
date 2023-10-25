import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Comanda({navigation}){
    const {username} = useContext(AuthContext)
    return(
        <View style={styles.container}>

            <View>
                <Text>Olá,</Text>
                <Text>{username}</Text>
            </View>

            <View>
                <Input />
                <Button onPress={() => navigation.navigate('Produtos')}>Confirmar
      </Button>
            </View>

            <Text>
                Digite a marca para buscar o produto 
                para iniciar a busca
            </Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})