onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("extrautilitiesrebirth:iron_drum", ["SWS", "SNS", "SWS"], {
    S: "kubejs:mix_ingot",
    W: "minecraft:heavy_weighted_pressure_plate",
    N: "minecraft:cauldron",
  });

  kubejs.shaped("extrautilitiesrebirth:reinforced_drum", ["SWS", "SNS", "SWS"], {
    S: "minecraft:diamond",
    W: "refinedstorage:machine_casing",
    N: "extrautilitiesrebirth:iron_drum",
  });

  kubejs.shaped(
    "3x extrautilitiesrebirth:bedrockium_ingot",
    ["SSS", "SWS", "SSS"],
    {
      S: "extrautilitiesrebirth:sextuple_compressed_cobblestone",
      W: "mekanism:steel_casing",
    }
  );

  event.remove({ output: "extrautilitiesrebirth:iron_drum" });
  event.remove({ output: "extrautilitiesrebirth:reinforced_drum" });
  event.remove({ output: "extrautilitiesrebirth:bedrockium_ingot" });
});
