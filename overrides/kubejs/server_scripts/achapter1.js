onEvent("recipes", (event) => {
  event.shapeless("2x minecraft:oak_planks", [
    "#forge:sapling",
    "#forge:sapling",
    "#forge:sapling",
    "#forge:sapling",
  ]);

  event.shaped("minecraft:crafting_table", ["SW ", "WS ", "   "], {
    S: "minecraft:oak_planks",
    W: "#forge:sapling",
  });
  event.remove({ output: "minecraft:crafting_table" });

  event.shaped("6x minecraft:stick", [" S ", " W ", " S "], {
    S: "#minecraft:planks",
    W: "#forge:sapling",
  });
  event.remove({ output: "minecraft:stick" });

  event.shapeless("16x minecraft:stick", [
    "#minecraft:logs",
    "#minecraft:logs",
  ]);

  event.shaped("kubejs:wood_gear", [" W ", "WSW", " W "], {
    S: "#minecraft:planks",
    W: "minecraft:stick",
  });

  event.recipes.createCompacting(
    "minecraft:oak_log",
    "4x minecraft:oak_planks"
  );

  event.shaped("create:water_wheel", ["KWK", "WSW", "KWK"], {
    S: "kubejs:wood_gear",
    W: "#minecraft:planks",
    K: "minecraft:stick",
  });

  event.remove({ output: "#forge:chests" });

  event.shaped("4x minecraft:chest", ["SSS", "SWS", "SSS"], {
    S: "#minecraft:logs",
    W: "kubejs:wood_gear",
  });

  event.shaped("2x minecraft:dirt", ["SW ", "WS ", "   "], {
    S: "minecraft:bone_meal",
    W: "#forge:sapling",
  });

  event.shaped("kubejs:hammer_wood", ["KWK", " S ", " S "], {
    W: "kubejs:wood_gear",
    K: "#minecraft:planks",
    S: "minecraft:stick",
  });

  event.shaped("kubejs:stone_gear", [" W ", "WSW", " W "], {
    S: "#forge:stone",
    W: "kubejs:stone_rod",
  });

  event.remove({ output: "thermal:iron_gear" });
  event.shaped("thermal:iron_gear", [" W ", "WSW", " W "], {
    S: "minecraft:iron_ingot",
    W: "kubejs:iron_rod",
  });

  event.remove({ output: "thermal:gold_gear" });
  event.shaped("thermal:gold_gear", [" W ", "WSW", " W "], {
    S: "minecraft:gold_ingot",
    W: "kubejs:gold_rod",
  });

  event.remove({ output: "thermal:diamond_gear" });
  event.shaped("thermal:diamond_gear", [" W ", "WSW", " W "], {
    S: "minecraft:diamond",
    W: "kubejs:diamond_rod",
  });

  event.shaped("2x kubejs:stone_rod", [" S ", " S ", "   "], {
    S: "minecraft:cobblestone",
  });

  event.shaped("2x kubejs:iron_rod", [" S ", " S ", "   "], {
    S: "minecraft:iron_ingot",
  });

  event.shaped("2x kubejs:gold_rod", [" S ", " S ", "   "], {
    S: "minecraft:gold_ingot",
  });

  event.shaped("2x kubejs:diamond_rod", [" S ", " S ", "   "], {
    S: "minecraft:diamond",
  });

  event.recipes.createFilling("minecraft:clay", [
    "minecraft:sand",
    Fluid.of("minecraft:water", 1000),
  ]);

  event.shaped("kubejs:hammer_stone", ["KWK", " S ", " S "], {
    W: "kubejs:stone_gear",
    K: "#forge:stone",
    S: "kubejs:stone_rod",
  });

  event.shaped("kubejs:hammer_iron", ["KWK", " S ", " S "], {
    W: "thermal:iron_gear",
    K: "minecraft:iron_ingot",
    S: "kubejs:iron_rod",
  });

  event.shaped("kubejs:hammer_gold", ["KWK", " S ", " S "], {
    W: "thermal:gold_gear",
    K: "minecraft:gold_ingot",
    S: "kubejs:gold_rod",
  });

  event.shaped("kubejs:hammer_diamond", ["KWK", " S ", " S "], {
    W: "thermal:diamond_gear",
    K: "minecraft:diamond",
    S: "kubejs:diamond_rod",
  });

  event.smithing(
    "kubejs:hammer_netherite",
    "#forge:zc",
    "minecraft:netherite_ingot"
  );

  event.shaped("kubejs:compressed_hammer_wood", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_wood",
  });

  event.shaped("kubejs:compressed_hammer_stone", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_stone",
  });

  event.shaped("kubejs:compressed_hammer_iron", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_iron",
  });

  event.shaped("kubejs:compressed_hammer_gold", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_gold",
  });

  event.shaped("kubejs:compressed_hammer_diamond", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_diamond",
  });

  event.shaped("kubejs:compressed_hammer_netherite", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_netherite",
  });

  event.shaped("create:cogwheel", [" S ", "SWS", " S "], {
    S: "#minecraft:planks",
    W: "kubejs:wood_gear",
  });

  event.remove({ id: "extrautilitiesrebirth:com_dirt_1rev_rcp" });
  event.shapeless("9x minecraft:dirt", [
    "extrautilitiesrebirth:compressed_dirt",
  ]);
});
