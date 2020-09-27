import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import apiFilmes from '../../services/apiFilmes';

export default () => {

  // Criando variável filmes usando os estados
  const [filmes, setFilmes] = useState([])

  // Ao carregar a página ele chama o useEffect
  useEffect(()=>{
    
    // Chamando a apiFilmes pegando os filmes populares
    apiFilmes.get('movie/popular?language=pt-BR').then(results => {
      setFilmes(results.data.results)
    })

  }, [])


  return (
    <>
      <ScrollView>
        {filmes.map(item => (
           <Card>
           <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path }} />
           <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.overview}</Paragraph>
           </Card.Content>
           <Card.Actions>
              <Button>Ver mais</Button>
           </Card.Actions>
           
         </Card>
        ))}
      </ScrollView>
    </>
  )
}