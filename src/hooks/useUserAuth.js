import { useSelector } from "react-redux";

export default function useUserAuth() {
    const user = localStorage.getItem("username")
    return user;
}