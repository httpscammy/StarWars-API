const webURL = "https://scaling-space-robot-rqrv7vqxg5xfpr57-3001.app.github.dev/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if(token && token != "" && token != undefined) setStore({ token: token});
			},

			logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null, message: null});
			},

			signup: async(email,password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try{
					const resp = await fetch(`${webURL}api/signup`, opts)
					if(resp.status !== 200){
						alert("There has been some error");
						return false;
					} 
				
						
					const data = await resp.json();
						sessionStorage.setItem("token", data.access_token);
						setStore({ token: data.access_token})
						return true;
					}
				catch(error){
					console.error("There has been an error login in")
				}
			},

			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

			try{
				const resp = await fetch(`${webURL}api/token`, opts)
				if(resp.status !== 200){
					alert("There has been some error");
					return false;
				} 
				const data = await resp.json();
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token})
					return true;
				}
			catch(error){
				console.error("There has been an error login in")
			}
		},
				
			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				};
				fetch(`${webURL}api/hello`, opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
		}
	};
};

export default getState;
