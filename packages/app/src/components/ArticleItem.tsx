type articleListType = {
  id: number;
  title: string;
  price: number;
  image: string;
};
type Props = {
  articleList: articleListType[];
  article: articleListType;
  setArticleList: React.Dispatch<React.SetStateAction<articleListType[]>>;
};

const ArticleItem = ({ article, articleList, setArticleList }: Props) => {
  return (
    <div className="bg-red-400 w-[300px] h-[500px]">
      <div className="w-full h-[60%] overflow-hidden">
        <img
          src={article.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-zinc-200 text-xl font-bold">{article.title}</h2>
      <h2 className="text-zinc-200 text-xl font-bold">{article.price}</h2>

      <button
        className="py-2 px-6 ml-4 mt-5 bg-indigo-400 text-xl font-black text-zinc-200"
        onClick={() => {
          const tab = articleList;
          tab.push(article);
          setArticleList(tab);

          console.log(articleList)
        }}
      >
        chosir
      </button>
    </div>
  );
};

export default ArticleItem;
