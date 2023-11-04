onEvent("item.registry", (event) => {
  event.create("diamond_chips");
  event.create("emerald_chips");
  event.create("obsidian_chips");
  event.create("flint_chips");
  event.create("nether_quartz_shard");
  event.create("nether_star_fragment");
});

onEvent("block.registry", (event) => {
  event.create("crushed_netherrack").material("stone").hardness(2.0);
  event.create("crushed_endstone").material("stone").hardness(2.0);
});
