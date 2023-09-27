import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhe from './componentes/Detalhe';

export default function Sacola() {
  return ( <>
    <Topo/>
    <View style={estilos.fundo}>
      <Detalhe/>
        </View>
    </>
  );
}

const estilos = StyleSheet.create({

  sacola: {
    width: '100%',
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  divInfo: {
    width: "100%",
    display: 'flex',
    gap: 2,
  },
  fundo: {
    backgroundColor: "#ffffe0"
  }
});
