import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <h1>This is Post Layout</h1>   

    {/* outlet => ( PostLayout ke ) child ka data yha per aayega | child data flow | Must have to define */}
      <Outlet /> 
    </>
  )
};

export default PostLayout;
