const token = store => store.user.token
const id = store => store.user.id
const name = store => store.user.name
const email = store => store.user.email
const saldo = store => store.user.saldo

export default {
    token, id, name, email, saldo
}
