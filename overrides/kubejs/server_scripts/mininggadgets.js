onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("mininggadgets:upgrade_empty", ["SBS", "AWA", "SBS"], {
    S: "extendedcrafting:redstone_ingot",
    W: "integratedterminals:chorus_glass",
    A: "minecraft:diamond",
    B: "naturesaura:gold_leaf",
  });
  event.remove({ output: "mininggadgets:upgrade_empty" });
});
