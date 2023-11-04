onEvent("recipes", (event) => {
  event.shaped("shrink:shrinking_device", ["SBS", "SNS", "SAS"], {
    S: "kubejs:mixed_ingot",
    A: "minecraft:stone_button",
    B: "minecraft:ender_pearl",
    N: "integratedtunnels:part_player_simulator",
  });
  event.remove({ output: "shrink:shrinking_device" });
});
