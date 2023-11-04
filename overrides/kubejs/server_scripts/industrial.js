onEvent("recipes", (event) => {
  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { tag: "forge:plastic" },
      { item: "industrialforegoing:machine_frame_pity" },
      { tag: "forge:plastic" },
      { item: "minecraft:iron_ingot" },
      { item: "minecraft:iron_ingot" },
      { item: "kubejs:mix_ingot" },
      { item: "kubejs:mix_gear" },
      { item: "kubejs:mix_ingot" },
    ],
    inputFluid: '{FluidName:"minecraft:water",Amount:250}',
    processingTime: 300,
    output: {
      item: "thermal:machine_frame",
      count: 1,
    },
  });

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { item: "kubejs:mix_ingot" },
      { item: "kubejs:mix_ingot" },
      { item: "kubejs:mix_ingot" },
      { item: "kubejs:mix_ingot" },
    ],
    inputFluid: '{FluidName:"minecraft:water",Amount:250}',
    processingTime: 300,
    output: {
      item: "kubejs:mix_gear",
      count: 1,
    },
  });
});
