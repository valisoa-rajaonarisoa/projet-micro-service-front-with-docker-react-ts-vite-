import React, { JSX } from "react"

type articleListType = {
  
    id: number;
    title: string;
    price: number;
    image: string;

}
type Props = {
  articleList:articleListType[];
  setArticleList: React.Dispatch<React.SetStateAction<articleListType[]>>;
  
  isClick:boolean;
  // setIsClick=React.Dispatch<React.SetStateAction<boolean>>;
}
const List = ({articleList,setArticleList,isClick}: Props):JSX.Element => {

  console.log("list is ",isClick)

  const style= isClick ? "bg-green-400":"bg-zinc-400"
  return (
    <div className={`px-2 py-2 fixed ${style}`}>

      <h2 className="text-2xl text-zinc-200 font-bold mb-5">List </h2>
      {articleList?.map((article)=>(
        <div className="bg-gray-700 rounded-sm flex mb-5 py-2 pl-3 w-[240px]">
          <img src={article?.image} alt="" className="w-12 h-12 rounded-full"/>

          <div className="bg-white ml-2">
            <h2 className="text-lg font-extrabold text-zinc-200">{article.title}</h2>
            <h2 className="text-sm font-extrabold text-zinc-200">{article.price} $</h2>
          </div>
         
            <button className="text-3xl font-normal ml-[40%] text-red-500 cursor-pointer">X</button>
        
        </div>
      ))}
    </div>
  )
}

export default List