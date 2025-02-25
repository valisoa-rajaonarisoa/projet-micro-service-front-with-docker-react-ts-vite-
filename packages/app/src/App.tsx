import { Link } from "react-router-dom";
import Article from "./components/Article";

import React, { Suspense, useState } from "react";

const List = React.lazy(() => import("listApp/List" as string));
type Props = {};

const App = (props: Props) => {

  // ******************************* S T A T E *************
  const [articleList, setArticleList] = useState([
    {
      id: 12,
      title: "short",
      price: 12,
      image:
        "https://images.pexels.com/photos/30063886/pexels-photo-30063886/free-photo-of-portrait-elegant-d-une-femme-tenant-des-fleurs-blanches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 123,
      title: "short",
      price: 12,
      image:
        "https://images.pexels.com/photos/30063886/pexels-photo-30063886/free-photo-of-portrait-elegant-d-une-femme-tenant-des-fleurs-blanches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ]);

  // *************************state a partager **
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="bg-gray-800">
      <button className="text-2xl ml-[40%] text-zinc-200  mt-5">
        <Link to="/membre">Page Membre</Link>
      </button>

      <div>
        <button
          className="text-3xl font-normal  text-red-500 cursor-pointer"
          // ************************evenement *********
          onClick={() => setIsClick(!isClick)}
        >
          click
        </button>
      </div>
      <div className="w-full h-full flex">
        <div className="w-[70%] ">
          <Article articleList={articleList} setArticleList={setArticleList} />
        </div>

        <div className="w-[20%] ">
          <Suspense fallback={<div>Loading...</div>}>

          
            <List
              articleList={articleList}
              setArticleList={setArticleList}

              // *********************partageee********
              isClick={isClick}
              setIsClick={setIsClick}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
