onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("kubejs:mixed_ingot", ["ABC", "DEF", "GHL"], {
    A: "minecraft:nether_star",
    B: "minecraft:ender_pearl",
    C: "minecraft:diamond",
    D: "minecraft:quartz",
    E: "minecraft:slime_ball",
    F: "minecraft:blaze_powder",
    G: "minecraft:gold_ingot",
    H: "minecraft:netherite_ingot",
    L: "thermal:silver_ingot",
  });

  kubejs.shaped("kubejs:mixed_block", ["SSS", "SSS", "SSS"], {
    S: "kubejs:mixed_ingot",
  });

  kubejs.shaped("thermal:rf_coil", ["  S", " W ", "S  "], {
    W: "kubejs:mixed_ingot",
    S: "minecraft:redstone",
  });

  kubejs.shaped("thermal:redstone_servo", [" S ", " W ", " S "], {
    W: "kubejs:mixed_ingot",
    S: "minecraft:redstone",
  });

  event.remove({ output: "thermal:redstone_servo" });
  event.remove({ output: "thermal:rf_coil" });

  kubejs.shapeless("4x compactcrafting:field_projector", [
    "refinedstorage:machine_casing",
    "compactcrafting:projector_dish",
  ]);
  event.remove({ output: "compactcrafting:field_projector" });

  kubejs.shaped("compactcrafting:projector_dish", ["KS ", "KWS", "KS "], {
    S: "kubejs:mixed_ingot",
    K: "#c:glass_panes",
    W: "minecraft:ender_eye",
  });
  event.remove({ output: "compactcrafting:projector_dish" });

  kubejs.shaped("mekanism:metallurgic_infuser", ["KAK", "SWS", "KAK"], {
    K: "kubejs:mixed_ingot",
    S: "thermal:rf_coil",
    W: "mekanism:ingot_osmium",
    A: "mekanism:steel_casing",
  });
  event.remove({ output: "mekanism:metallurgic_infuser" });

  kubejs.shaped("ae2:inscriber", ["KAK", " WK", "KAK"], {
    K: "kubejs:mixed_ingot",
    W: "mekanism:steel_casing",
    A: "minecraft:sticky_piston",
  });
  event.remove({ output: "ae2:inscriber" });

  kubejs.shapeless("2x kubejs:mixed_refined_storage_block", [
    "kubejs:mixed_block",
    "refinedstorage:quartz_enriched_iron_block",
  ]);
  kubejs.shapeless("2x kubejs:mixed_mekanism_block", [
    "kubejs:mixed_block",
    "immersiveengineering:storage_steel",
  ]);
});
