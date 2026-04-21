import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  Text,
  Button,
  TextInput,
  Avatar,
  HelperText,
  Searchbar,
  Card,
  RadioButton,
  Chip,
  Portal,
  Snackbar,
  FAB,
  Checkbox,
  Menu,
  Dialog,
} from "react-native-paper";

export default function Paper() {
  const [emri, setEmri] = useState("");
  const [fjalekalimi, setFjalekalimi] = useState("");
  const [checked, setChecked] = useState(false);
  const [kursi, setKursi] = useState("react-native");
  const [kerko, setKerko] = useState("");

  const [menuVisible, setMenuVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const kaGabim = emri.length > 0 && emri.length < 3;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Appbar.Header>
        <Appbar.Content title="React Native Paper" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Mirë se vini</Text>

        {/* AVATAR */}
        <Text style={styles.sectionTitle}>Avatar</Text>
        <View style={styles.row}>
          <Avatar.Icon size={70} icon="account" />
          <Avatar.Text size={50} label="FP" />
        </View>

        {/* BUTTONS */}
        <Text style={styles.sectionTitle}>Button</Text>
        <Button onPress={() => alert("Text")}>Text</Button>
        <Button mode="contained" style={styles.spaceTop}>
          Contained
        </Button>

        {/* INPUT */}
        <TextInput
          label="Emri"
          value={emri}
          onChangeText={setEmri}
          style={styles.input}
        />
        <HelperText type="error" visible={kaGabim}>
          Minimum 3 shkronja
        </HelperText>

        <TextInput
          label="Fjalëkalimi"
          secureTextEntry
          value={fjalekalimi}
          onChangeText={setFjalekalimi}
          style={styles.input}
        />

        {/* SEARCH */}
        <Searchbar
          placeholder="Kerko..."
          value={kerko}
          onChangeText={setKerko}
        />

        {/* CARD */}
        <Card style={styles.card}>
          <Card.Title title="Kursi" subtitle="React Native" />
          <Card.Content>
            <Text>Shembull Card</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Mëso më shumë</Button>
            <Button onPress={() => setSnackbarVisible(true)}>
              Regjistrohu
            </Button>
          </Card.Actions>
        </Card>

        {/* CHECKBOX */}
        <Text style={styles.sectionTitle}>Checkbox</Text>
        <View style={styles.row}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />
          <Text>Pranoj kushtet</Text>
        </View>

        {/* RADIO */}
        <RadioButton.Group value={kursi} onValueChange={setKursi}>
          <RadioButton.Item label="React Native" value="react-native" />
          <RadioButton.Item label="PHP" value="php" />
        </RadioButton.Group>

        {/* CHIPS */}
        <Text style={styles.sectionTitle}>Chips</Text>
        <View style={styles.rowWrap}>
          <Chip style={styles.chip}>JS</Chip>
          <Chip style={styles.chip}>PHP</Chip>
        </View>

        {/* MENU */}
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button onPress={() => setMenuVisible(true)}>
              Shfaq Menu
            </Button>
          }
        >
          <Menu.Item title="Profili" />
          <Menu.Item title="Settings" />
        </Menu>

        {/* DIALOG */}
        <Button onPress={() => setDialogVisible(true)}>
          Shfaq Dialog
        </Button>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
          >
            <Dialog.Title>Konfirmim</Dialog.Title>
            <Dialog.Content>
              <Text>A dëshiron të vazhdosh?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setDialogVisible(false)}>Jo</Button>
              <Button onPress={() => setDialogVisible(false)}>Po</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Button
          mode="contained"
          style={styles.spaceTop}
          onPress={() => alert(`Mirë se erdhe ${emri}`)}
        >
          Submit
        </Button>
      </ScrollView>

      {/* SNACKBAR */}
      <Portal>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
        >
          U krye me sukses
        </Snackbar>
      </Portal>

      {/* FAB */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => alert("FAB")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
  sectionTitle: { marginTop: 20, fontWeight: "bold" },
  input: { marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  rowWrap: { flexDirection: "row", flexWrap: "wrap" },
  chip: { margin: 5 },
  spaceTop: { marginTop: 10 },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});