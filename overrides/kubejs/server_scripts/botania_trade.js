onEvent('recipes', event => {
    event.custom({
            "type": "botania:elven_trade",
            "ingredients": [
              {
                "item": "botania:livingwood"
              }
            ],
            "output": [
              {
                "item": "botania:dreamwood"
              }
            ]
          })


          event.custom({
            "type": "botania:elven_trade",
            "ingredients": [
              {
                "item": "botania:livingwood_log"
              }
            ],
            "output": [
              {
                "item": "botania:dreamwood_log"
              }
            ]
          })
})
