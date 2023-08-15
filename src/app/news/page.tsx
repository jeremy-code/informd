import { Article } from "@/components/Article";
import { NewsFeedNavbar } from "@/components/Navbar";
import { getNews } from "@/utils";

const NewsFeed = async () => {
  const { articles } = await getNews("top-headlines", {
    country: "us",
  });

  return (
    <>
      <NewsFeedNavbar />
      <main className="p-6">
        <Article key={articles[0].url} {...articles[0]} />
        {/* {articles.map((article) => (
          <Article key={article.url} {...article} />
        ))} */}
      </main>
    </>
  );
};

export default NewsFeed;
