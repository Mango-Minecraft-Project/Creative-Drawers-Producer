onEvent("recipes", (event) => {
  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: {
      item: "kubejs:rs_press",
    },
    ingredients: {
      middle: {
        item: "kubejs:mix_block",
      },
      top: {
        item: "kubejs:rs_press",
      },
    },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: {
      item: "kubejs:mek_press",
    },
    ingredients: {
      middle: {
        item: "kubejs:mix_block",
      },
      top: {
        item: "kubejs:mek_press",
      },
    },
  });
});
