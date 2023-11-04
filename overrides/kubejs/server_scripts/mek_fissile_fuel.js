onEvent("recipes", (event) => {
  //ender
  event.shaped("minecraft:ender_chest", ["SSS", "SWS", "SSS"], {
    S: "minecraft:obsidian",
    W: "minecraft:ender_eye",
  });
  //remove
  event.remove({ id: "mekanism:pigment_mixing/cyan_white_to_aqua" });
  event.remove({ id: "mekanism:separator/brine" });

  //painting
  event.custom({
    type: "mekanism:painting",
    itemInput: {
      ingredient: {
        type: "forge:difference",
        base: { item: "ae2:matter_ball" },
        subtracted: { item: "kubejs:aqua_ball" },
      },
    },
    chemicalInput: { amount: 100, pigment: "mekanism:aqua" },
    output: { item: "kubejs:aqua_ball" },
  });

  //oxidizer
  event.custom({
    type: "mekanism:oxidizing",
    input: { ingredient: { item: "kubejs:aqua_ball" } },
    output: { gas: "mekanism:chlorine", amount: 1000 },
  });

  //chemical_infusing
  event.custom({
    type: "mekanism:chemical_infusing",
    leftInput: { amount: 7, gas: "mekanism:chlorine" },
    rightInput: { amount: 3, gas: "mekanismgenerators:fusion_fuel" },
    output: { gas: "mekanism:uranium_hexafluoride", amount: 10 },
  });
});
