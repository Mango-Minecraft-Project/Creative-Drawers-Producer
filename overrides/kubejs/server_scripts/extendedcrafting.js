onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shapeless("2x extendedcrafting:redstone_ingot", [
    "kubejs:mix_ingot",
    "minecraft:redstone",
  ]);

  event.remove({ id: "extendedcrafting:redstone_ingot" });

  event.custom({
    type: "extendedcrafting:combination",
    powerCost: 100000,
    input: { item: "extendedcrafting:black_iron_slate" },
    ingredients: [
      { item: "extendedcrafting:luminessence" },
      { item: "extendedcrafting:redstone_ingot" },
      { item: "extendedcrafting:redstone_ingot" },
      { item: "extendedcrafting:luminessence" },
    ],
    result: { item: "extendedcrafting:redstone_component" },
  });
  event.remove({ output: "extendedcrafting:redstone_component" });

  event.custom({
    type: "extendedcrafting:combination",
    powerCost: 100000,
    input: { item: "extendedcrafting:black_iron_slate" },
    ingredients: [
      { item: "extendedcrafting:luminessence" },
      { item: "extendedcrafting:crystaltine_ingot" },
      { item: "extendedcrafting:crystaltine_ingot" },
      { item: "extendedcrafting:luminessence" },
    ],
    result: { item: "extendedcrafting:crystaltine_component" },
  });
  event.remove({ output: "extendedcrafting:crystaltine_component" });

  event.custom({
    type: "extendedcrafting:combination",
    powerCost: 100000,
    input: { item: "minecraft:iron_ingot" },
    ingredients: [
      { item: "minecraft:ender_pearl" },
      { item: "extendedcrafting:redstone_component" },
      { item: "extendedcrafting:crystaltine_component" },
      { item: "minecraft:ender_pearl" },
    ],
    result: { item: "extendedcrafting:ender_ingot" },
  });

  event.remove({ output: "extendedcrafting:ender_ingot" });

  event.custom({
    type: "extendedcrafting:shapeless_table",
    tier: 4,
    ingredients: [
      { item: "minecraft:iron_ingot" },
      { item: "minecraft:copper_ingot" },
      { item: "minecraft:gold_ingot" },
      { item: "minecraft:netherite_ingot" },
      { item: "dustrial_decor:rusty_iron_ingot" },
      { item: "advancednetherite:netherite_iron_ingot" },
      { item: "advancednetherite:netherite_gold_ingot" },
      { item: "advancednetherite:netherite_emerald_ingot" },
      { item: "advancednetherite:netherite_diamond_ingot" },
      { item: "mekanism:ingot_osmium" },
      { item: "mekanism:ingot_refined_glowstone" },
      { item: "mekanism:ingot_refined_obsidian" },
      { item: "extendedcrafting:ender_ingot" },
      { item: "extendedcrafting:redstone_ingot" },
      { item: "extendedcrafting:black_iron_ingot" },
      { item: "immersiveengineering:ingot_steel" },
      { item: "immersiveengineering:ingot_uranium" },
      { item: "immersiveengineering:ingot_aluminum" },
      { item: "spirit:soul_steel_ingot" },
      { item: "bigreactors:cyanite_ingot" },
      { item: "create:zinc_ingot" },
      { item: "create:brass_ingot" },
      { item: "pneumaticcraft:ingot_iron_compressed" },
      { item: "thermal:tin_ingot" },
      { item: "thermal:silver_ingot" },
      { item: "thermal:nickel_ingot" },
      { item: "thermal:lead_ingot" },
      { item: "thermal:bronze_ingot" },
      { item: "thermal:electrum_ingot" },
      { item: "thermal:invar_ingot" },
      { item: "thermal:constantan_ingot" },
      { item: "thermal:signalum_ingot" },
      { item: "thermal:enderium_ingot" },
      { item: "industrialforegoing:pink_slime_ingot" },
      { item: "kubejs:mix_ingot" },
    ],
    result: { item: "extendedcrafting:the_ultimate_ingot" },
  });

  event.custom({
    type: "extendedcrafting:shapeless_ender_crafter",
    ingredients: [
      { item: "kubejs:mix_ingot" },
      { item: "minecraft:ender_pearl" },
    ],
    result: {
      item: "extendedcrafting:ender_ingot",
      count: 4,
    },
  });

  event.custom({
    type: "extendedcrafting:compressor",
    powerCost: 2000000000,
    inputCount: 10000,
    powerRate: 100000000,
    ingredient: { item: "storagedrawers:emerald_storage_upgrade" },
    catalyst: { item: "extendedcrafting:the_ultimate_catalyst" },
    result: { item: "storagedrawers:creative_storage_upgrade" },
  });

  event.custom({
    type: "extendedcrafting:compressor",
    powerCost: 2000000000,
    inputCount: 10000,
    powerRate: 100000000,
    ingredient: { item: "pipez:ultimate_upgrade" },
    catalyst: { item: "extendedcrafting:the_ultimate_catalyst" },
    result: { item: "pipez:infinity_upgrade" },
  });

  event.custom({
    type: "extendedcrafting:compressor",
    powerCost: 500000000000,
    inputCount: 300,
    powerRate: 1000000000,
    ingredient: {
      item: "extrautilitiesrebirth:octuple_compressed_cobblestone",
    },
    catalyst: { item: "extendedcrafting:the_ultimate_catalyst" },
    result: { item: "minecraft:bedrock" },
  });

  event.remove({ id: "bloodmagic:array/movement" });
  event.remove({ id: "bloodmagic:array/day" });
  event.remove({ id: "bloodmagic:array/updraft" });
  event.remove({ id: "bloodmagic:array/bounce" });
  event.remove({ id: "bloodmagic:array/night" });
  event.remove({ id: "bloodmagic:array/spike" });
});
