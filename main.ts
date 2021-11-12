let sensorverdi_raw = 0
/**
 * I ioopgaven spørres det om effekten å gange med andre tall enn to.
 * 
 * Vel 2 er dobling av verdi for hver måling og dermed dobling av tall som vises som frekvens. IOm en ganger med 10 så blir verdien ti-doblet. Da vil mørkt lys bli representert med en rimelig lys tone, mens fult lys blir en "svært" høy frekvens. Det er ikke kjekt å lage frekvensen 2550 Hz, men prøv gjerne.
 */
basic.forever(function () {
    sensorverdi_raw = input.lightLevel() * 1
    // Erstatter vising av tall.
    // Verdier lys er fra 0 - 255 der lysest er 255. DEtte kan visees som 0% - 100%. Denne testen viser verdier mellom 80 og 135 som ok-lys eller Mi (Mi er Middel)
    // 
    // Alt under8 er M som betyr Mørkdt
    // OG alt over er Ly som betyr lyst.
    // En tone vil speile lysstryken med en frekvens.
    if (sensorverdi_raw > 135) {
        basic.showLeds(`
            # . # . #
            # . . # .
            # . # . .
            # . . . .
            # # # # #
            `)
    } else if (sensorverdi_raw > 80) {
        basic.showLeds(`
            # . # . #
            # # # . .
            # . # . #
            # . # . #
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
    music.playTone(sensorverdi_raw, music.beat(BeatFraction.Eighth))
})
