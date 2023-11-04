onEvent("recipes", (event) => {
  event.custom({
    input: {
      item: "minecraft:spruce_log",
    },
    result: "minecraft:stripped_spruce_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:2}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      item: "minecraft:oak_log",
    },
    result: "minecraft:stripped_oak_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:2}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      item: "minecraft:jungle_log",
    },
    result: "minecraft:stripped_jungle_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:2}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      tag: "minecraft:logs",
    },
    result: "minecraft:air",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:1}',
    defaultRecipe: true,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      item: "minecraft:dark_oak_log",
    },
    result: "minecraft:stripped_dark_oak_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:3}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      item: "minecraft:birch_log",
    },
    result: "minecraft:stripped_birch_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:2}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });

  event.custom({
    input: {
      item: "minecraft:acacia_log",
    },
    result: "minecraft:stripped_acacia_log",
    breakChance: 0.01,
    output: '{FluidName:"industrialforegoing:latex",Amount:4}',
    defaultRecipe: false,
    type: "industrialforegoing:fluid_extractor",
  });
});
