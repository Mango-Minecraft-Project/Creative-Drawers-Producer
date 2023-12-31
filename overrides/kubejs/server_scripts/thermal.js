onEvent("recipes", (event) => {
  const { kubejs, thermal } = event.recipes;

  thermal
    .smelter("thermal:machine_frame", [
      "industrialforegoing:machine_frame_pity",
      "kubejs:mixed_block",
    ])
    .energy(2000);

  event.remove({ output: "thermal:machine_frame" });

  thermal
    .smelter("rftoolsbase:machine_frame", [
      "thermal:redstone_servo",
      "thermal:rf_coil",
      "thermal:machine_frame",
    ])
    .energy(2000);

  event.remove({ output: "rftoolsbase:machine_frame" });

  thermal
    .smelter("3x pneumaticcraft:compressed_iron_block", "kubejs:mixed_block")
    .energy(2000);

  thermal
    .smelter("3x pneumaticcraft:ingot_iron_compressed", "kubejs:mixed_ingot")
    .energy(2000);

  thermal
    .smelter("2x immersiveengineering:ingot_steel", [
      "pneumaticcraft:ingot_iron_compressed",
      "kubejs:mixed_ingot",
    ])
    .energy(2000);

  thermal
    .smelter("industrialforegoing:machine_frame_pity", [
      "4x #forge:cobblestone",
      "4x #minecraft:planks",
    ])
    .energy(2000);

  kubejs.shaped("thermal:machine_smelter", [" C ", "SWS", "BAB"], {
    S: "#forge:sand",
    B: "thermal:invar_gear",
    A: "thermal:rf_coil",
    W: "thermal:machine_furnace",
    C: "minecraft:blast_furnace",
  });

  event.remove({ output: "thermal:machine_smelter" });

  thermal
    .bottler("bloodmagic:blankslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 100),
      "#forge:stone",
    ])
    .energy(500);
  thermal
    .bottler("bloodmagic:reinforcedslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 200),
      "bloodmagic:blankslate",
    ])
    .energy(1000);
  thermal
    .bottler("bloodmagic:infusedslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 1000),
      "bloodmagic:reinforcedslate",
    ])
    .energy(1500);
  thermal
    .bottler("bloodmagic:demonslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 1200),
      "bloodmagic:infusedslate",
    ])
    .energy(2000);
  thermal
    .bottler("bloodmagic:etherealslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 1500),
      "bloodmagic:demonslate",
    ])
    .energy(2500);
  thermal
    .crucible(
      Fluid.of("bloodmagic:life_essence_fluid", 1000),
      "kubejs:coagulated_blood"
    )
    .energy(200);
  thermal
    .bottler("bloodmagic:etherealslate", [
      Fluid.of("bloodmagic:life_essence_fluid", 3000),
      "#forge:cobblestone",
    ])
    .energy(2500);
});
