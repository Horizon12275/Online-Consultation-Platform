import { Divider, Flex } from "antd";
import { BasicLayout } from "../layouts";
import ArticleHeader from "../components/article_header";
import { getArticleById } from "../services/articleService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendedArticles from "../components/whattoreadnext";
import "github-markdown-css/github-markdown.css";
import ArticleEditor from "../components/article_editor";
import ArticleDisplay from "../components/article_display";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(id).then((article) => {
      setArticle(article);
    });
  }, []);
  return (
    <BasicLayout>
      <Flex vertical align="center">
        <ArticleHeader article={article} />
        <ArticleDisplay article={article} />
        <Divider />
        <ArticleEditor />
        <RecommendedArticles />
      </Flex>
    </BasicLayout>
  );
};

export default ArticlePage;