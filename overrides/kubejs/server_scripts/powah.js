onEvent('recipes', event => {
event.shaped('powah:dielectric_rod_horizontal', [           
    'SSS',
    'WWW',
    'SSS'
],{
 S: 'powah:dielectric_paste',
 W: 'kubejs:mix_bars'
})

event.shaped('powah:dielectric_rod', [           
    'SWS',
    'SWS',
    'SWS'
],{
 S: 'powah:dielectric_paste',
 W: 'kubejs:mix_bars'
})

event.shaped('16x kubejs:mix_bars', [           
    'SSS',
    'SSS',
    '   '
],{
 S: 'kubejs:mix_ingot'
})


event.remove({id:'powah:crafting/dielectric_rod_h'})
event.remove({id:'powah:crafting/dielectric_rod'})


event.shaped('powah:dielectric_casing', [      
    'SWS',
    'A A',
    'SWS'
],{
 S: 'kubejs:mix_ingot',
 W: 'powah:dielectric_rod_horizontal',
 A: 'powah:dielectric_rod'
})


event.remove({output:'powah:dielectric_casing'})
event.remove({output:'industrialforegoing:machine_frame_pity'})

event.custom({
    "type": "powah:energizing",
    "ingredients": [
      {"item": 'kubejs:mix_ingot'}
    ],
    "energy": 30000,
    "result": {
      "item":'powah:dielectric_paste',
      "count": 24
     }
    })


    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          {"item": 'powah:dielectric_casing'},
          {"item": 'kubejs:mix_block'}
        ],
        "energy": 30000,
        "result": {
          "item": 'industrialforegoing:machine_frame_pity'
          }
        })


        event.custom({
          "type": "powah:energizing",
          "ingredients": [
            {"item": 'minecraft:gold_block'}
          ],
          "energy": 30000,
          "result": {
            "item":'naturesaura:gold_leaf',
            "count": 16
           }
          })
})