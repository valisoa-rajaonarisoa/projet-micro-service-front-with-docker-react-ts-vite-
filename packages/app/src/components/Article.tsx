import ArticleList from "./ArticleList";

type articleListType = {
  
    id: number;
    title: string;
    price: number;
    image: string;

}
type Props = {
  articleList:articleListType[];
  setArticleList: React.Dispatch<React.SetStateAction<articleListType[]>>;
}

const data = [
    {
        id: 1,
        title: "Tee-shirt Nike",
        price: 12,
        image: "https://images.pexels.com/photos/30063886/pexels-photo-30063886/free-photo-of-portrait-elegant-d-une-femme-tenant-des-fleurs-blanches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 2,
        title: "Chaussures Adidas",
        price: 50,
        image: "https://images.pexels.com/photos/7903529/pexels-photo-7903529.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 3,
        title: "Pantalon Puma",
        price: 35,
        image: "https://images.pexels.com/photos/30462132/pexels-photo-30462132/free-photo-of-vue-majestueuse-sur-l-himalaya-et-le-lac-glaciaire.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 4,
        title: "Casquette Reebok",
        price: 15,
        image: "https://images.pexels.com/photos/29937908/pexels-photo-29937908/free-photo-of-femme-lisant-un-journal-dans-une-rue-pluvieuse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 5,
        title: "Sweat-shirt Jordan",
        price: 45,
        image: "https://images.pexels.com/photos/30766044/pexels-photo-30766044/free-photo-of-portrait-d-une-jeune-femme-dans-un-paysage-d-hiver.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 6,
        title: "Short Under Armour",
        price: 25,
        image: "https://images.pexels.com/photos/30843770/pexels-photo-30843770/free-photo-of-femme-elegante-avec-un-chapeau-debout-dans-un-champ-de-fleurs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 7,
        title: "Chaussettes Asics",
        price: 10,
        image: "https://images.pexels.com/photos/30722200/pexels-photo-30722200/free-photo-of-chat-se-reposant-sur-le-rebord-d-une-fenetre-circulaire-eclaire-par-le-soleil.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
];


function Article({setArticleList,articleList}: Props) {
  return (
    <div className="w-full pt-20 pl-25 ">
        <ArticleList data={data} articleList={articleList} setArticleList={setArticleList}/>
    </div>
  )
}

export default Article