import { useMutation, useQuery, useQueryClient } from 'react-query';
import { postLogin, postUserInfo} from "../apis/user";


export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postUserInfo, {
        onSuccess() {
            console.log("join success");
        },
    });
}

export const usePostLogin = () => {
    return useMutation(postLogin, {
        onSuccess() {
            console.log("login success");
        },
        onError(error) {
            alert(error.message);
        }
    })
}

