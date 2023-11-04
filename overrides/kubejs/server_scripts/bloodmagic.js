onEvent('recipes', event => {
    event.custom({ 
    "type": "bloodmagic:altar",
    "input": {
      "item": 'refinedstorage:quartz_enriched_iron_block'
    },
    "output": {
      "item": 'refinedstorage:machine_casing'
    },
    "upgradeLevel": 4,
    "altarSyphon": 4000,
    "consumptionRate": 30,
    "drainRate": 50
  })


  event.remove({output:'refinedstorage:machine_casing'})


  event.custom({ 
    "type": "bloodmagic:altar",
    "input": {
      "item": 'modularrouters:modular_router'
    },
    "output": {
      "item": 'custom:modular_master'
    },
    "upgradeLevel": 4,
    "altarSyphon": 4000,
    "consumptionRate": 30,
    "drainRate": 50
  })
})