onEvent("recipes", (event) => {
  event.shaped("thermal:iron_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:copper_coin",
  });

  event.shaped("thermal:gold_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:iron_coin",
  });

  event.shaped("thermal:netherite_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:gold_coin",
  });

  event.remove({ output: "thermal:copper_coin" });
  event.remove({ output: "thermal:iron_coin" });
  event.remove({ output: "thermal:gold_coin" });
  event.remove({ output: "thermal:netherite_coin" });

  event.shaped("16x thermal:netherite_coin", ["SSS", "SWS", "SSS"], {
    S: "minecraft:netherite_block",
    W: "extendedcrafting:ultimate_singularity",
  });

  event.shapeless("9x thermal:gold_coin", ["thermal:netherite_coin"]);
  event.shapeless("9x thermal:iron_coin", ["thermal:gold_coin"]);
  event.shapeless("9x thermal:copper_coin", ["thermal:iron_coin"]);
});
