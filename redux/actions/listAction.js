const addName = (payload) => ({
    type: "ADD_NAME",
    payload,
})
const addEmail = (payload) => ({
    type: "ADD_EMAIL",
    payload,
})
const addGender = (payload) => ({
    type: "ADD_GENDER",
    payload,
})
const addStatus = (payload) => ({
    type: "ADD_STATUS",
    payload,
})


export {addName,addEmail,addGender,addStatus};