
const authStore = ((set, get) => (
    {
        auth: null,
        isAuthFetched: false,
        setAuth(payload){
           set({
               auth: payload
           })
        }

    }
))

export default authStore