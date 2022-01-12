import { FC } from "react";
import { Redirect } from 'umi'
const Authr: FC = (props) =>{
  const isLogin  = localStorage.token;
   if (isLogin) {
     return <div>{props.children}</div>;
    } else {
      return <Redirect to="/login" />;
    }
}

export default Authr