import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "d20f2cfd-7cab-429f-a515-e3c7d4a89ddd"}
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data;
        });
    }, 
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.1/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.1/follow/${userId}`)
    }
}


