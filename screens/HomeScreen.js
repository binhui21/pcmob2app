import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, Title, Paragraph, List } from "react-native-paper";

function WelcomeScreen() {
  const [expanded, setExpanded] = React.useState(true);
  return (
    <View>
      <Title style={styles.title}>Basket Throwing Tournament 2020</Title>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome</Title>
          <Paragraph>This is a basket throwing tournament.</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri:
              "https://images.crateandbarrel.com/is/image/Crate/ArtesiaServeBasketsFHF15/$web_pdp_main_carousel_med$/190411134747/artesia-bread-baskets.jpg",
          }}
        />
      </Card>

      <List.AccordionGroup>
        <List.Accordion title="What is this?" id="1">
          <List.Item title="Exactly what the title says. A basket throwing competition!" />
        </List.Accordion>
        <List.Accordion title="Who is this by?" id="2">
          <List.Item title="Some boring guy." />
        </List.Accordion>
        <List.Accordion title="Why is this?" id="3">
          <List.Item title="Waste time." />
        </List.Accordion>
      </List.AccordionGroup>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
