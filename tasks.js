const apiHost = 'https://co-nas-loczy.firebaseio.com/';

class ApiClient {
    sendRequest (method,resource,data=null) {
        return fetch(`${apiHost}${resource}.json`, {
            method,
            body: data ? JSON.stringify(data) : null
        })
            .then(response => response.json())
            .then(info => {
                console.log(info);
                return info;
            })
    }
    addUser(user){
        return this.sendRequest('POST', '/users', user);
    }
    getUsers(){
        return this.sendRequest('GET', '/users');
    }

    putUser(userId, user){
        return this.sendRequest('PUT', `/users/${userId}`, user);
    }

    deleteUser(userId){
        return this.sendRequest('DELETE', `/users/${userId}`);
    }
    addUserPost(userId, posts) {
        return this.sendRequest('POST', `/users/${userId}/posts`);
    }

    getUserPosts(userId) {
        return this.sendRequest('GET', `/users/${userId}posts`);
    }
}

const client = new ApiClient();

client.sendRequest('GET', '/users');
