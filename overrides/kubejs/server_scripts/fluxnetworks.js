onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  minecraft.smelting("fluxnetworks:flux_dust", "minecraft:redstone");

  kubejs.shaped("fluxnetworks:flux_point", ["SWS", "WAW", "SWS"], {
    S: "modularrouters:energy_upgrade",
    W: "fluxnetworks:flux_core",
    A: "kubejs:mixed_block",
  });

  kubejs.shaped("fluxnetworks:flux_plug", ["SWS", "WAW", "SWS"], {
    S: "modularrouters:energy_upgrade",
    W: "fluxnetworks:flux_core",
    A: "fluxnetworks:flux_block",
  });

  event.remove({ id: "fluxnetworks:fluxplug" });
  event.remove({ id: "fluxnetworks:fluxpoint" });
});
