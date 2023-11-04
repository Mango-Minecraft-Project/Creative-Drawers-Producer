onEvent("recipes", (event) => {
  //creative energy cube
  event.custom({
    type: "extendedcrafting:shaped_table",
    tier: 4,
    pattern: [
      "ABCCDCCBE", //1
      "BFGGHGGFB", //2
      "IGJJKJJGI", //3
      "IGJLMNJGI", //4
      "OHKPQPKHR", //5
      "IGJSTUJGI", //6
      "IGJJKJJGI", //7
      "BFGGHGGFB", //8
      "VBCCDCCBW", //9
    ],
    key: {
      A: {
        item: "rftoolspower:dimensionalcell_advanced",
      },
      B: {
        item: "mekanismgenerators:fusion_reactor_port",
      },
      C: {
        item: "mekanismgenerators:fusion_reactor_frame",
      },
      D: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        count: 1,
        nbt: '{Id:"extendedcrafting:pllet"}',
      },
      E: {
        item: "thermal:charge_bench",
      },
      F: {
        item: "bigreactors:ludicrite_block",
      },
      G: {
        item: "extendedcrafting:the_ultimate_catalyst",
      },
      H: {
        item: "extendedcrafting:the_ultimate_block",
      },
      I: {
        item: "mekanismgenerators:laser_focus_matrix",
      },
      J: {
        item: "mekanism:sps_casing",
      },
      K: {
        item: "mekanism:sps_port",
      },
      L: {
        item: "powah:furnator_nitro",
      },
      M: {
        item: "industrialforegoing:mycelial_reactor",
      },
      N: {
        item: "powah:magmator_nitro",
      },
      O: {
        item: "fluxnetworks:flux_plug",
      },
      P: {
        item: "extendedcrafting:ender_alternator",
      },
      Q: {
        item: "custom:ultimate_controller",
      },
      R: {
        item: "fluxnetworks:flux_point",
      },
      S: {
        item: "mekanismgenerators:wind_generator",
      },
      T: {
        item: "mekanismgenerators:bio_generator",
      },
      U: {
        item: "mekanismgenerators:advanced_solar_generator",
      },
      V: {
        item: "rftoolspower:cell3",
      },
      W: {
        item: "powah:energy_cell_nitro",
      },
    },
    result: {
      type: "forge:nbt",
      item: "mekanism:creative_energy_cube",
      count: 1,
      nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
    },
  });

  //ae
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "ae2:dense_energy_cell",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "ae2:creative_energy_cell",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "megacells:fluid_storage_cell_256m",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "ae2:creative_fluid_cell",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "megacells:item_storage_cell_256m",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "ae2:creative_item_cell",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "megacells:chemical_storage_cell_256m",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "appmek:creative_chemical_cell",
    },
  });

  //thermal
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "thermal:rf_coil_storage_augment",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "thermal:rf_coil_creative_augment",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "thermal:fluid_tank_augment",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "thermal:fluid_tank_creative_augment",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "thermal:machine_speed_augment",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "thermal:machine_efficiency_creative_augment",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "thermal:machine_catalyst_augment",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "thermal:machine_catalyst_creative_augment",
    },
  });

  //rs
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        type: "forge:nbt",
        item: "mekanism:creative_energy_cube",
        count: 1,
        nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "refinedstorage:creative_controller",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "rsinfinitybooster:dimension_card",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "creativewirelesstransmitter:creative_wireless_transmitter",
    },
  });

  event.remove({
    output: "creativewirelesstransmitter:creative_wireless_transmitter",
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "extradisks:infinite_storage_block",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      type: "forge:nbt",
      item: "refinedstorage:creative_storage_disk",
      count: 1,
      nbt: "{Id:[I;1409543060,-224702526,-1087458442,1280427025]}",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "extradisks:infinite_fluid_storage_block",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      type: "forge:nbt",
      item: "refinedstorage:creative_fluid_storage_disk",
      count: 1,
      nbt: "{Id:[I;525951307,1282293853,-1798453667,656802644]}",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        type: "forge:nbt",
        item: "universalgrid:wireless_universal_grid",
        count: 1,
        nbt: "{gridType:0}",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      type: "forge:nbt",
      item: "universalgrid:creative_wireless_universal_grid",
      count: 1,
      nbt: "{gridType:0}",
    },
  });

  //create

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "minecraft:chest",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "create:creative_crate",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "create:blaze_cake",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "create:creative_blaze_cake",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "create:fluid_tank",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "create:creative_fluid_tank",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "create:steam_engine",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "create:creative_motor",
    },
  });

  //pneu
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "pneumaticcraft:compressed_iron_block",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "pneumaticcraft:creative_compressed_iron_block",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "pneumaticcraft:upgrade_matrix",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "pneumaticcraft:creative_upgrade",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "pneumaticcraft:solar_compressor",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "pneumaticcraft:creative_compressor",
    },
  });

  //rftools
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "rftoolspower:dimensionalcell_advanced",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "rftoolspower:dimensionalcell_creative",
    },
  });

  //mek
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "mekanism:ultimate_fluid_tank",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "mekanism:creative_fluid_tank",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AAAAAAAAA",
    ],
    key: {
      A: {
        item: "extendedcrafting:ultimate_singularity",
      },
      B: {
        item: "extendedcrafting:the_ultimate_ingot",
      },
      C: {
        item: "mekanism:ultimate_chemical_tank",
      },
      D: {
        item: "kubejs:creative_core",
      },
    },
    result: {
      item: "mekanism:creative_chemical_tank",
    },
  });

  //creative upgrade
  event.custom({
    type: "extendedcrafting:shapeless_table",
    tier: 2,
    ingredients: [
      {
        item: "creativewirelesstransmitter:creative_wireless_transmitter",
      },
      {
        item: "rftoolspower:dimensionalcell_creative",
      },
      {
        item: "refinedstorage:creative_fluid_storage_disk",
      },
      {
        item: "refinedstorage:creative_storage_disk",
      },
      {
        item: "pneumaticcraft:creative_upgrade",
      },
      {
        item: "pneumaticcraft:creative_compressed_iron_block",
      },
      {
        item: "pneumaticcraft:creative_compressor",
      },
      {
        item: "refinedstorage:creative_controller",
      },
      {
        item: "mekanism:creative_fluid_tank",
      },
      {
        item: "mekanism:creative_chemical_tank",
      },
      {
        type: "forge:nbt",
        item: "mekanism:creative_energy_cube",
        count: 1,
        nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
      },
      {
        item: "storagedrawers:creative_storage_upgrade",
      },
      {
        item: "thermal:rf_coil_creative_augment",
      },
      {
        item: "thermal:fluid_tank_creative_augment",
      },
      {
        item: "thermal:machine_efficiency_creative_augment",
      },
      {
        item: "thermal:machine_catalyst_creative_augment",
      },
      {
        type: "forge:nbt",
        item: "universalgrid:creative_wireless_universal_grid",
        count: 1,
        nbt: "{gridType:0}",
      },
      {
        item: "create:creative_blaze_cake",
      },
      {
        item: "create:creative_crate",
      },
      {
        item: "ae2:creative_energy_cell",
      },
      {
        item: "ae2:creative_item_cell",
      },
      {
        item: "ae2:creative_fluid_cell",
      },
      {
        item: "appmek:creative_chemical_cell",
      },
      {
        item: "create:creative_motor",
      },
      {
        item: "create:creative_fluid_tank",
      },
    ],
    result: {
      item: "storagedrawers:creative_vending_upgrade",
    },
  });
});
