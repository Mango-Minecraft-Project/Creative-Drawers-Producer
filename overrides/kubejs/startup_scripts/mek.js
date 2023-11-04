onEvent("item.registry", (event) => {
  event.create("uncolored_control_circuit");
  event.create("uncolored_alloy_infused");
  event.create("enriched_uranium");
  event.create("aqua_ball");
});

onEvent("block.registry", (event) => {
  event.create("ultimate_pllet_cell").material("metal").hardness(2.0);
});
