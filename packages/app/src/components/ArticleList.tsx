import ArticleItem from "./ArticleItem";

type articleListType = {
  
    id: number;
    title: string;
    price: number;
    image: string;

}
type Props = {
  articleList:articleListType[];
  data:articleListType[]
  setArticleList: React.Dispatch<React.SetStateAction<articleListType[]>>;
}


const ArticleList = ({data,setArticleList,articleList}: Props) => {
  return (
    <div className="flex flex-wrap space-x-10 space-y-15">
        {data?.map((article)=>(
            <ArticleItem article={article} articleList={articleList} key={article.id} setArticleList={setArticleList}/>
        ))}
    </div>
  )
}

export default ArticleList