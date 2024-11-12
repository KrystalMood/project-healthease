import { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import Footer from "~/common/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "FAQ | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "FAQ | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function FAQ() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}