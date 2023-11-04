onEvent('recipes', event => {
    event.smelting('fluxnetworks:flux_dust', 'minecraft:redstone')

    event.shaped('fluxnetworks:flux_point', [           
        'SWS',
        'WAW',
        'SWS'
],{
        S: 'modularrouters:energy_upgrade',
        W: 'fluxnetworks:flux_core',
        A: 'kubejs:mix_block'
})


event.shaped('fluxnetworks:flux_plug', [           
    'SWS',
    'WAW',
    'SWS'
],{
    S: 'modularrouters:energy_upgrade',
    W: 'fluxnetworks:flux_core',
    A: 'fluxnetworks:flux_block'
})

event.remove({id:'fluxnetworks:fluxplug'})
event.remove({id:'fluxnetworks:fluxpoint'})
})