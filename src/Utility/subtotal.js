const calTotal = (subTotal, text, shipping) => {
  return parseInt(subTotal) + parseInt(text) + parseInt(shipping);
};

export default calTotal;
