onEvent("cm_upgrades", (event) => {
  event.create(Item.of("kubejs:iron_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.9));

  event.create(Item.of("kubejs:brass_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.8));

  event.create(Item.of("kubejs:sky_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.7));

  event.create(Item.of("kubejs:enderium_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.6));

  event.create(Item.of("kubejs:pllet_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.3));

  event.create(Item.of("kubejs:the_ultimate_upgrade"))
    .machine([
      "custom:blood_generate",
      "custom:cobblestone_machine",
      "custom:creative_machine",
      "custom:dirt_machine",
      "custom:endstone_machine",
      "custom:gravel_machine",
      "custom:life_machine",
      "custom:modular_master",
      "custom:netherrack_machine",
      "custom:oil_refine_machine",
      "custom:pcb_master",
      "custom:plastic_machine",
      "custom:pllet_machine",
      "custom:sand_machine",
      "custom:snow_machine",
      "custom:void_oil_machine",
      "custom:fissile_machine",
    ])
    .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.01));
});

// iron
onEvent("recipes", (event) => {
  event.shaped("kubejs:iron_upgrade", ["SWS", "WSW", "SWS"], {
    S: "minecraft:iron_ingot",
    W: "create:zinc_ingot",
  });

  // brass
  event.shaped("kubejs:brass_upgrade", ["SWS", "WAW", "SWS"], {
    S: "create:brass_ingot",
    W: "create:andesite_alloy",
    A: "kubejs:iron_upgrade",
  });

  // sky
  event.shaped("kubejs:sky_upgrade", ["SWS", "WAW", "SWS"], {
    S: "naturesaura:sky_ingot",
    W: "naturesaura:chunk_loader",
    A: "kubejs:brass_upgrade",
  });

  // enderium
  event.shaped("kubejs:enderium_upgrade", ["SWS", "WAW", "SWS"], {
    S: "thermal:enderium_ingot",
    W: "thermal:upgrade_augment_3",
    A: "kubejs:sky_upgrade",
  });

  // pllet
  event.shaped("kubejs:pllet_upgrade", ["SWS", "WAW", "SWS"], {
    S: "mekanism:pellet_antimatter",
    W: "mekanism:pellet_polonium",
    A: "kubejs:enderium_upgrade",
  });

  // the_ultimate
  event.shaped("kubejs:the_ultimate_upgrade", ["SWS", "BAB", "SWS"], {
    S: "extendedcrafting:the_ultimate_ingot",
    W: "extendedcrafting:ultimate_singularity",
    A: "kubejs:pllet_upgrade",
    B: Item.of("extendedcrafting:singularity", {
      Id: "extendedcrafting:pllet",
    }),
  });
});
