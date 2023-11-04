onEvent("recipes", (event) => {
  const { kubejs, minecraft } = event.recipes;

  kubejs.shapeless("2x kubejs:black_mixed_ingot", [
    "minecraft:coal",
    "kubejs:mixed_ingot",
  ]);
  minecraft.smelting("bigreactors:graphite_ingot", "kubejs:black_mixed_ingot");
  event.remove({ output: "bigreactors:graphite_ingot" });
  event.remove({ output: "bigreactors:basic_reactorcasing" });
  event.remove({ output: "bigreactors:basic_turbinecasing" });
  event.remove({ id: "bigreactors:reactor/reinforced/casing" });
  event.remove({ id: "bigreactors:turbine/reinforced/casing" });
  event.remove({ id: "bigreactors:smelting/graphite_from_coalblock" });
  event.remove({ id: "bigreactors:blasting/graphite_from_coalblock" });

  kubejs.shape("bigreactors:basic_reactorcasing", ["SWS", "WAW", "SWS"], {
    S: "kubejs:mixed_ingot",
    W: "bigreactors:graphite_ingot",
    A: "thermal:machine_frame",
  });

  kubejs.shape("bigreactors:basic_turbinecasing", ["SWS", "WAW", "SWS"], {
    S: "kubejs:mixed_ingot",
    W: "bigreactors:cyanite_ingot",
    A: "thermal:machine_frame",
  });

  kubejs.shape("bigreactors:reinforced_reactorcasing", ["SWS", "WAW", "SWS"], {
    S: "immersiveengineering:ingot_steel",
    W: "bigreactors:graphite_ingot",
    A: "thermal:machine_frame",
  });

  kubejs.shape("bigreactors:reinforced_turbinecasing", ["SWS", "WAW", "SWS"], {
    S: "immersiveengineering:ingot_steel",
    W: "bigreactors:cyanite_ingot",
    A: "thermal:machine_frame",
  });
});
