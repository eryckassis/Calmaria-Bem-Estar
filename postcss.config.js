module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 1rem = 16px
      propList: ["*"], // converte todas as propriedades
      minPixelValue: 1, // ignora valores menores que 1px
    },
  },
};
