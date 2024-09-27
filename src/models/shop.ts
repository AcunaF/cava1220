import { Schema, model, models } from "mongoose";

const userShop = new Schema({

  producto: {
    nombre: String,
    type: String,
    precio: String,
    cantidad: Number,
    required: [true, "Product is required"],
  },

  formaDePago: {
    type: String,
    required: [true, "Method pay is required"],
  },

  envio: {
    direccion: String,
    numero: true,
  },

});

const Shop = models.Shop || model("Shop", userShop);

export default Shop;
