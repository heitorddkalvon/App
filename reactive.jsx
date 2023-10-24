import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    const fetchPosts = async () => {
      try {
       
        const response = await axios.get('http://localhost:3001/posts');
        
        
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    
    fetchPosts();
  }, []); 

  return (
    <View>
      <Text>Posts:</Text>
      {/* Usa FlatList para exibir a lista de posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
