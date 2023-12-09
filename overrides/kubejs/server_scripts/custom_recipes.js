onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("custom:cobblestone_machine", ["ASA", "AWA", "ASA"], {
    S: "extrautilitiesrebirth:quadruple_compressed_cobblestone",
    W: "#forge:tools/stone_hammerss",
    A: "extrautilitiesrebirth:triple_compressed_cobblestone",
  });

  kubejs.shaped("custom:gravel_machine", ["SSS", "SWS", "SSS"], {
    S: "extrautilitiesrebirth:double_compressed_gravel",
    W: "#forge:tools/stone_hammerss",
  });

  kubejs.shaped("custom:dirt_machine", ["SSS", "SWS", "SSS"], {
    S: "extrautilitiesrebirth:double_compressed_dirt",
    W: "#forge:tools/stone_hammerss",
  });

  kubejs.shaped("custom:sand_machine", ["SAS", "SWS", "SBS"], {
    S: "minecraft:clay",
    B: "create:depot",
    W: "create:fluid_tank",
    A: "create:spout",
  });

  kubejs.shaped("custom:void_oil_machine", ["SBS", "QWA", "SBS"], {
    S: "compactmachines:wall",
    B: "thermal:upgrade_augment_3",
    W: "thermal:machine_refinery",
    A: "pneumaticcraft:transistor",
    Q: "pneumaticcraft:capacitor",
  });

  kubejs.shaped("custom:pcb_master", ["SBS", "BWB", "SBS"], {
    S: "pneumaticcraft:printed_circuit_board",
    B: "custom:void_oil_machine",
    W: "computercraft:computer_advanced",
  });

  kubejs.shaped("custom:oil_refine_machine", ["SBS", "BWB", "SBS"], {
    S: "pneumaticcraft:smooth_plastic_brick_yellow",
    B: "mob_grinding_utils:jumbo_tank",
    W: "pneumaticcraft:solar_compressor",
  });

  kubejs.shaped("custom:plastic_machine", ["SBS", "BWB", "SBS"], {
    S: "compactmachines:wall",
    B: "mob_grinding_utils:jumbo_tank",
    W: "custom:void_oil_machine",
  });

  kubejs.shaped("custom:life_machine", ["SBS", "AWA", "SBS"], {
    S: "bloodmagic:blankrune",
    B: "bloodmagic:bettercapacityrune",
    W: "bloodmagic:largebloodstonebrick",
    A: "bloodmagic:etherealslate",
  });

  kubejs.shaped("custom:blood_generate", ["SBS", "AWA", "SBS"], {
    S: "bloodmagic:blankrune",
    B: "extrautilitiesrebirth:octuple_compressed_cobblestone",
    W: "custom:void_oil_machine",
    A: "bloodmagic:etherealslate",
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "ABBBCBBBA",
      "BDEEFEEDB",
      "BEGHHHGEB",
      "BEHIIIHEB",
      "CFHIJIHFC",
      "BEHIIIHEB",
      "BEGHHHGEB",
      "BDEEFEEDB",
      "ABBBCBBBA",
    ],
    key: {
      A: { item: "custom:ultimate_controller" },
      B: { item: "extendedcrafting:the_ultimate_ingot" },
      C: { item: "extendedcrafting:ultimate_singularity" },
      D: { item: "pipez:infinity_upgrade" },
      E: { item: "extendedcrafting:the_ultimate_catalyst" },
      F: { item: "kubejs:ultimate_pellet_cell" },
      G: { item: "occultism:storage_stabilizer_tier4" },
      H: { item: "minecraft:bedrock" },
      I: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        count: 1,
        nbt: '{Id:"extendedcrafting:pllet"}',
      },
      J: { item: "refinedproxy:refined_proxy" },
    },
    result: { item: "custom:creative_machine" },
  });

  kubejs.shaped("custom:fissile_machine", ["SBS", "BWB", "SBS"], {
    S: "mekanism:sps_port",
    B: "mekanism:sps_casing",
    W: Item.of("extendedcrafting:singularity", `{Id:"extendedcrafting:pllet"}`),
  });
});
