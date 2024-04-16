"use client";
import CircularProgress from "@mui/material/CircularProgress";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
interface HomeProps {
  isCrawler: boolean;
}
const Home: React.FC<HomeProps> = ({ isCrawler }) => {
  useEffect(() => {
    if (!isCrawler) {
      window.location.href = "/web/index.html";
    }
  }, [isCrawler]);

  return (
    <div>
      {isCrawler && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "105vh",
          }}
        >
          <CircularProgress />
          <div style={{ paddingLeft: 10 }}> Cargando Flutter...</div>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers["user-agent"] || "";
  const isCrawler = /bot|googlebot|crawler|spider|robot|crawling/i.test(
    userAgent
  );
  debugger;
  return { props: { isCrawler } };
};

export default Home;
