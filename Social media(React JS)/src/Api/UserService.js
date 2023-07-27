import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8181/api/v1/auth";
const val = localStorage.getItem("user");

class UserService{
    addUser(data){
        return axios.post(USER_API_BASE_URL + "/register", data);
    }

    loginUser(data){
        return axios.post(USER_API_BASE_URL + "/authenticate", data);
    }

    getPosts(){
        return axios.get("http://localhost:8181/showM/"+val);
    }

    getSearchedUser(data){
        return axios.get("http://localhost:8181/search/"+data);
    }
    
    addFeedback(data){
        return axios.post("localhost:8181/api/v1/auth/feedback/add",data);
    }
}

export default new UserService();