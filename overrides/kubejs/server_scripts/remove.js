onEvent("recipes", (event) => {
  event.remove({ id: "create:milling/cobblestone" });
  event.remove({ id: "cyclic:crusher/cobblestone" });
  event.remove({ id: "ftbic:macerating/gravel" });
  event.remove({ id: "cyclic:crusher/gravel" });
  event.remove({ id: "ftbic:macerating/sand" });
});
