import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";

export default function Sacola() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <View style={estilos.sacola}>
        <Text style={estilos.titulosacola}>Sacola de Produtos</Text>
        <View style={estilos.produtos}>
          <Image style={estilos.imagemProdutos} source={logo}/>
          <Text style={estilos.nomeProdutos}>Loja Make.C Cosméticos</Text>
        </View>
        <Text style={estilos.descricao}>
          Um kit recheado das mais diversas makes que você pode imaginar.
          Sua jornada de beleza começa aqui!
        </Text>
        <Text style={estilos.preco}>R$250,00</Text>
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },
  titulosacola: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: 'MontserratBold'
  },
  sacola: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nomeProdutos: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold"
  },
  imagemProdutos: {
    width: 75,
    height: 75,
  },
  produtos: {
     flexDirection: "row",
     paddingVertical: 12
  },
  descricao: {
    color: "#A3A3A3",
    fontStyle: "italic",
  },
  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2A9F85",
    marginTop: 8
  }
});
