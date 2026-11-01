import {createContext,useContext,useEffect,useState} from 'react';import api from '../services/api';
const C=createContext(null);export const useAuth=()=>useContext(C);
export function AuthProvider({children}){const [user,setUser]=useState(()=>{try{return JSON.parse(localStorage.getItem('learnspace_user'))}catch{return null}});const [loading,setLoading]=useState(false);
const accept=data=>{localStorage.setItem('learnspace_token',data.token);localStorage.setItem('learnspace_user',JSON.stringify(data.user));setUser(data.user);return data.user};
const login=async form=>accept((await api.post('/auth/login',form)).data);const register=async form=>accept((await api.post('/auth/register',form)).data);const logout=()=>{localStorage.removeItem('learnspace_token');localStorage.removeItem('learnspace_user');setUser(null)};
useEffect(()=>{if(!localStorage.getItem('learnspace_token'))return;setLoading(true);api.get('/auth/me').then(r=>setUser(r.data.user)).catch(logout).finally(()=>setLoading(false));},[]);
return <C.Provider value={{user,loading,login,register,logout}}>{children}</C.Provider>}
