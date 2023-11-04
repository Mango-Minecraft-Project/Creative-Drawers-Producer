onEvent('recipes', event => {
    event.custom({
    "type": "integrateddynamics:mechanical_drying_basin",
    "item": "integratedterminals:menril_glass",
    "fluid": {
      "fluid": "integrateddynamics:liquid_chorus",
      "amount": 1000
    },
    "duration": 10,
    "result": {
      "item": 'integratedterminals:chorus_glass'
    }
  })


  event.custom({
    "type": "integrateddynamics:drying_basin",
    "item": "integratedterminals:menril_glass",
    "fluid": {
      "fluid": "integrateddynamics:liquid_chorus",
      "amount": 1000
    },
    "duration": 10,
    "result": {
      "item": 'integratedterminals:chorus_glass'
    }
  })

  
  event.remove({output:'integratedterminals:chorus_glass'})


  event.shaped('integratedterminals:part_terminal_storage', [           
    'SWS',
    'ANB',
    'S S'
],{
    S: 'minecraft:glowstone_dust',
    W: 'integratedterminals:chorus_glass',
    A: 'integrateddynamics:variable_transformer_output',
    B: 'integrateddynamics:variable_transformer_input',
    N: 'integrateddynamics:part_display_panel'
})


event.shaped('integratedterminals:part_terminal_crafting_job', [           
  'SWS',
  ' N ',
  'SAS'
],{
  S: 'minecraft:glowstone_dust',
  W: 'integratedterminals:chorus_glass',
  N: 'integrateddynamics:part_display_panel',
  A: 'minecraft:crafting_table'
})


event.remove({output:'integratedterminals:part_terminal_storage'})
event.remove({output:'integratedterminals:part_terminal_crafting_job'})
event.remove({output:'integrateddynamics:proto_chorus'})
})