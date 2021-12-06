new Vue({
    el: '#app',
    data: function() {
        return {
            user: localStorage.getItem("user"),
            role: localStorage.getItem("role"),
        }
    },
    methods:{
        translateRole(role){
            let roleName={
                "Admin": "管理员",
                "Donor": "捐赠者",
                "Volunteer": "志愿者"
            }
            return roleName[role]
        },
        exitLogin(){
            localStorage.removeItem("user")
            localStorage.removeItem("Access-Token")
            localStorage.removeItem("role")
        },
        ifShow(role){
            if (role == this.role){
                return true
            }
            else{
                return false
            }
        }
    },
})