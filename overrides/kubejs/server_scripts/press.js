onEvent("recipes", (event) => {
  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: { item: "kubejs:refined_storage_press" },
    ingredients: {
      middle: { item: "kubejs:mix_block" },
      top: { item: "kubejs:refined_storage_press" },
    },
  });

  event.custom({
    type: "ae2:inscriber",
    mode: "inscribe",
    result: { item: "kubejs:mekanism_press" },
    ingredients: {
      middle: { item: "kubejs:mix_block" },
      top: { item: "kubejs:mekanism_press" },
    },
  });
});
