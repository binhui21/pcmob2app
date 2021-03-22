import * as React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { List, Title, Card, Paragraph } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const contactsData = [
  {
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Adam ellis",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
  {
    name: "Papaya Tan",
    title: "CMO",
    company: "Papayas Inc",
    pic: "https://randomuser.me/portraits/men/20.jpg",
  },
];

function ContactHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item, i) => {
          return (
            <List.Item
              key={i}
              title={item.name}
              description={(item.company, item.title)}
              left={(props) => (
                <Image
                  {...props}
                  style={styles.icon}
                  source={{ uri: item.pic }}
                />
              )}
              onPress={() =>
                navigation.navigate("ContactDetail", {
                  name: item.name,
                  title: item.title,
                  company: item.company,
                  pic: item.pic,
                })
              }
            />
          );
        })}
      </View>
    </View>
  );
}

function ContactDetailScreen({ route, navigation }) {
  const { name, company, title, pic } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ margin: 10, width: "80%" }}>
        <Card.Cover source={{ uri: pic }} />
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{title}</Paragraph>
          <Paragraph>{company}</Paragraph>
        </Card.Content>
      </Card>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function ContactScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactHome" component={ContactHomeScreen} />
      <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
