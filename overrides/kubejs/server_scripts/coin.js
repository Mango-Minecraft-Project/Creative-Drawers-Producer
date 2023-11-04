onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("thermal:iron_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:copper_coin",
  });

  kubejs.shaped("thermal:gold_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:iron_coin",
  });

  kubejs.shaped("thermal:netherite_coin", ["SSS", "SSS", "SSS"], {
    S: "thermal:gold_coin",
  });

  event.remove({ output: "thermal:copper_coin" });
  event.remove({ output: "thermal:iron_coin" });
  event.remove({ output: "thermal:gold_coin" });
  event.remove({ output: "thermal:netherite_coin" });

  kubejs.shaped("16x thermal:netherite_coin", ["SSS", "SWS", "SSS"], {
    S: "minecraft:netherite_block",
    W: "extendedcrafting:ultimate_singularity",
  });

  kubejs.shapeless("9x thermal:gold_coin", ["thermal:netherite_coin"]);
  kubejs.shapeless("9x thermal:iron_coin", ["thermal:gold_coin"]);
  kubejs.shapeless("9x thermal:copper_coin", ["thermal:iron_coin"]);
});
