onEvent("recipes", (event) => {
  event.shapeless("2x kubejs:nether_end", [
    "kubejs:nether_dye",
    "kubejs:end_dye",
  ]);

  event.shaped("minecraft:end_portal_frame", ["   ", "SWS", "   "], {
    S: "minecraft:end_stone",
    W: "minecraft:end_rod",
  });
  event.shapeless("jamd:mine_portal_block", [
    "kubejs:nether_medal",
    "kubejs:end_medal",
  ]);
  event.remove({ id: "jamd:mine_portal_block" });
});
