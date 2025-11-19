import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const products = [
  {
    id: 1,
    title: 'Angham',
    price: '199,99 DH',
    description: 'Un parfum unisexe inspiré par la musique. Une mélodie olfactive captivante et envoûtante.',
    image: 'https://parfumstore.ma/wp-content/uploads/2025/02/Angham-Lattafa-Parfum_Maroc.webp',
  },
  {
    id: 2,
    title: 'Eclaire',
    price: '349,99 DH',
    description: 'Top notes: CARAMEL, MILK, SUGAR //Middle notes: WHITE FLOWERS, HONEY //Base notes: VANILLA, PRALINE, MUSK',
    image: 'https://parfumstore.ma/wp-content/uploads/2024/07/lattafa-eclair-parfum-femme-prix-maroc.webp',
  },
  {
    id: 3,
    title: 'Nebras',
    price: '249,99 DH',
    description: 'Nebras provides a deep and sensual sweetness with an ever so slight aromatic touch. ',
    image: 'https://static.wixstatic.com/media/c5f7bc_79820e6bffa847ebb549278a149a3780~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
  },
  {
    id: 4,
    title: 'Victoria',
    price: '299,99 DH',
    description: 'Lattafa Victoria est un nouveau parfum pour femme qui combine sans effort des notes chaudes, épicées et sucrées pour une expérience olfactive vraiment captivante.',
    image: 'https://masselia.ma/wp-content/uploads/2025/09/Victoria-Eau-de-Parfum-pour-Femme-100ML-Lattafa-Prix-au-Maroc.webp',
  },
];

export default function ProductList() {
  return (
    <ScrollView>
      {products.map((product) => (
        <View key={product.id} style={styles.card}>
          <Image
            source={{ uri: product.image }}
            style={{ width: '100%', height: 200 }}
          />

          <View style={styles.row}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acheter maintenant</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e63946',
  },

  description: {
    color: '#555',
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#1fbf57',
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
