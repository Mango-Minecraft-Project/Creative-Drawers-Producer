onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("laserio:logic_chip", ["SWS", "ABA", "SWS"], {
    S: "extendedcrafting:redstone_ingot",
    W: "naturesaura:gold_leaf",
    A: "minecraft:clay_ball",
    B: "extendedcrafting:nether_star_block",
  });
  event.remove({ output: "laserio:logic_chip" });
  event.remove({ output: "laserio:logic_chip_raw" });
});
