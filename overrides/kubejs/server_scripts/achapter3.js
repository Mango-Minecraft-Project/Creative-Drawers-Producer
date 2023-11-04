onEvent("recipes", (event) => {
  event.shaped("kubejs:mix_ingot", ["ABC", "DEF", "GHL"], {
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

  event.shaped("kubejs:mix_block", ["SSS", "SSS", "SSS"], {
    S: "kubejs:mix_ingot",
  });

  event.shaped("thermal:rf_coil", ["  S", " W ", "S  "], {
    W: "kubejs:mix_ingot",
    S: "minecraft:redstone",
  });

  event.shaped("thermal:redstone_servo", [" S ", " W ", " S "], {
    W: "kubejs:mix_ingot",
    S: "minecraft:redstone",
  });

  event.remove({ output: "thermal:redstone_servo" });
  event.remove({ output: "thermal:rf_coil" });

  event.shapeless("4x compactcrafting:field_projector", [
    "refinedstorage:machine_casing",
    "compactcrafting:projector_dish",
  ]);
  event.remove({ output: "compactcrafting:field_projector" });

  event.shaped("compactcrafting:projector_dish", ["KS ", "KWS", "KS "], {
    S: "kubejs:mix_ingot",
    K: "#c:glass_panes",
    W: "minecraft:ender_eye",
  });
  event.remove({ output: "compactcrafting:projector_dish" });

  event.shaped("mekanism:metallurgic_infuser", ["KAK", "SWS", "KAK"], {
    K: "kubejs:mix_ingot",
    S: "thermal:rf_coil",
    W: "mekanism:ingot_osmium",
    A: "mekanism:steel_casing",
  });
  event.remove({ output: "mekanism:metallurgic_infuser" });

  event.shaped("ae2:inscriber", ["KAK", " WK", "KAK"], {
    K: "kubejs:mix_ingot",
    W: "mekanism:steel_casing",
    A: "minecraft:sticky_piston",
  });
  event.remove({ output: "ae2:inscriber" });

  event.shapeless("2x kubejs:mix_rs_block", [
    "kubejs:mix_block",
    "refinedstorage:quartz_enriched_iron_block",
  ]);
  event.shapeless("2x kubejs:mix_mek_block", [
    "kubejs:mix_block",
    "immersiveengineering:storage_steel",
  ]);
});
