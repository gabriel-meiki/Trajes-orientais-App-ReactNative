import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Button
  title="Veja mais trajes dos antigos lutadores"
  color="red"
  accessibilityLabel="Veja mais trajes dos antigos lutadores"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
