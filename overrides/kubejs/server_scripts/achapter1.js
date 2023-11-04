onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shapeless("2x minecraft:oak_planks", [
    "#forge:sapling",
    "#forge:sapling",
    "#forge:sapling",
    "#forge:sapling",
  ]);

  kubejs.shaped("minecraft:crafting_table", ["SW ", "WS ", "   "], {
    S: "minecraft:oak_planks",
    W: "#forge:sapling",
  });
  event.remove({ output: "minecraft:crafting_table" });

  kubejs.shaped("6x minecraft:stick", [" S ", " W ", " S "], {
    S: "#minecraft:planks",
    W: "#forge:sapling",
  });
  event.remove({ output: "minecraft:stick" });

  kubejs.shapeless("16x minecraft:stick", [
    "#minecraft:logs",
    "#minecraft:logs",
  ]);

  kubejs.shaped("kubejs:wood_gear", [" W ", "WSW", " W "], {
    S: "#minecraft:planks",
    W: "minecraft:stick",
  });

  event.recipes.createCompacting(
    "minecraft:oak_log",
    "4x minecraft:oak_planks"
  );

  kubejs.shaped("create:water_wheel", ["KWK", "WSW", "KWK"], {
    S: "kubejs:wood_gear",
    W: "#minecraft:planks",
    K: "minecraft:stick",
  });

  event.remove({ output: "#forge:chests" });

  kubejs.shaped("4x minecraft:chest", ["SSS", "SWS", "SSS"], {
    S: "#minecraft:logs",
    W: "kubejs:wood_gear",
  });

  kubejs.shaped("2x minecraft:dirt", ["SW ", "WS ", "   "], {
    S: "minecraft:bone_meal",
    W: "#forge:sapling",
  });

  kubejs.shaped("kubejs:hammer_wood", ["KWK", " S ", " S "], {
    W: "kubejs:wood_gear",
    K: "#minecraft:planks",
    S: "minecraft:stick",
  });

  kubejs.shaped("kubejs:stone_gear", [" W ", "WSW", " W "], {
    S: "#forge:stone",
    W: "kubejs:stone_rod",
  });

  event.remove({ output: "thermal:iron_gear" });
  kubejs.shaped("thermal:iron_gear", [" W ", "WSW", " W "], {
    S: "minecraft:iron_ingot",
    W: "kubejs:iron_rod",
  });

  event.remove({ output: "thermal:gold_gear" });
  kubejs.shaped("thermal:gold_gear", [" W ", "WSW", " W "], {
    S: "minecraft:gold_ingot",
    W: "kubejs:gold_rod",
  });

  event.remove({ output: "thermal:diamond_gear" });
  kubejs.shaped("thermal:diamond_gear", [" W ", "WSW", " W "], {
    S: "minecraft:diamond",
    W: "kubejs:diamond_rod",
  });

  kubejs.shaped("2x kubejs:stone_rod", [" S ", " S ", "   "], {
    S: "minecraft:cobblestone",
  });

  kubejs.shaped("2x kubejs:iron_rod", [" S ", " S ", "   "], {
    S: "minecraft:iron_ingot",
  });

  kubejs.shaped("2x kubejs:gold_rod", [" S ", " S ", "   "], {
    S: "minecraft:gold_ingot",
  });

  kubejs.shaped("2x kubejs:diamond_rod", [" S ", " S ", "   "], {
    S: "minecraft:diamond",
  });

  event.recipes.createFilling("minecraft:clay", [
    "minecraft:sand",
    Fluid.of("minecraft:water", 1000),
  ]);

  kubejs.shaped("kubejs:hammer_stone", ["KWK", " S ", " S "], {
    W: "kubejs:stone_gear",
    K: "#forge:stone",
    S: "kubejs:stone_rod",
  });

  kubejs.shaped("kubejs:hammer_iron", ["KWK", " S ", " S "], {
    W: "thermal:iron_gear",
    K: "minecraft:iron_ingot",
    S: "kubejs:iron_rod",
  });

  kubejs.shaped("kubejs:hammer_gold", ["KWK", " S ", " S "], {
    W: "thermal:gold_gear",
    K: "minecraft:gold_ingot",
    S: "kubejs:gold_rod",
  });

  kubejs.shaped("kubejs:hammer_diamond", ["KWK", " S ", " S "], {
    W: "thermal:diamond_gear",
    K: "minecraft:diamond",
    S: "kubejs:diamond_rod",
  });

  event.smithing(
    "kubejs:hammer_netherite",
    "#forge:diamond_hammer",
    "minecraft:netherite_ingot"
  );

  kubejs.shaped("kubejs:compressed_hammer_wood", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_wood",
  });

  kubejs.shaped("kubejs:compressed_hammer_stone", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_stone",
  });

  kubejs.shaped("kubejs:compressed_hammer_iron", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_iron",
  });

  kubejs.shaped("kubejs:compressed_hammer_gold", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_gold",
  });

  kubejs.shaped("kubejs:compressed_hammer_diamond", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_diamond",
  });

  kubejs.shaped("kubejs:compressed_hammer_netherite", ["SSS", "SSS", "SSS"], {
    S: "kubejs:hammer_netherite",
  });

  kubejs.shaped("create:cogwheel", [" S ", "SWS", " S "], {
    S: "#minecraft:planks",
    W: "kubejs:wood_gear",
  });

  event.remove({ id: "extrautilitiesrebirth:com_dirt_1rev_rcp" });
  kubejs.shapeless("9x minecraft:dirt", [
    "extrautilitiesrebirth:compressed_dirt",
  ]);
});
