import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";

import blush1 from "../../../assets/blush/brunatavares.png";
import blush2 from "../../../assets/blush/mac.png";
import blush3 from "../../../assets/blush/melu.png";
import blush4 from "../../../assets/blush/sheglam.png";

import gloss1 from "../../../assets/gloss/bocarosagloss.png";
import gloss2 from "../../../assets/gloss/chocolatefrancineehlke.png";
import gloss3 from "../../../assets/gloss/fentybeautygloss.png";
import gloss4 from "../../../assets/gloss/kiko.png";

import iluminador1 from "../../../assets/iluminador/bocarosailuminador.png";
import iluminador3 from "../../../assets/iluminador/dior.png";
import iluminador2 from "../../../assets/iluminador/fentybeauty.png";
import iluminador4 from "../../../assets/iluminador/marimariailuminador.png";

export default function Sacola() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <View style={estilos.sacola}>
        <Text style={estilos.titulosacola}>Sacola de Produtos</Text>

        {/*Lista*/}
        <View style={estilos.lista}>
          {/*BLUSH*/}
          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={blush1} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Bruna Tavares</Text>
              <Text style={estilos.descricao}>
                Blush
              </Text>
              <Text style={estilos.preco}>R$75,00</Text>
            </View>
          </View>


          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={blush2} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Mac</Text>
              <Text style={estilos.descricao}>
                Blush
              </Text>
              <Text style={estilos.preco}>R$50,00</Text>
            </View>
          </View>

          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={blush3} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Melu</Text>
              <Text style={estilos.descricao}>
                Blush
              </Text>
              <Text style={estilos.preco}>R$45,90,00</Text>
            </View>
          </View>

           <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={blush4} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Sheglam</Text>
              <Text style={estilos.descricao}>
                Blush
              </Text>
              <Text style={estilos.preco}>R$80,90</Text>
            </View>
          </View>

        {/*GLOSS*/}
        <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={gloss1} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Boca Rosa</Text>
              <Text style={estilos.descricao}>
                Lip Gloss
              </Text>
              <Text style={estilos.preco}>R$45,00</Text>
            </View>
          </View>

        <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={gloss2} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Francine Ehlke</Text>
              <Text style={estilos.descricao}>
                Chocolate Gloss
              </Text>
              <Text style={estilos.preco}>R$65,00</Text>
            </View>
          </View>

        <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={gloss3} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Fenty Beauty</Text>
              <Text style={estilos.descricao}>
                Gloss Labial
              </Text>
              <Text style={estilos.preco}>R$35,00</Text>
            </View>
          </View>

          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={gloss4} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Kiko</Text>
              <Text style={estilos.descricao}>
                3D Hydra
              </Text>
              <Text style={estilos.preco}>R$75,00</Text>
            </View>
          </View>

          {/*ILUMINADOR*/}
        <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={iluminador1} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Boca Rosa</Text>
              <Text style={estilos.descricao}>
                Glow
              </Text>
              <Text style={estilos.preco}>R$55,00</Text>
            </View>
          </View>

          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={iluminador2} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Dior</Text>
              <Text style={estilos.descricao}>
                Star Glow
              </Text>
              <Text style={estilos.preco}>R$199,99</Text>
            </View>
          </View>

          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={iluminador3} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Fenty Beauty</Text>
              <Text style={estilos.descricao}>
                Iluminador
              </Text>
              <Text style={estilos.preco}>R$29,90</Text>
            </View>
          </View>

          <View style={estilos.item}>
            <Image style={estilos.imagemProdutos} source={iluminador4} />
            <View style={estilos.divInfo}>
              <Text style={estilos.nomeProdutos}>Mari Maria</Text>
              <Text style={estilos.descricao}>
                Iluminador em pó
              </Text>
              <Text style={estilos.preco}>R$69,90</Text>
            </View>
          </View>

        </View>
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
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
    fontFamily: "MontserratBold",
  },
  sacola: {
    width: '100%',
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nomeProdutos: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  imagemProdutos: {
    width: 80,
    height: 80,
  },
  produtos: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
    color: "#800000",
    fontStyle: "italic",

    maxWidth: 200,
  },
  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#000000",
    marginTop: 8,
  },
  lista: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  item: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#fffacd",
    gap: 16,
  },
  divInfo: {
    width: "100%",
    display: 'flex',
    gap: 2,
  }
});
