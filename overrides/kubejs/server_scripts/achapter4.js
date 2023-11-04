onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("kubejs:pellet_wand", [" W ", " S ", " S "], {
    S: "kubejs:rainbow_rod",
    W: "mekanism:pellet_antimatter",
  });

  event.recipes
    .createSequencedAssembly(
      [Item.of("8x kubejs:wblackiron_ingot")],
      "minecraft:iron_ingot",
      [
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "minecraft:black_dye",
        ]),
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "kubejs:mixed_block",
        ]),
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "mekanism:steel_casing",
        ]),
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "kubejs:printed_refined_storage",
        ]),
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "kubejs:printed_mekanism",
        ]),
        event.recipes.createDeploying("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          "#forge:pellet_wand",
        ]),
        event.recipes.createFilling("kubejs:middle_blackiron_ingot", [
          "kubejs:middle_blackiron_ingot",
          Fluid.of("minecraft:water", 1000),
        ]),
      ]
    )
    .transitionalItem("kubejs:middle_blackiron_ingot")
    .loops(1);

  event.remove({ output: "extendedcrafting:black_iron_ingot" });

  event.custom({
    type: "mekanism:painting",
    itemInput: {
      ingredient: {
        type: "forge:difference",
        base: { item: "kubejs:wblackiron_ingot" },
        subtracted: { item: "extendedcrafting:black_iron_ingot" },
      },
    },
    chemicalInput: { amount: 32, pigment: "mekanism:black" },
    output: { item: "extendedcrafting:black_iron_ingot" },
  });

  event.recipes
    .createSequencedAssembly(
      [Item.of("create:precision_mechanism")],
      "create:golden_sheet",
      [
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "create:cogwheel",
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "create:large_cogwheel",
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "minecraft:iron_nugget",
        ]),
      ]
    )
    .transitionalItem("create:incomplete_precision_mechanism")
    .loops(10);

  event.remove({ output: "create:precision_mechanism" });

  event.recipes
    .createSequencedAssembly(
      [
        Item.of("create:precision_mechanism").withChance(0.01),
        Item.of("minecraft:oak_button").withChance(2),
      ],
      "create:golden_sheet",
      [
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "minecraft:gold_ingot",
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "minecraft:gold_ingot",
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "minecraft:gold_ingot",
        ]),
      ]
    )
    .transitionalItem("create:incomplete_precision_mechanism")
    .loops(1);

  kubejs.shaped("entangled:block", ["WAW", "ASA", "WAW"], {
    S: "mekanism:pellet_antimatter",
    W: "modularrouters:blank_module",
    A: "minecraft:obsidian",
  });
  event.remove({ id: "entangled:block" });

  kubejs.shaped("kubejs:rainbow_rod", [" W ", " S ", " W "], {
    S: "kubejs:nether_end",
    W: "kubejs:mixed_ingot",
  });

  kubejs.shapeless("minecraft:crimson_nylium", [
    "minecraft:netherrack",
    "minecraft:crimson_fungus",
  ]);
  event.remove({ id: "botania:pure_daisy/end_stone_to_cobbled_deepslate" });
  event.remove({ output: "mekanism:yellow_cake_uranium" });
  event.remove({ output: "mekanism:supercharged_coil" });

  kubejs.shaped("minecraft:shulker_shell", ["SSS", "S S", "   "], {
    S: "minecraft:amethyst_shard",
  });

  event.remove({ id: "botania:mana_infusion/ender_pearl_from_ghast_tear" });

  kubejs.shapeless("botania:glimmering_livingwood", [
    "botania:livingwood_log",
    "minecraft:glowstone_dust",
  ]);

  kubejs.shapeless("bigreactors:yellorium_ingot", [
    "immersiveengineering:ingot_uranium",
  ]);

  kubejs.shapeless("9x kubejs:mixed_ingot", ["kubejs:mixed_block"]);
  kubejs.shapeless("9x kubejs:nether_star_fragment", ["minecraft:nether_star"]);
  kubejs.shapeless("4x kubejs:nether_quartz_shard", ["minecraft:quartz"]);
  kubejs.shapeless("4x kubejs:flint_chips", ["minecraft:flint"]);
  kubejs.shapeless("9x kubejs:emerald_chips", ["minecraft:emerald"]);
  kubejs.shapeless("9x kubejs:diamond_chips", ["minecraft:diamond"]);
  kubejs.shapeless("9x kubejs:obsidian_chips", ["minecraft:obsidian"]);
});
