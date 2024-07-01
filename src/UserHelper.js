import Constants from "./Constants";

export const loginUser = (user, onSuccess, onFailure)=> {
    const url = Constants.BASE_URL + '/auth/login?mykey=' + Constants.MY_KEY
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    }
    fetch(url, options)
        .then(resp => {
            return resp.json()

        })
        .then(result => {
            let status = result.status
            if(status==='Success') {
                onSuccess && onSuccess(result.data)
            }
            else {
                onFailure && onFailure(result)
            }
        })
}

export const logoutUser = (user, onSuccess, onFailure) => {
    onSuccess && onSuccess()
}

export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

export const setCookies = (pairs) => {
    for (const key in pairs){
        document.cookie = `${key}=${pairs[key]}; path=/; max-age=${8*60*60}`
    }
}

export const clearCookies = (pairs) => {
    for (const key in pairs){
        document.cookie = `${key}=; path=/; max-age=0`
    }
}