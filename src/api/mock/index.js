const create = () => {
    // const TIMEOUT = 3000
    const TIMEOUT = 0

    return {
        getUser: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getUser.json') })
            }, TIMEOUT)
        }),
        getAssign: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getAssign.json') })
            }, TIMEOUT)
        }),
        getUom: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getUom.json') })
            }, TIMEOUT)
        }),
        getVendor: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getVendor.json') })
            }, TIMEOUT)
        }),
        getNotifications: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getNotifications.json') })
            }, TIMEOUT)
        }),
        getHistoryProcurement: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getHistoryProcurement.json') })
            }, TIMEOUT)
        }),
        getHistoryTopUp: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getHistoryTopUp.json') })
            }, TIMEOUT)
        }),
    }
}

export default {
    create
}
