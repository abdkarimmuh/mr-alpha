import apisauce from "apisauce"

import { Config } from "@app/api"

const get = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL })

    const user = (token) => api.get(`/users/proc`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const uom = (token) => api.get(`/master_data/uom`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const item = (token) => api.get(`/users/proc/so_detail/api`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const assign = (token) => api.get(`/users/proc/item/get`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const procurement = (token) => api.get(`/users/proc/procurement/get`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const procurementStatus = (token, status) => api.get(`/users/proc/procurement/selectBy/${status}`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const notif = (token) => api.get(`/users/proc/notif`, {}, { headers: { "Authorization": `Bearer ${token}` } })
    const detailNotif = (token, id, status) => api.get(`/users/proc/notif/detail`, { id: id, status: status }, { headers: { "Authorization": `Bearer ${token}` } })
    const topup = (token) => api.get(`/finance-ap/topup/get`, {}, { headers: { "Authorization": `Bearer ${token}` } })

    return {
        user, uom, item, assign, procurement, procurementStatus, notif, detailNotif, topup
    }
}

const post = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({ baseURL })

    const login = (email, password) => api.post(`/login`, { email: email, password: password })
    const changePassword = (token, oldPassword, password) => api.post(`/changePassword`, { oldPassword: oldPassword, password: password }, { headers: { "Authorization": `Bearer ${token}` } })
    const assign = (token, items) => api.post(`/users/proc/item`, { items: items }, { headers: { "Authorization": `Bearer ${token}` } })
    const proc = (token, vendor, total_amount, payment, file, remarks, items) => api.post(`/users/proc/procurement`, { vendor: vendor, total_amount: total_amount, payment: payment, file: file, remarks: remarks, items: items }, { headers: { "Authorization": `Bearer ${token}` } })
    const asNotif = (token, id) => api.post(`/users/proc/notif/read`, { id: id }, { headers: { "Authorization": `Bearer ${token}` } })
    const topup = (token, amount, remark) => api.post(`/finance-ap/topup`, { amount: amount, remark: remark }, { headers: { "Authorization": `Bearer ${token}` } })
    const reject = (token, action, id) => api.post(`/users/proc/procurement/reject`, { action: action, id: id }, { headers: { "Authorization": `Bearer ${token}` } })

    return {
        login, assign, proc, asNotif, changePassword, topup, reject
    }
}

export default {
    get, post
}