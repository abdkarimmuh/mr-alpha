import { AsyncStorage } from "@app/services"

const submitProcurement = async (vendor, total_amount, payment, file, remarks, items) => {
    submit_procurement = await AsyncStorage.FetchData("submit_procurement")
    data = { vendor, total_amount, payment, file, remarks, items }

    if (submit_procurement === undefined || submit_procurement === null) {
        result = []
        result = result.concat(data)
        console.log("result output : ", result)
        await AsyncStorage.StoreData("submit_procurement", result)
    } else {
        submit_procurement = submit_procurement.concat(data)
        console.log("submit_procurement output : ", submit_procurement)
        await AsyncStorage.StoreData("submit_procurement", submit_procurement)
    }
}

/**
 * JavaScript Code Snippet
 * Convert Number to Rupiah & vice versa
 * https://gist.github.com/845309
 *
 * Copyright 2011-2012, Faisalman
 * Licensed under The MIT License
 * http://www.opensource.org/licenses/mit-license  
 *
 */

const convertToRupiah = (angka) => {
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('')
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
    return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('')
}

/**
 * Usage example:
 * alert(convertToRupiah(10000000)) -> "Rp. 10.000.000"
 */

function convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10)
}
/**
 * Usage example:
 * alert(convertToAngka("Rp 10.000.123")) -> 10000123
 */

export default {
    convertToRupiah, convertToAngka, submitProcurement
}