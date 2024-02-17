const { default: axiosClient } = require("./axiosClient");

const getLatestPorject = ()=>axiosClient.get()