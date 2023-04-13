import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

const GridView = () => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      backgroundColor: "red",
    },
    {
      id: 2,
      title: "Item 2",
      backgroundColor: "green",
    },
    {
      id: 3,
      title: "Item 3",
      backgroundColor: "blue",
    },
    {
      id: 4,
      title: "Item 4",
      backgroundColor: "yellow",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={styles.itemsWrap}>
        {items.map((item) => (
          <Text
            key={item.id}
            style={{
              backgroundColor: item.backgroundColor,
              ...styles.singleItem,
            }}
          >
            {item.title}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GridView;

const styles = StyleSheet.create({
  itemsWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: -(15 / 2),
    marginHorizontal: -(15 / 2),
  },
  singleItem: {
    marginHorizontal: 15 / 2,
    minWidth: 30,
    maxWidth: 30,
  },
});
