/* import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AddCard() {
  const [holder, setHolder] = useState("Esther Howard");
  const [number, setNumber] = useState("4716 9627 1635 8047");
  const [expiry, setExpiry] = useState("02/30");
  const [cvv, setCvv] = useState("000");
  const [save, setSave] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add Card</Text>
      </View>

      <View style={styles.cardPreview}>
        <View style={styles.card}>
          <Text style={styles.visa}>VISA</Text>
          <Text style={styles.cardNumber}>{number}</Text>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Card holder name</Text>
              <Text style={styles.cardValue}>{holder}</Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>Expiry date</Text>
              <Text style={styles.cardValue}>{expiry}</Text>
            </View>
          </View>
          <View style={styles.chip} />
        </View>
      </View>

      <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.label}>Card Holder Name</Text>
        <TextInput
          style={styles.input}
          value={holder}
          onChangeText={setHolder}
          placeholder="Card Holder Name"
        />

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="Card Number"
          maxLength={19}
          keyboardType="numeric"
        />

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              value={expiry}
              onChangeText={setExpiry}
              placeholder="MM/YY"
              maxLength={5}
            />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              maxLength={4}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.checkboxRow}>
          <Switch value={save} onValueChange={setSave} />
          <Text style={styles.checkboxText}>Save Card</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
  },
  backBtn: {
    marginRight: 10,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  cardPreview: {
    alignItems: "center",
    marginBottom: 18,
  },
  card: {
    width: width - 60,
    height: 140,
    borderRadius: 14,
    backgroundColor: "#bbb",
    padding: 22,
    justifyContent: "space-between",
    position: "relative",
  },
  visa: {
    position: "absolute",
    top: 18,
    right: 22,
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  cardNumber: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLabel: {
    color: "#e0e0e0",
    fontSize: 12,
  },
  cardValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  chip: {
    position: "absolute",
    bottom: 18,
    right: 22,
    width: 32,
    height: 22,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 6,
  },
  form: {
    paddingHorizontal: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    marginTop: 14,
  },
  input: {
    backgroundColor: "#fafafa",
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginTop: 6,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
  },
  half: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: "#222",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
  },
  btn: {
    width: "100%",
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 12,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
 */